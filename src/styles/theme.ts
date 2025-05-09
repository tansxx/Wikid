import { css } from "styled-components";

export const theme = {
  color: {
    gray50: "#ffffff",
    gray100: "#f7f7fa",
    gray200: "#e4e5f0",
    gray300: "#c6cada",
    gray400: "#8f95b2",
    gray500: "#474d66",
    gray600: "#3b415b",

    primaryGreen100: "#eef9f6",
    primaryGreen200: "#4cbfa4",
    primaryGreen300: "#32a68a",

    secondaryRed100: "#fbeded",
    secondaryRed200: "#d14343",

    secondaryPurple100: "#8e66ff",

    secondaryYellow100: "#fdd181",
  },

  font: {
    text5xl: {
      size: "48px",
      lineHeight: "46px",
      weight: "Semibold",
    },
    text4xl: {
      size: "40px",
      lineHeight: "42px",
      weight: "bold",
    },
    text3xlBold: {
      size: "32px",
      lineHeight: "46px",
      weight: "bold",
    },
    text3xlSemibold: {
      size: "32px",
      lineHeight: "42px",
      weight: "Semibold",
    },
    text2xlBold: {
      size: "24px",
      lineHeight: "32px",
      weight: "bold",
    },
    text2xlSemibold: {
      size: "24px",
      lineHeight: "32px",
      weight: "Semibold",
    },
    text2xlMedium: {
      size: "24px",
      lineHeight: "32px",
      weight: "Medium",
    },
    text2xlRegular: {
      size: "24px",
      lineHeight: "32px",
      weight: "Regular",
    },
    textxlBold: {
      size: "20px",
      lineHeight: "32px",
      weight: "Bold",
    },
    textxlSemibold: {
      size: "20px",
      lineHeight: "32px",
      weight: "Semibold",
    },
    textxlMedium: {
      size: "20px",
      lineHeight: "32px",
      weight: "Medium",
    },
    textxlRegular: {
      size: "20px",
      lineHeight: "32px",
      weight: "Regular",
    },
    text2lgBold: {
      size: "18px",
      lineHeight: "26px",
      weight: "Bold",
    },
    text2lgSemibold: {
      size: "18px",
      lineHeight: "26px",
      weight: "Semibold",
    },
    text2lgMedium: {
      size: "18px",
      lineHeight: "26px",
      weight: "Medium",
    },
    text2lgRegular: {
      size: "18px",
      lineHeight: "26px",
      weight: "Regular",
    },
    textlgBold: {
      size: "16px",
      lineHeight: "26px",
      weight: "Bold",
    },
    textlgSemibold: {
      size: "16px",
      lineHeight: "26px",
      weight: "Semibold",
    },
    textlgMedium: {
      size: "16px",
      lineHeight: "26px",
      weight: "Medium",
    },
    textlgRegular: {
      size: "16px",
      lineHeight: "26px",
      weight: "Regular",
    },
    textmdBold: {
      size: "14px",
      lineHeight: "24px",
      weight: "Bold",
    },
    textmdSemibold: {
      size: "14px",
      lineHeight: "24px",
      weight: "Semibold",
    },
    textmdMedium: {
      size: "14px",
      lineHeight: "24px",
      weight: "Medium",
    },
    textmdRegular: {
      size: "14px",
      lineHeight: "24px",
      weight: "Regular",
    },
    textsmSemibold: {
      size: "13px",
      lineHeight: "22px",
      weight: "Semibold",
    },
    textsmMedium: {
      size: "13px",
      lineHeight: "22px",
      weight: "Medium",
    },
    textxsSemibold: {
      size: "12px",
      lineHeight: "20px",
      weight: "Semibold",
    },
    textxsMedium: {
      size: "12px",
      lineHeight: "18px",
      weight: "Medium",
    },
    textxsRegular: {
      size: "12px",
      lineHeight: "18px",
      weight: "Regular",
    },
  },
} as const;

export const font = (key: keyof typeof theme.font) => {
  const style = theme.font[key];
  if (!style) return "";

  return css`
    font-size: ${style.size};
    font-weight: ${style.weight};
    line-height: ${style.lineHeight};
  `;
};

export const color = (key: keyof typeof theme.color) => theme.color[key];
