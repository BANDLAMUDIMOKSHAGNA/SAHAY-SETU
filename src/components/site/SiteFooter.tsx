import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm sm:grid-cols-4">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-3 max-w-sm text-muted-foreground">
            Work. Connect. Grow. A bridge between skilled workers, the people who hire them, and the
            tools they need.
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Find</h3>
          <ul className="space-y-1.5 text-muted-foreground">
            <li>
              <Link to="/jobs" className="hover:text-foreground">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/workers" className="hover:text-foreground">
                Workers
              </Link>
            </li>
            <li>
              <Link to="/marketplace" className="hover:text-foreground">
                Tools & rentals
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Take part</h3>
          <ul className="space-y-1.5 text-muted-foreground">
            <li>
              <Link to="/communities" className="hover:text-foreground">
                Communities
              </Link>
            </li>
            <li>
              <Link to="/post-job" className="hover:text-foreground">
                Post a job
              </Link>
            </li>
            <li>
              <Link to="/list-tool" className="hover:text-foreground">
                List equipment
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-xs text-muted-foreground sm:flex-row">
          <div>
            © {new Date().getFullYear()} SAHAY-SETU · Listings marked "sample" are development data.
          </div>
          <div className="flex items-center gap-2">
            <span>Theme:</span>
            <ThemeToggle className="h-7 w-7" />
          </div>
        </div>
      </div>
    </footer>
  );
}
