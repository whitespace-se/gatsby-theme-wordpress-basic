import { useStaticQuery, graphql } from "gatsby";

export default function useSearchSettings() {
  // return useStaticQuery(graphql`
  //   query SearchSettings {
  //     wp {
  //       search {
  //         displaySettings {
  //           emptySearchResultMessage
  //           searchPlaceholderText
  //           searchLabelText
  //           searchButtonText
  //         }
  //         searchWord {
  //           suggestions
  //         }
  //       }
  //     }
  //   }
  // `).wp.search;
}
