import CalButton from "../components/cal-button";
import { ProfileImage } from "../components/client/profile-image";
import NerdyTime from "../components/nerdy-time";
import TerminalSection from "../components/terminal/section";
import TypeWriter from "../components/type-writer";

export default function Page() {
  return (
    <>
      <div className="mb-1 flex items-center gap-3">
        <ProfileImage />
        <h1 className="text-4xl font-semibold tracking-tight">
          <TypeWriter text="aditya addepalli" delay={100} />
        </h1>
      </div>
      <p className="mb-4 text-sm text-[color:var(--text)]/80">📍 nyc</p>

      <TerminalSection command="echo about.txt">
        <p className="text-neutral-900 dark:text-neutral-100">
          heyo ✌🏾! my name is aditya <i>[ah DITH ya]</i>. i love to learn and
          build.
        </p>
        <p className="text-neutral-900 dark:text-neutral-100">
          i previously graduated from{" "}
          <span style={{ color: "#bf5700" }}>UT Austin</span> with a major in
          information systems and a certificate in cs. during the day, i write
          code for Amazon Web Services, at night, for the master of computer
          science from <span style={{ color: "#B3A369" }}>Georgia Tech</span>{" "}
          i&apos;m pursuing, and in between, for fun.
        </p>
        <p className="text-neutral-900 dark:text-neutral-100">
          i&apos;m a curious person by nature and one of my life&apos;s goal is
          to eventually make the world a better place, in whatever way that may
          be.
        </p>
        <p className="text-neutral-900 dark:text-neutral-100">
          i&apos;m currently extremely interested in applied ai and ai
          engineering.
        </p>
        <p className="text-neutral-900 dark:text-neutral-100">
          i think the world will be drastically different in the next 5, 10, 20+
          years. ai will not be an assistant or agent(s) but deeply integrated
          into our society in ways we can&apos;t even imagine. i want to
          contribute to a world where society is empowered by ai, where humans
          are free in their thinking. to think big, solve major & quixotic
          problems, and further humanity as a whole; ai to be an enhancer not an
          obstacle or something to fear.
        </p>
      </TerminalSection>

      <TerminalSection command="contact --info">
        <p className="text-neutral-900 dark:text-neutral-100">
          i love meeting new people! feel free to
          <a
            className="homepage-link ml-1"
            href="mailto:adiaddxyz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            shoot me an email
          </a>
          {", "}
          <a
            href="https://twitter.com/messages/compose?recipient_id=1595924352&ref_src=twsrc%5Etfw"
            className="twitter-dm-button homepage-link"
            data-screen-name="@adiaddxyz"
            data-show-count="false"
            target="_blank"
            rel="noopener noreferrer"
          >
            dm me on twitter/x
          </a>
          {", or "}
          <CalButton /> {" 🤚🏾"}
        </p>
      </TerminalSection>

      <NerdyTime />
    </>
  );
}
