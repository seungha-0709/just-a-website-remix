import { style } from "@vanilla-extract/css";
import { root, text } from "./root.css";

export const profile_kong_backgroundStyle = style({
  width: "100%",
  height: 200,
  objectFit: "cover",
  objectPosition: "0% 65%",
  background: root.color.COLOR_01,
  zIndex: 0,
  borderRadius: "24px 0 0 24px",
  boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.8)",
});

export const profileSection = style({
  width: "100%",
  height: "fit-content",
  position: "absolute",
  top: 890,
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
  padding: "50px 30px 50px 30px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  zIndex: 0,
  borderRadius: 12,
  margin: 20,
  background: root.color2.COLOR_01,
});

export const profile_jeong_backgroundStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "100% 25%",
  background: root.color.COLOR_02,
  zIndex: 0,
  left: 100,
  borderRadius: "0 24px 24px 0",
  // boxShadow: "0px 0px 10px rgba(198, 185, 153, 0.4)",
  boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.8)",
});

export const profile_jeong = style({
  background: root.color.COLOR_06,
  padding: "50px 30px",
  position: "relative",
  top: -20,
  zIndex: 1,
  borderRadius: 12,
  margin: 20,
  boxSizing: "border-box",
});

export const profile_container = style({
  width: "100%",
  height: "100%",
  display: "flex",
});

export const profile_title_text = style({
  fontSize: 20,
  fontWeight: 400,
  marginTop: 0,
  marginBottom: 36,
  color: root.color.WHITE,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: 18,
    },
  },
});

export const profile_title_name = style({
  fontSize: 32,
  fontWeight: 600,
  fontStyle: "normal",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: 24,
    },
  },
});

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
    color: root.color.WHITE,
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
    color: root.color.COLOR_09,
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
