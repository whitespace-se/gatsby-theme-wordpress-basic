import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";
import React from "react";

import * as Blocks from "../blocks";

function fromBlockToComponentName(block) {
  return (
    block &&
    block.name &&
    upperFirst(camelCase("w p " + block.name.replace(/\//g, " ") + " block"))
  );
}

export function WPBlockController({ block, ...restProps }) {
  let componentName = fromBlockToComponentName(block);
  let BlockComponent =
    (componentName && Blocks[componentName]) || Blocks.WPDefaultBlock;
  return (
    <BlockComponent
      block={block}
      componentName={componentName}
      {...restProps}
    />
  );
}
