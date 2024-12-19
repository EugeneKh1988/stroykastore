import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gorse: {
          "50": "#fefee8",
          "100": "#fefdc3",
          "200": "#fdf88b",
          "300": "#fcec41",
          "400": "#f9dc16",
          "500": "#e9c309",
          "600": "#c99805",
          "700": "#a06d08",
          "800": "#84560f",
          "900": "#714612",
          "950": "#422406",
          DEFAULT: "#FCEC41",
        },
        vulcan: {
          "50": "#f5f7fa",
          "100": "#ebeef3",
          "200": "#d2d8e5",
          "300": "#abb9ce",
          "400": "#7e93b2",
          "500": "#5d759a",
          "600": "#495d80",
          "700": "#3c4b68",
          "800": "#354157",
          "900": "#30394a",
          "950": "#171b24",
          DEFAULT: "#171B24",
        },
        "shuttle-gray": {
          "50": "#f5f6f6",
          "100": "#e5e6e8",
          "200": "#ced0d3",
          "300": "#acafb4",
          "400": "#83878d",
          "500": "#686c72",
          "600": "#5d6066",
          "700": "#4c4e52",
          "800": "#434447",
          "900": "#3b3c3e",
          "950": "#242528",
          DEFAULT: "#5D6066",
        },
        mako: {
          "50": "#f5f6f6",
          "100": "#e4e6e9",
          "200": "#cdd1d4",
          "300": "#a9afb7",
          "400": "#7f8791",
          "500": "#646c76",
          "600": "#555b65",
          "700": "#454950",
          "800": "#414449",
          "900": "#393b40",
          "950": "#232429",
          DEFAULT: "#454950",
        },
        shark: {
          "50": "#f7f8f8",
          "100": "#edeef1",
          "200": "#d7dae0",
          "300": "#b4b9c5",
          "400": "#8b94a5",
          "500": "#6d778a",
          "600": "#586071",
          "700": "#484e5c",
          "800": "#3e424e",
          "900": "#2f323a",
          "950": "#24262d",
          DEFAULT: "#2F323A",
        },
        "oslo-gray": {
          "50": "#f5f5f6",
          "100": "#e6e6e7",
          "200": "#cfd0d2",
          "300": "#adafb3",
          "400": "#8b8d92",
          "500": "#696b71",
          "600": "#5a5c60",
          "700": "#4d4e51",
          "800": "#434447",
          "900": "#3b3b3e",
          "950": "#252527",
          DEFAULT: "#8B8D92",
        },
        iron: {
          "50": "#f6f6f7",
          "100": "#efeff0",
          "200": "#e2e2e3",
          "300": "#d1d1d3",
          "400": "#bcbbbe",
          "500": "#a9a8ac",
          "600": "#959497",
          "700": "#817f83",
          "800": "#69686b",
          "900": "#575758",
          "950": "#333234",
          DEFAULT: "#D1D1D3",
        },
        "wild-sand": {
          "50": "#f6f6f6",
          "100": "#efefef",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
          DEFAULT: "#F6F6F6",
        },
        mercury: {
          "50": "#f7f7f7",
          "100": "#e8e9ea",
          "200": "#dddee0",
          "300": "#c5c8cb",
          "400": "#a9aeb1",
          "500": "#94989d",
          "600": "#83878d",
          "700": "#76797f",
          "800": "#63666a",
          "900": "#515357",
          "950": "#343537",
          DEFAULT: "#E8E9EA",
        },
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
