import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const dynamic = "force-static";
export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px 80px",
        backgroundColor: "#faf7f1",
        color: "#352f28",
        borderLeft: "18px solid #626d49",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontSize: 24,
          color: "#626d49",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 55,
            height: 55,
            borderRadius: 12,
            backgroundColor: "#626d49",
            color: "#ffffff",
            fontWeight: 700,
          }}
        >
          {profile.initials}
        </div>
        Engineering & research
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div
          style={{
            display: "flex",
            fontSize: 90,
            fontWeight: 700,
            letterSpacing: "-4px",
          }}
        >
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 29, color: "#6d6255" }}>
          Software, communication research & notes along the way.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 23,
          color: "#6d6255",
        }}
      >
        <span>detaomega.github.io</span>
        <span>Portfolio · Blog · Travel</span>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
