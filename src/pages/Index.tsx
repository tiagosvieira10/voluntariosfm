import heroImg from "@/assets/hero-cara-nova.jpg";
import { Layout } from "@/components/Layout";
import { TopMusicSection } from "@/components/TopMusicSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getNews } from "@/config/news";
import { dayOrder, schedule } from "@/config/schedule";
import { Calendar, ChevronRight, Newspaper, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const todayKey = dayOrder[(new Date().getDay() + 6) % 7]; // segunda como [0]
  const todayPrograms = schedule[todayKey]?.slice(0, 5) ?? [];
  const [latestNews, setLatestNews] = useState<any[]>([]);

  useEffect(() => {
    getNews()
      .then((data) => setLatestNews(data.slice(0, 4)))
      .catch(console.error);
  }, []);


  const scrollToPlayer = () => {
    // Sinaliza intenção de ouvir — foca no player flutuante
    const btn = document.querySelector<HTMLButtonElement>(
      'button[aria-label="Tocar rádio"], button[aria-label="Pausar rádio"]'
    );
    btn?.click();
    btn?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="relative w-full">
        <img
          src={heroImg}
          alt="Voluntários FM 100.9 está de cara nova" className="w-full h-auto block"
          width={1920}
          height={700}
          fetchPriority="high"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 lg:p-12 flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
          <button
            onClick={scrollToPlayer}
            className="group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-red text-primary-foreground font-bold uppercase tracking-wider px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm shadow-red transition-bounce hover:scale-105 hover:shadow-glow"
          >
            <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
            Ouvir Agora
          </button>
          <WhatsAppButton size="lg" />
        </div>
      </section>

      {/* DESTAQUES */}
      {/* <section className="container py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Mic, title: "Programação Local", desc: "Apresentadores que conhecem sua cidade de perto." },
            { icon: Music, title: "Música 24h", desc: "O melhor da música popular tocando dia e noite." },
            { icon: Headphones, title: "Ouça Onde Estiver", desc: "No celular, no carro ou no computador. Sempre com você." },
          ].map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-card border border-border hover:border-primary transition-smooth hover:shadow-red">
              <div className="h-14 w-14 rounded-2xl bg-gradient-red grid place-items-center shadow-red mb-5 transition-bounce group-hover:scale-110 group-hover:rotate-3">
                <f.icon className="h-6 w-6 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <h3 className="font-display uppercase text-xl tracking-wide mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      

      {/* ÚLTIMAS NOTÍCIAS */}
      <section className="container py-12">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2 flex items-center gap-2">
              <Newspaper className="h-3.5 w-3.5" /> O que está rolando
            </p>
            <h2 className="font-display text-4xl sm:text-5xl uppercase">Últimas Notícias</h2>
          </div>
          <Link to="/noticias" className="text-sm font-semibold uppercase tracking-wider text-primary hover:gap-3 inline-flex items-center gap-2 transition-smooth">
            Ver todas <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestNews.map((n) => (
            <a
              key={n.id}
              href={n.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border hover:border-primary transition-smooth hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={n.image}
                  alt={n.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-bounce group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                {n.category && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">{n.category}</span>
                )}
                <h3 className="font-display text-lg leading-tight uppercase tracking-wide line-clamp-3 group-hover:text-primary transition-smooth">
                  {n.title}
                </h3>
                <p className="mt-auto pt-4 text-xs text-muted-foreground">{n.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <TopMusicSection/>

      {/* CTA WHATSAPP */}
      <section className="container py-20">
        <div className="rounded-3xl bg-gradient-hero p-10 sm:p-16 text-center text-background shadow-elegant relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-5xl uppercase max-w-2xl mx-auto text-balance">
              Mande seu recado <span className="text-orange-500">no ar</span>
            </h2>
            <p className="mt-4 text-background/80 max-w-xl mx-auto">
              Peça aquela música, mande um abraço ou fale com a equipe direto pelo WhatsApp.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMAÇÃO RESUMIDA */}
      <section className="py-20 bg-radio-gradient text-background mt-12">
        <div className="container">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-2 flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5" /> No ar hoje
              </p>
              <h2 className="font-display text-4xl sm:text-5xl uppercase">Programação de {todayKey}</h2>
            </div>
            <Link to="/programacao" className="text-sm font-semibold uppercase tracking-wider text-orange-500 hover:gap-3 inline-flex items-center gap-2 transition-smooth">
              Programação completa <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3">
            {todayPrograms.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-5 rounded-2xl bg-secondary/40 border border-border/10 hover:border-primary/40 hover:bg-secondary transition-smooth"
              >
                <div className="font-display text-2xl sm:text-3xl text-orange-500 tabular-nums w-20 shrink-0">
                  {p.time}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display text-lg sm:text-xl uppercase truncate">{p.title}</p>
                  {/* {p.host && <p className="text-sm text-background/60">com {p.host}</p>} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
