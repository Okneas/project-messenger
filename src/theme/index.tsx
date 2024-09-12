import { PaletteMode, alpha, createTheme } from "@mui/material";

export default (mode: PaletteMode) =>
  createTheme({
    typography: {
      fontFamily: ["Mulish"].join(","),
      fontSize: 14,
      Heading1: {
        fontSize: "32px",
        fontWeight: "bold"
      },
      Heading2: {
        fontSize: "24px",
        fontWeight: "bold"
      },
      SubHeading1: {
        fontSize: "18px",
        fontWeight: 600
      },
      SubHeading2: {
        fontSize: "16px",
        fontWeight: 600
      },
      BodyText1: {
        fontSize: "14px",
        fontWeight: 600
      },
      BodyText2: {
        fontSize: "14px",
        fontWeight: "normal"
      }
    },
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            general: {
              primary: "#000000",
              secondary: "#222223",
              information: "#444444",
              shadow: "rgba(255,250,250, 0.2)",
            },
            icon: {
              accent: "#1FB0EE",
              secondary: "#858F9B",
              iconBackground: "#383838",
            },
            text: {
              primary: "#D9D9D9",
              secondary: "#8E8E8E",
            },
            input: {
              primary: "#FFFFFF",
              secondary: "#565E67",
              active: "#1FB0EE",
              disabled: "#383838",
              error: "#E90F36",
            },
            button: {
              primary: "#1FB0EE",
              primaryHover: "#80CDEE",
              primaryDisabled: alpha("#1FB0EE", 0.6),
              secondary: "#1FB0EE",
              secondaryHover: "#169BD3",
              secondaryBackground: "#000000",
            },
            other: {
              stroke: "#414141",
              underline: "#494949",
              underlineAccent: "#1FB0EE",
              shimmer:
                "linear-gradient(223.61deg, rgba(227, 229, 236, 0.3) 15.94%, rgba(200, 204, 219, 0.3) 87.64%)",
            },
          }
        : {
            general: {
              primary: "#FFFFFF",
              secondary: "#F8F9FA",
              information: "#000000",
              shadow: "rgba(0,0,0, 0.04)",
            },
            icon: {
              accent: "#1FB0EE",
              secondary: "#858F9B",
              iconBackground: "#8E99A5",
            },
            text: {
              primary: "#0F1828",
              secondary: "#A4A4A4",
            },
            input: {
              primary: "#FFFFFF",
              secondary: "#ADB3C6",
              active: "#1FB0EE",
              disabled: "#F2F3F6",
              error: "#C2030E",
            },
            button: {
              primary: "#002DE3",
              primaryHover: "#80CDEE",
              primaryDisabled: alpha("#1FB0EE", 0.6),
              secondary: "#1FB0EE",
              secondaryHover: "#169BD3",
              secondaryBackground: "#FFFFFF",
            },
          }),
    },
  });
