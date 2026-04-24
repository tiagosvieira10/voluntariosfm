import logo from "@/assets/logo.png";
import { siteConfig } from "@/config/site";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-background pb-32 pt-16 mt-20 border-t border-border/10">
      <div className="container grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="flex h-10 w-10 items-center justify-center">
              <img src={logo} alt="logo Voluntários Fm" />
            </div>
            <div className="leading-tight">
              <p className="font-display text-xl font-bold uppercase tracking-wider">
                {siteConfig.shortName}
              </p>
              <p className="text-xs text-background font-semibold uppercase tracking-[0.2em] -mt-1">
                100.9
              </p>
            </div>
          </div>
          <p className="text-background/70 text-sm max-w-md leading-relaxed">
            {siteConfig.slogan}
          </p>
          <div className="flex gap-3 mt-6">
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer"
              aria-label="Facebook"
              className="h-10 w-10 grid place-items-center rounded-full bg-orange-500 hover:bg-orange-600 transition-smooth">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 grid place-items-center rounded-full bg-orange-500 hover:bg-orange-600 transition-smooth">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer"
              aria-label="YouTube"
              className="h-10 w-10 grid place-items-center rounded-full bg-orange-500 hover:bg-orange-600 transition-smooth">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display uppercase text-sm tracking-widest text-orange-500 mb-4">Navegação</h3>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/" className="hover:text-orange-400 transition-smooth">Início</Link></li>
            <li><Link to="/programacao" className="hover:text-orange-400 transition-smooth">Programação</Link></li>
            <li><Link to="/noticias" className="hover:text-orange-400 transition-smooth">Notícias</Link></li>
            <li><Link to="/contato" className="hover:text-orange-400 transition-smooth">Contato</Link></li>
            <li><Link to="/comercial" className="hover:text-orange-400 transition-smooth">Comercial</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display uppercase text-sm tracking-widest text-orange-500 mb-4">Contato</h3>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-orange-500 shrink-0" />{siteConfig.phone}</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-orange-500 shrink-0" />{siteConfig.email}</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-orange-500 shrink-0" />{siteConfig.address}</li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-border/10 text-xs text-background/60 text-center">
        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
};
