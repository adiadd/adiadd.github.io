import Link from "next/link";
import { siteConfig } from "src/config/site";
import { ProfileImage } from "./client/profile-image";

export function Navbar() {
  return (
    <aside className="tracking-tight mb-4">
      <div className="lg:sticky lg:top-6">
        <nav className="flex flex-row items-center justify-end px-0 pb-0">
          <div className="hidden md:flex flex-row items-center space-x-2 mr-3">
            {Object.entries(siteConfig.navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="text-sm text-[color:var(--text)]/70 hover:text-[color:var(--text)] transition-colors py-1 px-2"
              >
                {name}
              </Link>
            ))}
          </div>
          {/* remove social icons from the navbar per request */}
          <ProfileImage />
        </nav>
      </div>
    </aside>
  );
}
