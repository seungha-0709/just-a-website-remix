import { style } from "@vanilla-extract/css";
import { root, text } from "./root.css";

export const profileSection = style({
  width: "100%",
  height: "fit-content",
  position: "absolute",
  top: 1000,
  display: "flex",
  gap: 0,
  zIndex: 0,
  overflow: "hidden",
  flexDirection: "column",
  letterSpacing: 1.2,
  fontWeight: 200,
  boxSizing: "border-box",
});

export const profile_kong = style({
  //   padding: "50px 30px 50px 30px",
  position: "relative",
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "space-around",
  zIndex: 0,
  borderRadius: 12,
  margin: 20,
  //   background: root.color2.COLOR_01,
});

export const profile_jeong = style({
  //   background: root.color.COLOR_06,
  padding: "50px 30px 20px 30px",
  justifyContent: "space-around",
  position: "relative",
  display: "flex",
  alignItems: "flex-end",
  top: -20,
  zIndex: 1,
  //   borderRadius: 12,
  borderTop: `1px solid ${root.color2.GRAY_01}`,
  borderBottom: `1px solid ${root.color2.GRAY_01}`,
  margin: 20,
  boxSizing: "border-box",
});

export const profile_container = style({
  width: "100%",
  height: "100%",
  display: "flex",
});

export const profile_title_text = style([
  text,
  {
    fontSize: 20,
    fontWeight: 400,
    marginTop: 0,
    marginBottom: 36,
    color: root.color2.BLACK,
    "@media": {
      "screen and (max-width: 768px)": {
        fontSize: 18,
      },
    },
  },
]);

export const profile_title_name = style([
  text,
  {
    fontSize: 32,
    fontWeight: 600,
    fontStyle: "normal",
    "@media": {
      "screen and (max-width: 768px)": {
        fontSize: 24,
      },
    },
  },
]);

export const ul = style([
  text,
  {
    listStyle: "none",
    padding: 0,
    boxSizing: "border-box",
    margin: 0,
    width: "100%",
  },
]);

export const li_span = style([
  text,
  {
    fontWeight: 600,
    color: root.color2.BLACK,
    display: "block",
    width: "fit-content",
    margin: "16px 0",
  },
]);

export const li_strong = style([
  text,
  {
    marginBottom: 8,
    display: "block",
    letterSpacing: 0,
    color: root.color2.BLACK,
  },
]);

export const name = style({
  fontSize: 28,
  fontWeight: 600,
});

export const flex = style({
  display: "flex",
  gap: 40,
});
