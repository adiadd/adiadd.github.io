import { ImageResponse } from "next/og";
import { siteConfig } from "src/config/site";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || `${siteConfig.name}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          backgroundColor: "#F5E9DE",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            height: "100%",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              color: "#45363F",
              margin: 0,
              marginBottom: "16px",
              maxWidth: "100%",
              textAlign: "left",
              fontSize: "50px",
              lineHeight: "1.2",
            }}
          >
            {title}
          </h1>
          <h3
            style={{
              color: "#6B5A66",
              margin: 0,
              fontSize: "24px",
            }}
          >
            &#47; &#47; adiadd.xyz
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "100%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://utfs.io/f/X8OJl8spEec6VBsfW0Uvycih9lnJHgb1GtLmP6ZFrzBEURxC"
            alt="aditya's 8 bit avatar"
            style={{
              width: "80%",
              height: "80%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
