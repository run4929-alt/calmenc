import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { NAV } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  const isMain = loc.pathname === "/";
  const leadHref = ["/power", "/rental"].includes(loc.pathname) ? "#lead" : "/#lead";

  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isMain && !scrolled;

  return (
    <header
      className={`${isMain ? "fixed" : "sticky"} top-0 z-50 w-full transition-all duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : `border-b bg-white/90 backdrop-blur ${
              scrolled ? "border-line shadow-[0_2px_20px_rgba(31,33,41,0.05)]" : "border-transparent"
            }`
      }`}
    >
      <div className="mx-auto flex max-w-[1152px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link to="/" className="transition-opacity hover:opacity-70">
          <Logo fill={transparent ? "white" : "#1f2129"} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `rounded-md px-3 py-2.5 text-[15px] font-bold transition-colors ${
                  transparent
                    ? isActive
                      ? "text-[#e4fa5c]"
                      : "text-white hover:text-[#e4fa5c]"
                    : isActive
                      ? "text-olive"
                      : "text-ink hover:text-olive"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={leadHref}
            className={`hidden rounded-md px-6 py-2 text-[15px] font-bold transition-all hover:-translate-y-0.5 sm:block ${
              transparent
                ? "bg-ink text-white"
                : "bg-ink text-lime"
            }`}
          >
            상담하기
          </a>
          <button
            type="button"
            aria-label="메뉴"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-md lg:hidden ${
              transparent ? "text-white" : "text-ink"
            }`}
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t transition-[max-height] duration-300 lg:hidden ${
          transparent ? "border-white/20 bg-ink/90 backdrop-blur" : "border-line bg-white"
        } ${open ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="mx-auto flex max-w-[1152px] flex-col px-5 py-2 sm:px-8">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `rounded-md px-2 py-3 text-[16px] font-bold transition-colors ${
                  transparent
                    ? isActive
                      ? "text-[#e4fa5c]"
                      : "text-white"
                    : isActive
                      ? "text-olive"
                      : "text-ink"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href={leadHref}
            className={`mt-2 mb-3 rounded-md px-6 py-3 text-center text-[15px] font-bold ${
              transparent ? "bg-[#e4fa5c] text-[#1f2129]" : "bg-ink text-lime"
            }`}
          >
            상담하기
          </a>
        </nav>
      </div>
    </header>
  );
}
