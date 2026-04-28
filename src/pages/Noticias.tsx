import newsHero from "@/assets/noticias-hero.jpg";
import { Layout } from "@/components/Layout";
import { getNews, type NewsItem } from "@/config/news";
import { ArrowUpRight, Loader2, Newspaper } from "lucide-react";
import { useEffect, useState } from "react";

const Noticias = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getNews()
      .then((data) => mounted && setItems(data))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const featured = items[0];
  const rest = items.slice(1);

  return (
    <Layout>
      {/* BANNER estilo editorial WordPress */}
      <section className="relative overflow-hidden bg-yellow-900 text-background">
        <div className="absolute inset-0">
          <img
            src={newsHero}
            alt="Estúdio de notícias da Voluntários FM"
            className="h-full w-full object-cover opacity-90"
            width={1920}
            height={900}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-surface-darker via-surface-darker/85 to-surface-darker/10" /> */}
        </div>

        <div className="container relative py-20 sm:py-28 lg:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-800 mb-4 flex items-center gap-2">
            <Newspaper className="h-3.5 w-3.5" /> Fique por dentro
          </p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-balance max-w-3xl">
            Notícias da cidade
          </h1>
          <p className="mt-6 text-lg text-background/75 max-w-xl leading-relaxed">
            As principais informações da sua cidade e da região, atualizadas
            pela equipe da Voluntários FM.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="container py-16">
        {loading ? (
          <div className="flex items-center justify-center py-24 text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin mr-3" />
            Carregando notícias...
          </div>
        ) : items.length === 0 ? (
          <p className="text-center text-muted-foreground py-24">
            Nenhuma notícia disponível no momento.
          </p>
        ) : (
          <>
            {/* DESTAQUE — primeiro post como capa, estilo blog */}
            {featured && (
              <a
                href={featured.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="group grid lg:grid-cols-2 gap-8 mb-16 rounded-3xl overflow-hidden bg-card border border-border hover:border-primary transition-smooth hover:shadow-elegant"
              >
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden bg-muted relative">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-bounce group-hover:scale-105"
                  />
                  {featured.category && (
                    <span className="absolute top-4 left-4 rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest">
                      {featured.category}
                    </span>
                  )}
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
                    Destaque · {featured.date}
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight tracking-wide group-hover:text-primary transition-smooth">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group-hover:gap-3 transition-smooth self-start">
                    Ler matéria completa <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            )}

            {/* GRID DAS DEMAIS */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((n) => (
                <article
                  key={n.id}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border hover:border-primary transition-smooth hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                    <img
                      src={n.image}
                      alt={n.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-bounce group-hover:scale-110"
                    />
                    {n.category && (
                      <span className="absolute top-3 left-3 rounded-full bg-primary text-primary-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                        {n.category}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs text-muted-foreground mb-2">
                      {n.date}
                    </p>
                    <h2 className="font-display text-xl uppercase leading-tight tracking-wide group-hover:text-primary transition-smooth">
                      {n.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {n.excerpt}
                    </p>
                    <a
                      href={n.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:gap-3 transition-smooth self-start"
                    >
                      Ler mais <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default Noticias;
