import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    violet: Palette["primary"];
  }

  interface PaletteOptions {
    violet?: PaletteOptions["primary"];
  }

  interface Palette {
    softMagenta: Palette["primary"];
  }

  interface PaletteOptions {
    softMagenta?: PaletteOptions["primary"];
  }
}
