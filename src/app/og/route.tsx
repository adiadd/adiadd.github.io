import { ImageResponse } from "next/og";
import { siteConfig } from "src/config/site";
import { Buffer } from 'node:buffer';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || `${siteConfig.name}`;

  const imageData = await fetch(new URL('/adihoodedpfpsvg.svg', import.meta.url)).then(
    (res) => res.arrayBuffer()
  );

  const base64Image = Buffer.from(imageData).toString('base64');

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
            justifyContent: 'space-between',
            padding: '40px',
          }}
        >
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#45363F',
              margin: 0,
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
          <img
            src={`data:image/png;base64,${base64Image}`}
            alt="Adi Hooded Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
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
