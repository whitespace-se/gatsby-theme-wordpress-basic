import { HeadingLevelProvider } from "@jfrk/react-heading-levels";
import { IDContextProvider } from "@jfrk/react-id";
import { StoreProvider } from "@whitespace/gatsby-hooks";
import React, { createContext } from "react";

import { SiteLayout } from "./components";
import { PageContextProvider } from "./hooks/page-context";

export const pageWrapperContext = createContext();

export const PageWrapperContextProvider = pageWrapperContext.Provider;

export function PageWrapper({ context, children }) {
  return (
    <>
      <PageWrapperContextProvider value={context}>
        <PageContextProvider>
          <HeadingLevelProvider>
            <IDContextProvider>
              <StoreProvider
                initialState={{
                  cookieConsent: { answer: null, answeredAt: null },
                }}
              >
                <SiteLayout>{children}</SiteLayout>
              </StoreProvider>
            </IDContextProvider>
          </HeadingLevelProvider>
        </PageContextProvider>
      </PageWrapperContextProvider>
    </>
  );
}
