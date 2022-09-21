import { FootBar } from "./IconsCards";
export function CreateIconsCards(icon) {
  return (
    <FootBar
      key={icon.id}
      x1={icon.anchor.class}
      x2={icon.anchor.href}
      i1={icon.i.src}
      i2={icon.i.alt}
      a={icon.anchorName}
      cssID={icon.cssID}
    />
  );
}
