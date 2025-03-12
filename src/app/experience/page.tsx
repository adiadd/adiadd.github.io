import TypeWriter from "src/components/type-writer";

export const metadata = {
  title: "experience",
  description: "learn about what i've done",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
        <TypeWriter text="my experience" delay={100} />
      </h1>
      <h2 className="mb-2 text-lg font-semibold tracking-tighter">
        senior cloud engineer & prev AppDev intern @{""}
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
      <p className="mb-4 text-neutral-900 dark:text-neutral-100">
        leading, architecting, and developing applications across the entire stack
        for numerous engagements with customers ranging from $1 million to $1
        billion. front-end to back-end, TypeScript to Python, and internal to
        external customers, i build major and integral user-driven features
        generating over $60 million in future revenues
      </p>
      <h2 className="mb-2 text-lg font-semibold tracking-tighter">
        building fun stuff @{""}
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
      <p className="mb-4 text-neutral-900 dark:text-neutral-100">
        trying to materialize the ideas in my head one mvp at a time💡🧪
      </p>
      <h2 className="mb-2 text-lg font-semibold tracking-tighter">
        founder & ceo @{""}
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
      <p className="mb-6 text-neutral-900 dark:text-neutral-100">
        founded and architected a professional social media app and platform
        that allowed gamers to build their gaming resume for recognition,
        credibility, and monetization
      </p>
      <h2 className="mb-2 text-lg font-semibold tracking-tighter">
        co-founder & developer @ <strong>bounty hunters</strong>
      </h2>
      <p className="mb-4 text-neutral-900 dark:text-neutral-100">
        developed a multiplayer game using Unity, C#, and AWS modeled after the
        live-action game “assassin” while incorporating a sandbox environment
        and battle royale component with a bunch of awesome friends
      </p>

      <h2 className="mb-2 text-lg font-semibold tracking-tighter">
        some fun things i did @ <strong style={{ color: "#bf5700" }}>UT Austin</strong>
      </h2>
      <p className="mb-4 text-neutral-900 dark:text-neutral-100">
      helped lead <a href="https://texasstockteam.com/" target="_blank" rel="noopener noreferrer" className="homepage-link">Texas Stock Team</a> with amazing friends, organized <a href="https://hacktx.com/" target="_blank" rel="noopener noreferrer" className="homepage-link">HackTX</a> in Austin with <a href="https://www.freetailhackers.com" target="_blank" rel="noopener noreferrer" className="homepage-link">Freetail Hackers</a>, and built things alongside others at <a href="https://www.txconvergent.org/" target="_blank" rel="noopener noreferrer" className="homepage-link">Convergent</a>
      </p>

      <h1 className="mb-5 text-2xl font-semibold tracking-tighter ">skills</h1>
      <p className="text-neutral-900 dark:text-neutral-100">
        i like to write:
      </p>
      <ul className="two-columns mb-5 list-disc">
        <li>python</li>
        <li>typescript & javascript</li>
        <li>html + css</li>
        <li>java</li>
        <li>rust</li>
        <li>c++</li>
        <li>c#</li>
        <li>sql</li>
      </ul>
      <p className="text-neutral-900 dark:text-neutral-100">
        and use:
      </p>
      <ul className="two-columns mb-5 list-disc ">
        <li>react</li>
        <li>next.js</li>
        <li>graphql & rest</li>
        <li>node</li>
        <li>flask</li>
        <li>numpy</li>
        <li>pandas</li>
        <li>matplotlib</li>
        <li>cdk</li>
        <li>terraform</li>
        <li>pretty much all aws services</li>
        <li>and much much more...</li>
      </ul>

      <h2 className="mb-5 text-2xl font-semibold tracking-tighter">
        certs/honors
      </h2>
      <ul className="two-columns mb-5 list-disc ">
        <li>AWS Solutions Architect - Professional</li>
        <li>AWS Security - Professional</li>
        <li>AWS Developer - Associate</li>
        <li>AWS Solutions Architect - Associate</li>
        <li>AWS Cloud Practitioner</li>
        <li>Eagle Scout (2016)</li>
      </ul>
    </section>
  );
}
