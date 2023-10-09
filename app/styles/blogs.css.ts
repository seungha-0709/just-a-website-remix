import { style } from "@vanilla-extract/css";
import { root, text } from "./root.css";

export const blogSection = style({
  background: root.color.WHITE,
  width: "100%",
  height: 944,
  display: "flex",
  overflow: "hidden",
  boxSizing: "border-box",
  position: "absolute",
  top: 2700,
  zIndex: 0,
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "24px 24px 0 0",
});

export const blog_contents_container = style({
  //   position: "absolute",
  //   width: "100%",
  top: 0,
  zIndex: 0,
  height: 800,
  margin: "60px 28px 0",
});

export const blog_section_title = style({
  fontSize: 36,
  fontWeight: 600,
  position: "relative",
  left: 0,
  top: 0,
  margin: "0px 0px 60px 20px",
  textAlign: "left",
  color: root.color2.BLACK,
});

export const blog_list_ul = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const blog_list_title = style({
  margin: "0 0 8px 0",
  // paddingLeft: 8,
  paddingTop: 14,
  fontWeight: 500,
});

export const blog_list_container = style({
  width: "100%",
  height: 200,
  marginTop: 32,
  overflow: "hidden",
  position: "absolute",
  bottom: 40,
});

export const blog_list_brief_content = style({
  width: "100%",
  textOverflow: "ellipsis",
  lineClamp: 2,
  height: 34,
  // padding: "8px 8px 20px 8px",
  // borderBottom: `1px solid ${root.color.COLOR_03}`,
  overflow: "hidden",
  fontSize: 14,
  fontWeight: 200,
  background:
    "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
});

export const blogs_container_1 = style({
  width: 420,
  height: 420,
  display: "flex",
  flexWrap: "wrap",
  gap: 20,
  overflow: "hidden",
  padding: 0,
  color: root.color2.GRAY_02,
  fontWeight: 200,
  boxSizing: "border-box",
});

export const blogs_container_2 = style({
  width: 200,
  height: 200,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const blogs_container_1_img = style({
  width: "100%",
  height: 180,
  borderRadius: 12,
  objectFit: "cover",
});

export const blogs_container_2_img = style({
  width: "100%",
  height: 120,
  borderRadius: 12,
  objectFit: "cover",
  marginBottom: 16,
});

export const blogs_container_2_title = style({
  color: root.color2.BLACK,
  fontSize: 18,
  fontWeight: 500,
  margin: 0,
});

export const blogs_container_2_tag = style({
  color: root.color2.BLUE_02,
  fontSize: 14,
  fontWeight: 500,
  margin: 0,
});
