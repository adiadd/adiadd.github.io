import { ImageResponse } from "next/og";
import { siteConfig } from "src/config/site";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || `${siteConfig.name}`;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        backgroundColor: "#FAF6F1",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          height: "100%",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: "500",
            color: "#2D2926",
            margin: 0,
            marginBottom: "20px",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "52px",
            lineHeight: "1.2",
          }}
        >
          {title}
        </h1>
        <h3
          style={{
            fontFamily: "Georgia, serif",
            color: "#5C5552",
            margin: 0,
            fontSize: "24px",
          }}
        >
          adiadd.xyz
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
          height: "100%",
          backgroundColor: "#FFFDFB",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://utfs.io/f/X8OJl8spEec6VBsfW0Uvycih9lnJHgb1GtLmP6ZFrzBEURxC"
          alt="aditya's 8 bit avatar"
          style={{
            width: "70%",
            height: "70%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
