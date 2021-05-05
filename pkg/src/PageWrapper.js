import { HeadingLevelProvider } from "@jfrk/react-heading-levels";
import { IDContextProvider } from "@jfrk/react-id";
import { StoreProvider } from "@whitespace/gatsby-hooks";
import React, { createContext } from "react";

export const pageWrapperContext = createContext();

export const PageWrapperContextProvider = pageWrapperContext.Provider;

export function PageWrapper({ context, children }) {
  return (
    <>
      <PageWrapperContextProvider value={context}>
        <HeadingLevelProvider>
          <IDContextProvider>
            <StoreProvider
              initialState={{
                cookieConsent: { answer: null, answeredAt: null },
              }}
            >
              {children}
            </StoreProvider>
          </IDContextProvider>
        </HeadingLevelProvider>
      </PageWrapperContextProvider>
    </>
  );
}
