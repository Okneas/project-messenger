declare module "@mui/material/styles" {
  interface TypographyVariants {
    Heading1: React.CSSProperties;
    Heading2: React.CSSProperties;
    SubHeading1: React.CSSProperties;
    SubHeading2: React.CSSProperties;
    BodyText1: React.CSSProperties;
    BodyText2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    Heading1?: React.CSSProperties;
    Heading2?: React.CSSProperties;
    SubHeading1: React.CSSProperties;
    SubHeading2: React.CSSProperties;
    BodyText1: React.CSSProperties;
    BodyText2: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    Heading1: true;
    Heading2: true;
    SubHeading1: true;
    SubHeading2: true;
    BodyText1: true;
    BodyText2: true;
  }
}
