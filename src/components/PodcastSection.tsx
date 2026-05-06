import { Loader2, Mic, Play } from "lucide-react";
import { useEffect, useState } from "react";

// Playlist de Podcasts no YouTube
const PODCAST_PLAYLIST_ID = "PLNU5mBGtELxZBBK5WyL4FFcyWN56tCOBG";
const MAX_EPISODES = 3;

type Episode = {
  videoId: string;
  title: string;
  thumbnail: string;
};

const decodeHtml = (s: string) => {
  if (typeof window === "undefined") return s;
  const el = document.createElement("textarea");
  el.innerHTML = s;
  return el.value;
};

const fetchEpisodes = async (): Promise<Episode[]> => {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PODCAST_PLAYLIST_ID}`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error("Falha ao carregar podcasts");
  const data = await res.json();
  if (data.status !== "ok" || !Array.isArray(data.items)) {
    throw new Error("Resposta inválida");
  }
  return data.items.slice(0, MAX_EPISODES).map((item: any) => {
    let videoId = "";
    if (item.guid?.startsWith("yt:video:")) {
      videoId = item.guid.replace("yt:video:", "");
    } else {
      const m = item.link?.match(/[?&]v=([^&]+)/);
      videoId = m?.[1] ?? "";
    }
    return {
      videoId,
      title: decodeHtml(item.title ?? "Episódio"),
      thumbnail: videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "",
    };
  }).filter((e: Episode) => e.videoId);
};

export const PodcastSection = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchEpisodes()
      .then((data) => mounted && setEpisodes(data))
      .catch((err) => {
        console.error("[PodcastSection]", err);
        if (mounted) setError("Não foi possível carregar os podcasts agora.");
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const playerSrc = `https://www.youtube.com/embed/videoseries?list=${PODCAST_PLAYLIST_ID}&index=${activeIndex}&rel=0`;

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-radio-gradient">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" aria-hidden />

      <div className="container relative px-4 sm:px-6 lg:px-8">
      <div className="mb-6 sm:mb-10 text-center sm:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2 inline-flex items-center gap-2">
          <Mic className="h-3.5 w-3.5" /> últimos episódios
        </p>
        <h2 className="font-display flex items-center justify-center sm:justify-start gap-2 text-3xl sm:text-4xl lg:text-5xl uppercase text-background leading-none"> 
          <span className="">Podcasts</span>
        </h2>

        <p className="mt-2 text-background/70 text-sm sm:text-base">
          Ouça novamente os podcasts que você perdeu
        </p>
      </div>

        {loading && (
          <div className="flex items-center justify-center py-16 text-background/70">
            <Loader2 className="h-6 w-6 animate-spin mr-3" />
            Carregando episódios...
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-12 text-background/70">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-5">
            {/* PLAYER */}
            <div className="lg:col-span-3 order-1">
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden bg-card/5 backdrop-blur-md border border-background/10 shadow-elegant">
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    key={activeIndex}
                    src={playerSrc}
                    title="Podcast player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>
            </div>

            {/* LISTA */}
            <div className="lg:col-span-2 order-2">
              <ol className="space-y-2 sm:space-y-3">
                {episodes.map((ep, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <li key={ep.videoId}>
                      <button
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        className={`group w-full flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl sm:rounded-2xl border text-left transition-smooth ${
                          isActive
                            ? "bg-primary border-primary shadow-red"
                            : "bg-background/5 border-background/10 hover:border-accent/50 hover:bg-background/10"
                        }`}
                      >
                        <img
                          src={ep.thumbnail}
                          alt={ep.title}
                          loading="lazy"
                          className="h-14 w-20 sm:h-16 sm:w-24 object-cover rounded-lg shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p
                            className={`font-display uppercase tracking-wide line-clamp-2 text-xs sm:text-sm ${
                              isActive ? "text-primary-foreground" : "text-background"
                            }`}
                          >
                            {ep.title}
                          </p>
                          <p
                            className={`text-[10px] sm:text-xs mt-1 ${
                              isActive ? "text-primary-foreground/80" : "text-background/60"
                            }`}
                          >
                            Episódio {String(i + 1).padStart(2, "0")}
                          </p>
                        </div>
                        <span
                          className={`h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-full grid place-items-center transition-bounce ${
                            isActive
                              ? "bg-accent text-accent-foreground"
                              : "bg-background/10 text-background/70 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110"
                          }`}
                        >
                          <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
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
