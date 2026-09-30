import { ImageResponse } from "next/og";

export const alt = "MMe-AI | Industry-Specific AI Business OS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #070913 0%, #0c1028 60%, #1e1b4b 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, color: "#818cf8" }}>MMe-AI</div>
        <div style={{ marginTop: 24, fontSize: 58, fontWeight: 800, lineHeight: 1.1 }}>
          Industry-Specific AI Business OS
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: "#94a3b8" }}>
          Manage · Monitor · Execute with Autonomous AI
        </div>
        <div style={{ marginTop: "auto", fontSize: 26, color: "#64748b" }}>
          www.mme-ai.com · Less busywork. More business.
        </div>
      </div>
    ),
    size,
  );
}
