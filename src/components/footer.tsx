import { siteConfig } from "src/config/site";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="arrow icon"
    >
      <title>Arrow Icon</title>
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 grid grid-cols-2 gap-2 text-neutral-600 dark:text-neutral-300 sm:flex sm:flex-row sm:justify-center sm:gap-4 sm:space-x-4">
        <li className="flex justify-center">
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={`${siteConfig.links.X}`}
            id="twitter-tag"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">twitter/x</p>
          </a>
        </li>
        <li className="flex justify-center">
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={`${siteConfig.links.linkedIn}`}
            id="linkedin-tag"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
        <li className="flex justify-center">
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={`${siteConfig.links.github}`}
            id="github-tag"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li className="flex justify-center">
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={`${siteConfig.links.substack}`}
            id="substack-tag"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">substack</p>
          </a>
        </li>
        <li className="flex justify-center col-span-2 sm:col-span-1">
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
