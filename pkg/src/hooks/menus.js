import { useStaticQuery, graphql } from "gatsby";

import { getPage } from "../utils/pageTree";

import usePages from "./pages";

export default function useMenus() {
  let pages = usePages();
  return useStaticQuery(graphql`
    query WP_Menus {
      wp {
        menus {
          nodes {
            menuItems {
              nodes {
                connectedObject {
                  ... on WP_Page {
                    id
                    contentType {
                      node {
                        name
                      }
                    }
                  }
                }
                label
                description
                url
                target
              }
            }
            locations
          }
        }
      }
    }
  `).wp.menus.nodes.map((menu) => ({
    ...menu,
    items: menu.menuItems.nodes.map((menuItem) => {
      let {
        connectedObject,
        label,
        description,
        url,
        target,
        themeColor,
        icon,
      } = menuItem;
      let { contentType: { node: { name: type = "custom" } = {} } = {}, id } =
        connectedObject || {};
      let content = type === "page" ? getPage(pages, id) : {};
      return {
        type,
        url,
        target: connectedObject && connectedObject.id ? target : "_blank",
        ...content,
        label,
        description: description || (content && content.description),
        themeColor,
        icon,
      };
    }),
  }));
}

export function useMenu(location) {
  let menus = useMenus();
  return menus.find((menu) => (menu.locations || []).includes(location));
}
