import { style } from "@vanilla-extract/css";
import { root, text } from "./root.css";

export const header = style({
  width: "100svw",
  height: 76,
  position: "fixed",
  top: 0,
  zIndex: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: root.color.COLOR_02,
  borderBottom: `1px solid ${root.color.COLOR_05}`,
});

export const mainSection = style({
  height: 500,
  width: "100%",
  boxSizing: "border-box",
  position: "absolute",
  top: 0,
  padding: 20,
});

export const contents = style({
  width: "100svw",
  overflowX: "hidden",
  height: "fit-content",
  background: root.color.WHITE,
});

export const blog_backgroundStyle = style({
  objectFit: "cover",
  height: 300,
  objectPosition: "100% 0%",
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 0,
});

export const titleText = style({
  fontSize: 20,
  fontWeight: 600,
});

export const main_title_area = style({
  position: "relative",
  top: 20,
  zIndex: 0,
});

export const main_title_text = style({
  fontSize: 24,
  color: root.color2.COLOR_01,
  fontWeight: 700,
  margin: 0,
  width: "100%",
  padding: "20px 0 0",
  boxSizing: "border-box",
});

export const main_content_text = style({
  fontSize: 14,
  color: root.color2.COLOR_05,
  fontWeight: 400,
  margin: "40px 12px 0",
  width: "100%",
  height: "auto",
  // padding: "12px 32px",
});

export const place_backgroundStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
  paddingBottom: 100,

  borderRadius: "24px 24px 0 0",
});
export const place_section = style({
  height: 500,
  position: "absolute",
  top: 3660,
  zIndex: 0,
  width: "100%",
});

export const header_ul = style({
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 0,
  padding: 0,
  width: 600,
  color: root.color.COLOR_09,
  fontWeight: 400,
  fontSize: 18,
  letterSpacing: 1.4,
});

export const header_nav = style({
  width: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const globalNav = style({
  position: "fixed",
  top: "50%",
  right: 1,
  zIndex: 0,
  transform: "translate(0%, -50%)",
  width: 100,
  background: root.color.WHITE,
});

export const globalNav_button = style({
  width: 100,
  height: 100,
});

export const main_title_em = style({
  fontSize: 40,
});

export const main_title_name = style({
  fontSize: 24,
});

export const main_title_main_text = style({
  fontSize: 20,
});

export const desktop_container = style({
  width: 1200,
  position: "absolute",
  overflow: "hidden",
  margin: "0 auto",
  borderLeft: `1px solid ${root.color.COLOR_05}`,
  borderRight: `1px solid ${root.color.COLOR_05}`,
});

export const main_words_list_container = style({
  width: "100%",
  height: 324,
  zIndex: 0,
  display: "flex",
  // margin: "0 auto",
  position: "absolute",
  top: 0,
  flexWrap: "wrap",
  alignContent: "center",
  padding: "20px 0px 52px",
  boxSizing: "border-box",
  justifyContent: "flex-start",
  gap: 12,
  background: "transparent",
  // backgroundSize: "cover",
  // background:
  //   "url(https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/mobile/mobile_bg_2.png)",
});

export const main_words_list_bg = style({
  position: "absolute",
  top: 0,
  objectFit: "cover",
  borderRadius: "24px 24px 0 0",
});

export const main_words_list_item = style({
  // width: 120,
  height: 32,
  position: "relative",
  top: -60,
  zIndex: 0,
  display: "inline-flex",
  flexDirection: "row",
  gap: 8,
  justifyContent: "flex-start",
  alignItems: "center",
  fontSize: 14,
  fontWeight: 400,
  color: root.color2.BLUE_01,
  borderRadius: 8,
  background: root.color2.BLUE_04,
  padding: "8px 16px",
  // boxShadow: "4px 4px 10px rgba(30, 10, 10, 0.8)",
});

export const mail_bottom_sheet_container = style({
  background: "transparent",
  height: 500,
  width: "100%",
  borderRadius: "24px 24px 0 0",
});

export const place_content_area = style({
  padding: 20,
  width: "100%",
  height: "fit-content",
  position: "relative",
  zIndex: 0,
  display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  flexDirection: "column",
});

export const hamburger_li = style({
  fontSize: 16,
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
