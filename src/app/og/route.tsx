import { ImageResponse } from "next/og";
import { siteConfig } from "src/config/site";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || `${siteConfig.name}`;


  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          backgroundColor: '#F5E9DE',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '33.33%',
            height: '100%',
            justifyContent: 'center', // Changed from 'space-between' to 'center'
            padding: '40px',
          }}
        >
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#45363F',
              margin: 0,
              marginBottom: '16px', // Added margin bottom for spacing
              maxWidth: '100%',
              textAlign: 'left',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: '24px',
              color: '#45363F',
              margin: 0,
            }}
          >
            adiadd.xyz
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '66.67%',
            height: '100%',
          }}
        >
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
