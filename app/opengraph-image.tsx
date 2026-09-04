import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const alt = siteConfig.fullName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#faf6ec",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#bd5b38",
            marginBottom: 20,
          }}
        >
          Consultora Ambiental
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 160,
            fontFamily: "serif",
            color: "#21281f",
            lineHeight: 1,
          }}
        >
          GASI
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#1f6e42",
            marginTop: 28,
            maxWidth: 950,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
