import * as React from "react";
 
import {
  ServerStyleSheet,
  StyleSheetManager
} from "styled-components";

const sheetByPathname = new Map();

export const wrapRootElement = ({ element, pathname }) => {
  const sheet = new ServerStyleSheet();
  sheetByPathname.set(pathname, sheet);
  return (
    <>
      <StyleSheetManager sheet={sheet.instance}>
        {element}
      </StyleSheetManager> 
    </>
  );
};

export const onRenderBody = ({
  setHeadComponents,
  pathname
}) => {
  const sheet = sheetByPathname.get(pathname);
  if (sheet) {
    setHeadComponents([sheet.getStyleElement()]);
    sheetByPathname.delete(pathname);
  }
};
