import { gql } from "apollo-boost";
import React from "react";

import { useWPGraphQLQuery, withWPGraphQL } from "../../hooks/wpGraphQL";
import SingleTemplate from "../../templates/SingleTemplate";
import { ErrorScreen } from "../ErrorScreen";
import { LoadingScreen } from "../LoadingScreen";

const PREVIEW_QUERY = gql`
  query PreviewQuery($id: ID!) {
    wp {
      contentNode(id: $id, idType: DATABASE_ID) {
        ...WP_ContentNodeForPage
      }
    }
  }
`;

export const WPPreview = withWPGraphQL(function WPPreview({ id, wpnonce }) {
  const context = {
    headers: {
      "X-WP-Nonce": wpnonce,
    },
    credentials: "include",
  };

  const { loading, error, data } = useWPGraphQLQuery(PREVIEW_QUERY, {
    context,
    fetchPolicy: "network-only",
    variables: { id },
  });

  if (loading) {
    return <LoadingScreen label={"Hämtar förhandsgranskning"} />;
  }
  if (error) {
    return <ErrorScreen label={"Ett fel inträffade"} error={error} />;
  }

  const { contentNode } = data;

  return <SingleTemplate pageContext={{ contentNode, isPreview: true }} />;
});
