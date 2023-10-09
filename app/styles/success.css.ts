import { style } from "@vanilla-extract/css";
import { root, text } from "./root.css";

export const successSection = style({
  height: 600,
  padding: 0,
  position: "absolute",
  top: 2240,
  boxSizing: "border-box",
  maxWidth: 1000,
  zIndex: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const success_content_area = style({
  width: "100%",
  height: "fit-content",
  position: "relative",
  zIndex: 0,
  display: "flex",
  flexDirection: "column",
});

export const success_title = style({
  fontSize: 36,
  fontWeight: 700,
  color: root.color.COLOR_03,
  marginTop: 0,
  marginBottom: 0,
  textAlign: "left",
  paddingLeft: 40,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: 24,
    },
  },
});

export const success_subtitle = style({
  fontSize: 18,
  fontWeight: 500,
  color: root.color2.COLOR_03,
  lineHeight: 1.6,
  marginBottom: 20,
  marginTop: 20,
  textAlign: "left",
  paddingLeft: 40,
});

export const success_example_item = style({
  width: 200,
  height: 320,
  textAlign: "left",
  color: root.color.WHITE,
  display: "flex",
  justifyContent: "stretch",
  overflow: "hidden",
  cursor: "pointer",
  position: "relative",
  border: "none",
  flexDirection: "column",
});

export const success_item_container = style({
  width: "100%",
  height: 400,
  marginTop: 20,
  paddingLeft: 40,
  overflowX: "scroll",
});

export const success_item_content_container = style({
  width: "fit-content",
  display: "flex",
  flexWrap: "nowrap",
  gap: 32,
  padding: "0px",
});

/**
 * 성공사례 리스트 페이지
 */

export const success_list_item_container = style({
  display: "flex",
  gap: 20,
  margin: "20px 40px",
});

export const success_list_item_img = style({
  width: 140,
  minWidth: 80,
  height: 80,
  borderRadius: 8,
  objectFit: "cover",
});

export const success_list_item_img_skeleton = style({
  width: 140,
  height: 80,
  borderRadius: 8,
  background: root.color2.GRAY_01,
});

export const success_list_item = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const success_list_item_title = style([
  text,
  {
    color: root.color2.BLACK,
    fontWeight: 500,
  },
]);

export const success_list_excerpt = style([
  text,
  {
    fontSize: 12,
    maxWidth: 800,
    minWidth: 120,
    fontWeight: 300,
    color: root.color2.GRAY_02,
    height: 42,
    overflowY: "hidden",
  },
]);

export const success_list_title = style([
  text,
  {
    color: root.color2.COLOR_00,
    fontWeight: 800,
    fontSize: 36,
    marginBottom: 60,
    marginTop: 120,
    paddingLeft: 40,
    "@media": {
      "screen and (max-width: 768px)": {
        fontSize: 24,
        fontWeight: 600,
      },
    },
  },
]);

/**
 * 성공사례 디테일 페이지
 */

export const success_detail_img = style({
  width: "100%",
  height: 400,
  objectFit: "cover",
  objectPosition: "0% 40%",
});
