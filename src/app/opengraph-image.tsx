import { ImageResponse } from "next/og";
import { personal } from "@/data/portfolio";

export const alt = `${personal.name} — ${personal.title}`;
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
          padding: 80,
          background: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 60%, #7c3aed 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>{personal.name}</div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#c7d2fe" }}>{personal.title}</div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#e0e7ff", maxWidth: 900 }}>
          {personal.headline}
        </div>
      </div>
    ),
    size
  );
}
