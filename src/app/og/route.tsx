import { ImageResponse } from "next/og";
import { siteConfig } from "src/config/site";
import fs from 'node:fs';
import path from 'node:path';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || `${siteConfig.name}`;

  const svgPath = path.join(process.cwd(), 'public', 'adihoodedpfpsvg.svg');
  const svgContent = fs.readFileSync(svgPath, 'utf8');

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
            width: '50%',
            height: '100%',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontWeight: 'bold',
              color: '#45363F',
              margin: 0,
              marginBottom: '16px',
              maxWidth: '100%',
              textAlign: 'left',
              fontSize: '64px', // Increased font size
              lineHeight: '1.2', // Added line height for better readability
            }}
          >
            {title}
          </h1>
          <h3
            style={{
              color: '#45363F',
              margin: 0,
              fontSize: '36px', // Increased font size
            }}
          >
            adiadd.xyz
          </h3>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: '100%',
          }}
        >
          <img
            src={`data:image/svg+xml,${encodeURIComponent(svgContent)}`}
            alt="aditya's personal website svg"
            style={{
              width: '80%',
              height: '80%',
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
