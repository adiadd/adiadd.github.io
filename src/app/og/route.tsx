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
            width: '50%', // Changed from 33.33% to 50%
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center', // Added to center content horizontally
            padding: '40px',
          }}
        >
          <div
            style={{
              width: '80%', // Set width to 80% of the container
            }}
          >
            <h2
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#45363F',
                margin: 0,
                marginBottom: '16px',
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
                textAlign: 'left',
              }}
            >
              adiadd.xyz
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%', // Changed from 66.67% to 50%
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
