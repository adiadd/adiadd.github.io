import CalButton from "../components/cal-button";
import { ProfileImage } from "../components/client/profile-image";
import NerdyTime from "../components/nerdy-time";
import Section from "../components/section";
import { siteConfig } from "../config/site";

export default function Page() {
  return (
    <>
      <header className="mb-10 fade-in">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-medium tracking-tight">
              aditya addepalli
            </h1>
            <p className="text-sm text-[color:var(--color-text-secondary)] mt-1">
              📍 nyc
            </p>
          </div>
          <ProfileImage />
        </div>
      </header>

      <div className="fade-in fade-in-delay-1">
        <Section title="about">
          <p>
            heyo ✌🏾! my name is aditya <em>[ah DITH ya]</em>. i love to learn
            and build.
          </p>
          <p>
            i previously graduated from{" "}
            <span className="text-[#bf5700] font-medium">UT Austin</span> with a
            major in information systems and a certificate in cs. during the
            day, i write code for Amazon Web Services, at night, for the master
            of computer science from{" "}
            <span className="text-[#B3A369] font-medium">Georgia Tech</span>{" "}
            i&apos;m pursuing, and in between, for fun.
          </p>
          <p>
            i&apos;m a curious person by nature and one of my life&apos;s goal
            is to eventually make the world a better place, in whatever way that
            may be.
          </p>
          <p>
            i&apos;m currently extremely interested in applied ai and ai
            engineering.
          </p>
          <p>
            i think the world will be drastically different in the next 5, 10,
            20+ years. ai will not be an assistant or agent(s) but deeply
            integrated into our society in ways we can&apos;t even imagine. i
            want to contribute to a world where society is empowered by ai,
            where humans are free in their thinking. to think big, solve major &
            quixotic problems, and further humanity as a whole; ai to be an
            enhancer not an obstacle or something to fear.
          </p>
        </Section>
      </div>

      <div className="fade-in fade-in-delay-2">
        <Section title="contact">
          <p>
            i love meeting new people! feel free to{" "}
            <a
              className="homepage-link"
              href="mailto:adiaddxyz@gmail.com"
              rel="noopener noreferrer"
              aria-label="email adiaddxyz@gmail.com"
            >
              shoot me an email
            </a>
            {", "}
            <a
              href="https://twitter.com/messages/compose?recipient_id=1595924352&ref_src=twsrc%5Etfw"
              className="homepage-link"
              data-screen-name="@adiaddxyz"
              data-show-count="false"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="dm me on twitter/x"
            >
              dm me on twitter/x
            </a>
            {", or "}
            <CalButton /> {" 🤚🏾"}
          </p>
          <p className="text-sm text-[color:var(--color-text-secondary)]">
            subscribe to my{" "}
            <a
              href={siteConfig.links.substack}
              className="homepage-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              substack
            </a>
            {" · "}
            <a href="/feed.xml" className="homepage-link">
              rss
            </a>
          </p>
        </Section>
      </div>

      <div className="fade-in fade-in-delay-3">
        <NerdyTime />
      </div>
    </>
  );
}
