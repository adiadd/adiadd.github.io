import CalButton from "../components/cal-button";
import { ProfileImage } from "../components/client/profile-image";
import NerdyTime from "../components/nerdy-time";
import Section from "../components/section";
import { TimeGreeting } from "../components/time-greeting";
import { siteConfig } from "../config/site";

const aboutRows = [
  { label: "life goal", value: "leave the world better than i found it" },
  { label: "by day", value: "building at an ai healthcare startup" },
  {
    label: "by night",
    value: (
      <>
        master&apos;s in cs at{" "}
        <span className="text-[#B3A369] font-medium">Georgia Tech</span>
      </>
    ),
  },
  { label: "in between", value: "tinkering for fun" },
  {
    label: "before",
    value: <span className="text-[#bf5700] font-medium">UT Austin</span>,
  },
];

export default function Page() {
  return (
    <>
      <header className="mb-10 fade-in">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-medium tracking-tight">
              aditya addepalli
            </h1>
            <p className="text-sm text-(--color-text-secondary) mt-1">📍 nyc</p>
          </div>
          <ProfileImage />
        </div>
      </header>

      <div className="fade-in fade-in-delay-1">
        <Section title="about">
          <p>
            <TimeGreeting /> ✌🏾! i&apos;m aditya <em>[ah DITH ya]</em>. i&apos;m
            a curious person who loves to learn new things, build new things,
            and go down rabbit holes.
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] sm:gap-x-5 gap-y-1">
            {aboutRows.map(({ label, value }) => (
              <div key={label} className="contents">
                <dt className="font-mono text-sm text-(--color-accent) pt-0.5">
                  {label}
                </dt>
                <dd className="max-sm:mb-2">{value}</dd>
              </div>
            ))}
          </dl>
          <p>
            i think ai will change the world in ways we can&apos;t imagine yet.
            i want to do my part to make sure ai makes people&apos;s lives
            better, and frees us up for the big, quixotic problems.
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
          <p className="text-sm text-(--color-text-secondary)">
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
