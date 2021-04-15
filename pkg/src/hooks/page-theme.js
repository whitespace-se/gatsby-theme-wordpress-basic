import { useStaticQuery, graphql } from "gatsby";

export default function usePageTheme() {
  // return useStaticQuery(graphql`
  //   query PageTheme {
  //     wp {
  //       themeOptions {
  //         fRgschema {
  //           colorScheme
  //           customColorScheme
  //         }
  //       }
  //     }
  //   }
  // `).wp.themeOptions.fRgschema;
}
