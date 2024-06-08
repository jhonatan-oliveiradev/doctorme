import ReactDom from "react-dom";

export function PreloadResources() {
  ReactDom.preload("./sprite.svg", {
    as: "image",
    type: "image/svg+xml",
  });

  return null;
}
