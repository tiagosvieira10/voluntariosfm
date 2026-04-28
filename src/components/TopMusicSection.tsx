import { getTopTracks, type Track } from "@/config/topMusic";
import { Loader2, Music2, Play, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export const TopMusicSection = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getTopTracks()
      .then((data) => {
        if (!mounted) return;
        setTracks(data);
        setActiveIndex(0);
      })
      .catch((err) => {
        console.error("[TopMusicSection] erro ao carregar playlist:", err);
        if (mounted) setError("Não foi possível carregar a playlist agora.");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const active = tracks[activeIndex];

  return (
    <section className="relative bg-radio-gradient py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-10 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2 inline-flex items-center gap-2">
            <TrendingUp className="h-3.5 w-3.5" /> Ranking
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-background">
            Top 10 <span className="text-accent">Músicas</span>
          </h2>
          <p className="mt-2 text-background/70 text-sm sm:text-base">
            As mais tocadas do momento — atualizadas direto da nossa playlist
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-16 sm:py-24 text-background/70">
            <Loader2 className="h-6 w-6 animate-spin mr-3" />
            Carregando playlist...
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-12 sm:py-16 text-background/70">{error}</div>
        )}

        {!loading && !error && active && (
          <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-5">
            {/* PLAYER (Top 1 / ativo) */}
            <div className="lg:col-span-3 order-1">
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden bg-card/5 backdrop-blur-md border border-background/10 shadow-elegant">
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    key={active.videoId}
                    src={`https://www.youtube.com/embed/${active.videoId}?rel=0`}
                    title={`${active.title} — ${active.artist}`}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-background/5 to-transparent">
                  <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3">
                    <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-accent text-accent-foreground font-display text-xs sm:text-sm">
                      {activeIndex + 1}
                    </span>
                    Tocando agora
                  </div>
                  <h3 className="font-display text-lg sm:text-2xl lg:text-3xl uppercase text-background tracking-wide">
                    {active.title}
                  </h3>
                  <p className="text-background/70 mt-1 flex items-center gap-2 text-sm">
                    <Music2 className="h-4 w-4" />
                    {active.artist}
                  </p>
                </div>
              </div>
            </div>

            {/* LISTA TOP 10 */}
            <div className="lg:col-span-2 order-2">
              <ol className="space-y-2 sm:space-y-3 max-h-[320px] sm:max-h-[400px] lg:max-h-[600px] overflow-y-auto pr-1 lg:pr-2">
                {tracks.map((t, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <li key={t.videoId}>
                      <button
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        className={`group w-full flex items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-xl sm:rounded-2xl border text-left transition-smooth ${
                          isActive
                            ? "bg-primary border-primary shadow-red"
                            : "bg-background/5 border-background/10 hover:border-accent/50 hover:bg-background/10"
                        }`}
                      >
                        <span
                          className={`font-display text-base sm:text-2xl tabular-nums w-5 sm:w-8 shrink-0 text-center ${
                            isActive ? "text-accent" : "text-background/50 group-hover:text-accent"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {t.thumbnail && (
                          <img
                            src={t.thumbnail}
                            alt={t.title}
                            loading="lazy"
                            className="h-10 w-10 sm:h-12 sm:w-16 object-cover rounded-lg shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <p
                            className={`font-display uppercase tracking-wide truncate text-xs sm:text-sm ${
                              isActive ? "text-primary-foreground" : "text-background"
                            }`}
                          >
                            {t.title}
                          </p>
                          <p
                            className={`text-xs truncate ${
                              isActive ? "text-primary-foreground/80" : "text-background/60"
                            }`}
                          >
                            {t.artist}
                          </p>
                        </div>
                        <span
                          className={`h-7 w-7 sm:h-9 sm:w-9 shrink-0 rounded-full grid place-items-center transition-bounce ${
                            isActive
                              ? "bg-accent text-accent-foreground scale-100"
                              : "bg-background/10 text-background/70 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110"
                          }`}
                        >
                          <Play className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};