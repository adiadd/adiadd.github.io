export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      // biome-ignore lint/security/noDangerouslySetInnerHtml: This is safe as we're only passing JSON data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
