import omit from "lodash/omit";
import { parse, match, compile } from "path-to-regexp";
import QueryString from "query-string";
import { useMemo, useEffect, useState } from "react";

import useLocation from "./location";

export function useURLParams(urlPattern) {
  let location = useLocation();

  let pathnameParams = useMemo(() => {
    return parse(urlPattern)
      .map((token) => token.name)
      .filter(Boolean);
  }, [urlPattern]);

  let parseLocation = useMemo(() => {
    const matchUrlPattern = match(urlPattern, { decode: decodeURIComponent });
    return ({ pathname, search }) => {
      let result = matchUrlPattern(pathname);
      if (!result) {
        return null;
      }
      return { ...result.params, ...QueryString.parse(search) };
    };
  }, [urlPattern]);

  let [params, setParams] = useState(null);

  useEffect(() => {
    setParams(parseLocation(location));
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (params) {
      let pathname = compile(urlPattern, { encode: encodeURIComponent })(
        params,
      );
      let search = QueryString.stringify(omit(params, pathnameParams));
      window.history.replaceState(
        null,
        "",
        `${pathname}${search ? "?" + search : ""}`,
      );
    }
  }, [params]);

  return [params || {}, setParams];
}
