import React from "react";

import { useHTMLProcessor } from "../../hooks/html-processor";

export function WPCoreParagraphBlock({ block, contentMedia }) {
  const { processContent } = useHTMLProcessor();
  const content = processContent(block.originalContent, contentMedia);
  return <>{content}</>;
}
