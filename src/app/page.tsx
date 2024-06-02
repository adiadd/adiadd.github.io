export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-4xl font-semibold tracking-tighter">
        aditya addepalli
      </h1>
      <h2 className=" text-lg font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
        welcome to my small corner of the internet 👋🏾
      </h2>
      <h2 className="my-4 text-lg font-semibold tracking-tighter">
        📍 nyc/dfw
      </h2>
      <p className="mb-4 text-neutral-900 dark:text-neutral-100">
        hi ✌🏾! my name is aditya but you can call me <strong>adi</strong>
        <i> [ah d ee]</i>. i graduated from{" "}
        <span style={{ color: "#bf5700" }}>UT Austin</span> with a major in
        information systems and a certificate in cs. during the day, i write
        code for Amazon Web Services, at night, for the master of computer
        science from Georgia Tech i&apos;m pursuing, and in between, for fun.
      </p>
      <p className="mb-4 text-neutral-900 dark:text-neutral-100">
        i&apos;m a curious person by nature and one of my life&apos;s goal is to
        eventually make the world a better place, in whatever way that may be.
      </p>
      <div className="my-8 flex items-center justify-center">
        <a href="/blog">
          <button
            className="glow-on-hover px-4 py-2 text-sm text-neutral-900 dark:text-neutral-100"
            type="button"
          >
            my thoughts
          </button>
        </a>
      </div>
      <div>
        <p className="text-neutral-900 dark:text-neutral-100">
          i&apos;m human just like you and love making new friends! feel free to
          shoot an email over to{" "}
          <a
            className="homepage-link"
            href="mailto: adiaddxyz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            adiaddxyz@gmail.com
          </a>{" "}
          or dm me on twitter/x:{" "}
          <a
            href="https://twitter.com/messages/compose?recipient_id=1595924352&ref_src=twsrc%5Etfw"
            className="twitter-dm-button homepage-link"
            data-screen-name="@adiaddxyz"
            data-show-count="false"
            target="_blank"
            rel="noopener noreferrer"
          >
            @adiaddxyz
          </a>
        </p>
      </div>
    </section>
  );
}
