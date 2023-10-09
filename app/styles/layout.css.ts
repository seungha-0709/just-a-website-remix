import { style } from "@vanilla-extract/css";
import { root } from "./root.css";

export const container = style({
  width: "100svw",
  minHeight: "100svh",
  display: "flex",
  justifyContent: "center",
  position: "relative",
});

export const aside = style({
  minWidth: "calc((100svw - 1000px) / 2)",
  "@media": {
    "screen and (max-width: 1200px)": {
      display: "none",
    },
  },
});

export const aside_left = style([
  aside,
  {
    position: "fixed",
    left: 0,
    top: 0,
  },
]);
export const aside_right = style([
  aside,
  {
    position: "fixed",
    right: 0,
    top: 0,
  },
]);

export const main_container = style({
  width: 1000,
  position: "fixed",
  height: "100svh",
  overflowY: "scroll",
  borderLeft: `1px solid ${root.color.COLOR_09}`,
  borderRight: `1px solid ${root.color.COLOR_09}`,
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
  "@media": {
    "screen and (max-width: 1200px)": {
      width: "100%",
    },
  },
});

export const lnb_container = style({
  display: "flex",
  flexDirection: "row-reverse",
  paddingRight: 40,
  paddingTop: 20,
  boxSizing: "border-box",
});

export const hamburger_li = style({
  fontSize: 18,
  fontWeight: 500,
  color: root.color2.BLACK,
  marginBottom: 12,
  cursor: "pointer",
});

export const hamburger_button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: root.color.WHITE,
  height: 40,
  width: 40,
  padding: 0,
  borderRadius: 20,
  ":hover": {
    background: "#efefef",
  },
});
