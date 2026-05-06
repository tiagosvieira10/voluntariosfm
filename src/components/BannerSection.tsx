import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

type Promotion = {
  title: string;
  description: string;
  image: string;
};

export const BannerSection = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRQ8Zq2pNy8re2OXoIN9_jJGCOLO0YoH5cNJzdAi59cl4VcqybnMt_GoRWjm8rtfRzaI2WtJXhoCZwN/pub?output=csv"
    )
      .then((res) => res.text())
      .then((csv) => {
        const lines = csv.split("\n").slice(1);
        const data = lines.map((line) => {
          const [title, description, image] = line.split(",");
          return {
            title: title?.trim(),
            description: description?.trim(),
            image: image?.trim(),
          };
        });
        setPromotions(data.filter((item) => item.title));
      })
      .finally(() => setLoading(false));
  }, []);

  if (!loading && promotions.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-background overflow-hidden">
      <div className="container relative">
        {/* HEADER */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> Destaques
            </p>
            <h2 className="font-display text-4xl sm:text-5xl uppercase text-foreground">
              Promoções
            </h2>
            <p className="mt-2 text-muted-foreground text-sm sm:text-base max-w-md">
              Confira as ofertas especiais da rádio
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-3xl overflow-hidden bg-muted/40 border border-border animate-pulse"
                >
                  <div className="aspect-[4/3] bg-muted" />
                  <div className="p-5 space-y-2">
                    <div className="h-5 w-2/3 bg-muted rounded" />
                    <div className="h-4 w-full bg-muted rounded" />
                  </div>
                </div>
              ))
            : promotions.map((item, index) => (
                <article
                  key={index}
                  className="group relative flex flex-col rounded-3xl overflow-hidden bg-card border border-border hover:border-primary transition-smooth hover:-translate-y-1 hover:shadow-elegant"
                >
                  {/* IMAGEM */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-bounce group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-glow">
                      <Sparkles className="h-3 w-3" /> Promo
                    </span>
                  </div>

                  {/* TEXTO */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl uppercase tracking-wide text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="h-px bg-border my-3" />
                    {item.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    )}
                  </div>
                </article>
              ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
