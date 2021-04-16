import { useStaticQuery, graphql } from "gatsby";

export default function usePages() {
  return useStaticQuery(graphql`
    query WP_PageTree {
      wp {
        pages(
          where: { parent: null, orderby: { field: MENU_ORDER, order: ASC } }
          first: 100000
        ) {
          nodes {
            id
            parentId
            title(format: RAW)
            isFrontPage
            uri
            url: uri
          }
        }
      }
    }
  `).wp.pages.nodes;
}
