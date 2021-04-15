import { useStaticQuery, graphql } from "gatsby";

export default function useCookieConsentSettings() {
  // return useStaticQuery(graphql`
  //   query CookieConsentSettings {
  //     wp {
  //       themeOptions {
  //         ws_cookieConsent {
  //           cookieconsentactive
  //           cookieconsentapprovebutton
  //           cookieconsentdeclinebutton
  //           cookieconsentdescription
  //           cookieconsentmorelink
  //           cookieconsentmorelinkurl {
  //             ... on WP_Page {
  //               id
  //               uri
  //             }
  //           }
  //           cookieconsentposition
  //           cookieconsenttitle
  //         }
  //       }
  //     }
  //   }
  // `).wp.themeOptions.ws_cookieConsent;
}
