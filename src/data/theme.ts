import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#0c1018",
    surface1: "#141a25",
    surface2: "#1b2331",
    surface3: "#232c3d",
    surfaceInverse: "#f3e7d2",
    textPrimary: "#eef2f8",
    textMuted: "#9aa6b8",
    textInverse: "#131822",
    textOnAccentPrimary: "#0c1018",
    textLink: "#ff7a3d",
    focusRing: "#5cf2ff",
    line: "#2a3447",
    lineStrong: "#3b4761",
    accentPrimary: "#ff5a1f",
    accentSecondary: "#8b5cf6",
    accentBright: "#ffce4d",
    statusConfirmed: "#3ddc84",
    statusCaution: "#f5b14a",
    statusUnknown: "#7d8699",
  },
  typography: {
    headingFamily:
      "Rajdhani, Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    bodyFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "6px",
    borderWidth: "1px",
    shadow: "0 2px 10px rgba(0, 0, 0, 0.45)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0.55, position: "center top" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "grid", intensity: "low" },
} satisfies ThemeConfig;
