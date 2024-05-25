import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import type { ComponentType } from "react";
import { renderToString } from "react-dom/server";

export function getInlineStyles(Component: ComponentType) {
  const cache = createCache();
  renderToString(
    <StyleProvider cache={cache}>
      <Component />
    </StyleProvider>
  );

  const styleText = extractStyle(cache, { plain: true });

  return styleText;
}
