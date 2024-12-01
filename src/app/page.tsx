import CalButton from "../components/cal-button";

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-4xl font-semibold tracking-tighter">
        aditya addepalli
      </h1>
      <h2 className=" text-lg font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
        welcome to my small corner of the internet 👋🏾
      </h2>
      <h2 className="my-4 text-lg font-semibold tracking-tighter">📍 nyc</h2>
      <p className="mb-4 text-neutral-900 dark:text-neutral-100">
        hi ✌🏾! my name is aditya <i> [ah DITH ya]</i>. i previously graduated
        from <span style={{ color: "#bf5700" }}>UT Austin</span> with a major in
        information systems and a certificate in cs. during the day, i write
        code for Amazon Web Services, at night, for the master of computer
        science from <span style={{ color: "#B3A369" }}>Georgia Tech</span>{" "}
        i&apos;m pursuing, and in between, for fun.
      </p>
      <p className="mb-4 text-neutral-900 dark:text-neutral-100">
        i&apos;m a curious person by nature and one of my life&apos;s goal is to
        eventually make the world a better place, in whatever way that may be.
      </p>
      <div>
        <p className="text-neutral-900 dark:text-neutral-100">
          i&apos;m human just like you and love making new friends! feel free to{" "}
          <a
            className="homepage-link"
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
          <CalButton />
          {" - let's connect! 🤚🏾"}
        </p>
      </div>
    </section>
  );
}
