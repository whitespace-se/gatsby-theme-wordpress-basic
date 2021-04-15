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
            # featuredImage {
            #   databaseId
            #   src: sourceUrl(size: PROMO_CARD_SMALL)
            #   srcSet(size: PROMO_CARD_LARGE)
            #   width(size: PROMO_CARD_LARGE)
            #   height(size: PROMO_CARD_LARGE)
            #   altText
            # }
            uri
            url: uri
            # themeColor
            # description
            # icon
          }
        }
      }
    }
  `).wp.pages.nodes;
}
