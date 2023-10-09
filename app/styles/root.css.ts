import { createGlobalTheme, globalStyle, style } from "@vanilla-extract/css";
import { pretendard } from "./fonts.css";

globalStyle("*", {
  fontFamily: pretendard,
  fontWeight: 400,
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  fontFamily: pretendard,
  fontWeight: 400,
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("em", {
  fontStyle: "normal",
});

export const text = style({
  fontFamily: pretendard,
  fontSize: 16,
  letterSpacing: 0.5,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: 14,
    },
  },
});

export const root = createGlobalTheme(":root", {
  color: {
    BLACK: "#000000",
    COLOR_01: "#15130F",
    COLOR_02: "#22201E",
    COLOR_03: "#23201C",
    COLOR_04: "#25211A",
    COLOR_05: "#4A4133",
    COLOR_06: "#D7B98C",
    COLOR_07: "#EAD7BB",
    COLOR_08: "#DFD5C5",
    COLOR_09: "#D9D9D9",
    WHITE: "#FFFFFF",
    POINT_01: "#A07636",
    POINT_02: "#D08412",
    POINT_03: "#9B7E51",
    POINT_04: "#422E11",
  },
  color2: {
    BLACK: "#130401",
    COLOR_00: "#401107",
    COLOR_01: "#6d342e",
    COLOR_02: "#7f3d38",
    COLOR_03: "#9b5c46",
    COLOR_04: "#9b604e",
    COLOR_05: "#b87321",
    COLOR_06: "#f2cc70", // 242, 204, 112
    COLOR_07: "#ffe799",
    COLOR_08: "#EFE2C2",
    GRAY_01: "#ACA8A7",
    GRAY_02: "#756b69",
    BLUE_01: "#294863",
    BLUE_02: "#3e6593",
    BLUE_03: "#80aeff",
    BLUE_04: "#bed0e5",
    RED_01: "#E12214",
  },
});
