import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Início" },
  { to: "/programacao", label: "Programação" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
  { to: "/comercial", label: "Comercial" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-radio-gradient border-b border-white/10 backdrop-blur-xl">
      <div className="container flex h-16 sm:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center  transition-bounce group-hover:scale-110">
            <img src={logo} alt="logo Voluntários Fm" />
          </div>
          <div className="leading-tight text-right">
            <p className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-background">
              Voluntários
            </p>
            <p className="text-[10px] sm:text-xs text-orange-500 font-semibold uppercase tracking-[0.2em] -mt-1">
              Fm 100.9
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-smooth",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-red"
                    : "text-background/80 hover:text-background hover:bg-blue-600"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className="lg:hidden text-background p-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border/10 bg-surface-darker animate-float-in">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wide transition-smooth",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-background/80 hover:bg-secondary"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
