import { style } from "@vanilla-extract/css";
import { root } from "./root.css";

export const main_banner_button = style({
  display: "block",
  margin: "0px",
  width: "50%",
  height: 150,
  borderRadius: 16,
  padding: "0px 16px",
  textAlign: "left",
  position: "relative",
  color: root.color.WHITE,
  background: root.color2.BLACK,
  cursor: "pointer",
});

export const main_banner_button_text = style({
  position: "absolute",
  bottom: 20,
  margin: 0,
  fontSize: 18,
  fontWeight: 500,
});

export const send_email_form = style({
  display: "flex",
  flexDirection: "column",
  width: 500,
  gap: 20,
});

export const mail_bottom_sheet_container = style({
  background: "transparent",
  height: 500,
  width: "100%",
  maxWidth: 1000,
  borderRadius: "24px 24px 0 0",
  scrollbarWidth: "none",
});

export const mail_bottom_sheet_submit_button = style({
  position: "fixed",
  bottom: 0,
  width: "calc(100% - 40px)",
  maxWidth: 960,
  boxSizing: "border-box",
  height: 80,
  background: root.color.WHITE,
});
