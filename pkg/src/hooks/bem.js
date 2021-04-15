import cx from "classnames";
// import decurry from "decurry";
import PropTypes from "prop-types";
import React, { createContext, useContext } from "react";

// function getDisplayName(WrappedComponent) {
//   return WrappedComponent.displayName || WrappedComponent.name || "Component";
// }

// export function withBEM(WrappedComponent, defaultBaseClassName) {
//   function WithBEM({
//     baseClassName = defaultBaseClassName,
//     modifiers = [],
//     className,
//     ...restProps
//   }) {
//     return (
//       <WrappedComponent
//         className={bemClassNames(baseClassName, modifiers, className)}
//         {...restProps}
//       />
//     );
//   }
//   WithBEM.displayName = `WithBEM(${getDisplayName(WrappedComponent)})`;
//   WithBEM.propTypes = {
//     baseClassName: PropTypes.string.isRequired,
//     modifiers: PropTypes.any,
//     className: PropTypes.any,
//   };
//   return WithBEM;
// }

// export const bem = decurry((namespace) => {
//   return (block) => {
//     let baseClassName = block ? `${namespace}__${block}` : namespace;
//     return (modifiers = []) => (className = null) => {
//       return cx(
//         baseClassName,
//         cx(modifiers)
//           .split(/\s+/g)
//           .map((modifier) => `${baseClassName}--${modifier}`),
//         className,
//       );
//     };
//   };
// }, 4);

export const bem = (namespace) => {
  return (...tokens) => {
    let normalizedTokens = cx(tokens).split(/\s+/g);
    let block = normalizedTokens.find((token) => token.startsWith("__")) || "";
    normalizedTokens = normalizedTokens.map((token) =>
      token.startsWith("--")
        ? `${namespace}${block}${token}`
        : token.startsWith("__")
        ? null
        : token,
    );
    return cx(`${namespace}${block}`, normalizedTokens);
  };
};

export const useBEM = (namespace = useContext(bemContext).namespace) => {
  return bem(namespace);
};

export const bemContext = createContext({ namespace: null });

export const BEMProvider = bemContext.Provider;

export function BEM({ namespace, children: Children }) {
  return (
    <BEMProvider value={{ namespace }}>
      {typeof Children === "function" ? <Children /> : Children}
    </BEMProvider>
  );
}

BEM.propTypes = {
  namespace: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};
