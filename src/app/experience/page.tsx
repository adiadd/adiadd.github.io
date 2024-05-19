export const metadata = {
  title: "experience",
  description: "learn about what i've done",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
        my experience
      </h1>
      <h2 className="mb-2 text-lg font-semibold tracking-tighter">
        senior cloud engineer & prev AppDev intern @{" "}
        <strong>
          <a
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-link"
          >
            AWS
          </a>
        </strong>
      </h2>
      <p className="mb-4">
        led, architected, and developed applications across the entire stack for
        numerous engagements with customers ranging from $1 million to $1
        billion. frontend to backend, TypeScript to Python, and internal to
        external customers, i built major and integral user-driven features
        generating over $60 million in future revenues
      </p>
      <h2 className="mb-2 text-lg font-semibold tracking-tighter">
        building fun stuff @{" "}
        <strong>
          <a
            href="https://www.agnilabs.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-link"
          >
            agni labs
          </a>
        </strong>
      </h2>
      <p className="mb-4">
        trying to materialize the ideas in my head one mvp at a time💡🧪
      </p>
      <h2 className="mb-2 text-lg font-semibold tracking-tighter">
        co-founder & developer @ <strong>bounty hunters</strong>
      </h2>
      <p className="mb-4">
        developed a multiplayer game using Unity, C#, and AWS modeled after the
        live-action game “assassin” while incorporating a sandbox environment
        and battle royale component with a bunch of awesome friends
      </p>
      <h2 className="mb-2 text-lg font-semibold tracking-tighter">
        founder & ceo @{" "}
        <strong>
          <a
            href="https://www.vglogs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-link"
          >
            vGlogs
          </a>
        </strong>
      </h2>
      <p className="mb-6">
        founded and architected a professional social media app and platform
        that allowed gamers to build their gaming resume for recognition,
        credibility, and monetization
      </p>

      <h2 className="mb-5 text-2xl font-semibold tracking-tighter">skills</h2>
      <p>
        i like to write the following languages:
        <ul className="two-columns mb-5 list-disc">
          <li>Python</li>
          <li>TypeScript & JavaScript</li>
          <li>HTML/CSS</li>
          <li>Java</li>
          <li>C#</li>
          <li>SQL</li>
        </ul>
      </p>
      <p>
        and use the following frameworks/tools:
        <ul className="two-columns mb-5 list-disc ">
          <li>React</li>
          <li>Next.js</li>
          <li>GraphQL</li>
          <li>Node</li>
          <li>FastAPI</li>
          <li>Unity</li>
          <li>AWS (numerous services)</li>
        </ul>
      </p>

      <h2 className="mb-5 text-2xl font-semibold tracking-tighter">
        certs/honors
      </h2>
      <ul className="two-columns mb-5 list-disc ">
        <li>AWS Security - Professional</li>
        <li>AWS Developer - Associate</li>
        <li>AWS Solutions Architect - Associate</li>
        <li>AWS Cloud Practitioner</li>
        <li>Eagle Scout (2016)</li>
      </ul>
    </section>
  );
}
