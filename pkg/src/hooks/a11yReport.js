import { useStaticQuery, graphql } from "gatsby";

export default function useA11y() {
  // return useStaticQuery(graphql`
  //   query useA11y {
  //     wp {
  //       accessibilityReport {
  //         a11yAudit {
  //           a11yambitiondate
  //           a11ycontactemail
  //           a11ycontactphone
  //           a11ycontacturi {
  //             ... on WP_Page {
  //               id
  //               uri
  //             }
  //           }
  //           a11ydeficiency
  //           a11yinstantiation
  //           a11yorganisation
  //           a11yresponsetime
  //           a11ypublisheddate
  //           a11yreviewdate
  //           a11ystatus
  //           a11ytestmethod
  //           a11ytestmethodauditurl
  //           a11ytestmethodreporturl
  //           a11ywebsite
  //         }
  //       }
  //     }
  //   }
  // `).wp.accessibilityReport.a11yAudit;
}
