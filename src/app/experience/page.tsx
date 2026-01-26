export const metadata = {
  title: "experience",
  description: "learn about what i've done",
};

function ExperienceItem({
  title,
  company,
  href,
  children,
  style,
}: {
  title: string;
  company: string;
  href?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div className="mb-6" style={style}>
      <h2 className="text-lg font-display font-medium mb-1">
        {title} <span className="text-(--color-text-secondary)">@</span>{" "}
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-link font-semibold"
          >
            {company}
          </a>
        ) : (
          <span className="font-semibold">{company}</span>
        )}
      </h2>
      <p className="text-(--color-text)">{children}</p>
    </div>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-8 fade-in">
        my experiences
      </h1>

      <div className="stagger-children">
        <ExperienceItem
          title="software engineer, gen ai"
          company="AWS"
          href="https://aws.amazon.com/"
          style={{ "--stagger-index": 1 } as React.CSSProperties}
        >
          leading, architecting, and building generative ai applications across
          the entire stack for numerous customers with engagements/projects
          ranging from proofs of concept to production, $100K–$1B. frontend to
          backend, typescript to python, and internal to external customers,
          i&apos;ve built major and integral user-driven features generating
          over $70 million in future revenue
        </ExperienceItem>

        <ExperienceItem
          title="building fun stuff"
          company="agni labs"
          href="https://www.agnilabs.xyz"
          style={{ "--stagger-index": 2 } as React.CSSProperties}
        >
          trying to materialize the ideas in my head one mvp at a time💡🧪
        </ExperienceItem>

        <ExperienceItem
          title="founder & ceo"
          company="vGlogs"
          href="https://www.vglogs.com"
          style={{ "--stagger-index": 3 } as React.CSSProperties}
        >
          founded and architected a professional social media app and platform
          that allowed gamers to build their gaming resume for recognition,
          credibility, and opportunities; 5,000+ mau.
        </ExperienceItem>

        <ExperienceItem
          title="co-founder & developer"
          company="bounty hunters"
          style={{ "--stagger-index": 4 } as React.CSSProperties}
        >
          developed a multiplayer game using Unity, C#, and AWS modeled after
          the live-action game &quot;assassin&quot; while incorporating a
          sandbox environment and battle royale component with a bunch of
          awesome friends
        </ExperienceItem>

        <div
          className="mb-8"
          style={{ "--stagger-index": 5 } as React.CSSProperties}
        >
          <h2 className="text-lg font-display font-medium mb-1">
            some fun things i did{" "}
            <span className="text-(--color-text-secondary)">@</span>{" "}
            <span className="font-semibold text-[#bf5700]">UT Austin</span>
          </h2>
          <p className="text-(--color-text)">
            led{" "}
            <a
              href="https://texasstockteam.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="homepage-link"
            >
              Texas Stock Team
            </a>{" "}
            with amazing friends, organized{" "}
            <a
              href="https://hacktx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="homepage-link"
            >
              HackTX
            </a>{" "}
            with{" "}
            <a
              href="https://www.freetailhackers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="homepage-link"
            >
              Freetail Hackers
            </a>
            , and built things alongside others at{" "}
            <a
              href="https://www.txconvergent.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="homepage-link"
            >
              Convergent
            </a>
          </p>
        </div>

        <div
          className="mt-10 mb-5"
          style={{ "--stagger-index": 6 } as React.CSSProperties}
        >
          <h2 className="font-display text-xl font-medium mb-4">
            certs & honors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
            <ul className="list-disc pl-6 space-y-1 text-(--color-text)">
              <li>AWS Solutions Architect - Professional</li>
              <li>AWS Security - Professional</li>
              <li>AWS Developer - Associate</li>
              <li>Eagle Scout (2016)</li>
            </ul>
            <ul className="list-disc pl-6 space-y-1 text-(--color-text)">
              <li>AWS Solutions Architect - Associate</li>
              <li>AWS AI Practitioner</li>
              <li>AWS Cloud Practitioner</li>
              <li>AWS Public Speaker Certified</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
