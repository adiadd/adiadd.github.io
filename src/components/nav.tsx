import Link from "next/link";
import { siteConfig } from "src/config/site";
import { ProfileImage } from "./client/profile-image";

export function Navbar() {
  return (
    <aside className="-ml-[8px] tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row items-center space-x-0 pr-10">
            {Object.entries(siteConfig.navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                {name}
              </Link>
            ))}
          </div>

          <ProfileImage />
        </nav>
      </div>
    </aside>
  );
}
