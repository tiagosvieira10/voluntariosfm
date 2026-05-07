// import { Slider } from "@/components/ui/slider";
// import { siteConfig } from "@/config/site";
// import { cn } from "@/lib/utils";
// import { Pause, Play, Radio, Volume2, VolumeX } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// export const RadioPlayer = () => {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(80);
//   const [muted, setMuted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const audio = new Audio(siteConfig.streamUrl);
//     audio.preload = "none";
//     audio.volume = volume / 100;
//     audioRef.current = audio;

//     const onPlay = () => { setIsPlaying(true); setLoading(false); };
//     const onPause = () => setIsPlaying(false);
//     const onWaiting = () => setLoading(true);
//     const onPlaying = () => setLoading(false);

//     audio.addEventListener("play", onPlay);
//     audio.addEventListener("pause", onPause);
//     audio.addEventListener("waiting", onWaiting);
//     audio.addEventListener("playing", onPlaying);

//     return () => {
//       audio.pause();
//       audio.removeEventListener("play", onPlay);
//       audio.removeEventListener("pause", onPause);
//       audio.removeEventListener("waiting", onWaiting);
//       audio.removeEventListener("playing", onPlaying);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.volume = muted ? 0 : volume / 100;
//     }
//   }, [volume, muted]);

//   const toggle = async () => {
//     const audio = audioRef.current;
//     if (!audio) return;
//     if (isPlaying) {
//       audio.pause();
//     } else {
//       try {
//         setLoading(true);
//         // Reload to ensure fresh stream
//         audio.src = siteConfig.streamUrl;
//         await audio.play();
//       } catch (e) {
//         setLoading(false);
//         console.error("Erro ao iniciar o stream:", e);
//       }
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50 animate-float-in">
//       <div className="group flex items-center gap-3 rounded-2xl bg-surface-darker/95 backdrop-blur-xl border border-primary/30 shadow-red px-3 py-2.5 sm:px-4 sm:py-3 min-w-[280px] sm:min-w-[340px]">
//         {/* Play button */}
//         <button
//           onClick={toggle}
//           aria-label={isPlaying ? "Pausar rádio" : "Tocar rádio"}
//           className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-red text-primary-foreground shadow-glow transition-bounce hover:scale-105 active:scale-95"
//         >
//           {loading ? (
//             <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
//           ) : isPlaying ? (
//             <Pause className="h-5 w-5 fill-current" />
//           ) : (
//             <Play className="h-5 w-5 fill-current ml-0.5" />
//           )}
//         </button>

//         {/* Info */}
//         <div className="flex-1 min-w-0">
//           <div className="flex items-center gap-2">
//             <span
//               className={cn(
//                 "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest",
//                 isPlaying
//                   ? "bg-live text-primary-foreground animate-pulse-live"
//                   : "bg-muted-foreground/20 text-muted-foreground"
//               )}
//             >
//               <span className="h-1.5 w-1.5 rounded-full bg-current" />
//               Ao Vivo
//             </span>
//             {isPlaying && (
//               <div className="flex items-end gap-0.5 h-3">
//                 {[0, 1, 2, 3].map((i) => (
//                   <span
//                     key={i}
//                     className="block w-0.5 bg-primary animate-wave origin-bottom"
//                     style={{ animationDelay: `${i * 0.15}s`, height: "100%" }}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//           <p className="mt-0.5 truncate text-xs font-semibold text-background flex items-center gap-1.5">
//             <Radio className="h-3 w-3 text-primary" />
//             {siteConfig.shortName}
//           </p>
//         </div>

//         {/* Volume */}
//         <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-border/30">
//           <button
//             onClick={() => setMuted((m) => !m)}
//             aria-label={muted ? "Ativar som" : "Mudo"}
//             className="text-background/80 hover:text-primary transition-smooth"
//           >
//             {muted || volume === 0 ? (
//               <VolumeX className="h-4 w-4" />
//             ) : (
//               <Volume2 className="h-4 w-4" />
//             )}
//           </button>
//           <Slider
//             value={[muted ? 0 : volume]}
//             onValueChange={(v) => { setVolume(v[0]); setMuted(false); }}
//             max={100}
//             step={1}
//             className="w-20"
//             aria-label="Volume"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
import { Slider } from "@/components/ui/slider";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Pause, Play, Radio, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const RadioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [muted, setMuted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const audio = new Audio(siteConfig.streamUrl);
    audio.preload = "none";
    audio.volume = volume / 100;
    audioRef.current = audio;

    const onPlay = () => { setIsPlaying(true); setLoading(false); };
    const onPause = () => setIsPlaying(false);
    const onWaiting = () => setLoading(true);
    const onPlaying = () => setLoading(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("playing", onPlaying);

    // Tenta autoplay ao carregar o site
    const tryAutoplay = async () => {
      try {
        setLoading(true);
        audio.src = siteConfig.streamUrl;
        await audio.play();
      } catch {
        setLoading(false);
        // Autoplay bloqueado pelo navegador — inicia no primeiro clique/toque
        const startOnInteract = async () => {
          try {
            setLoading(true);
            audio.src = siteConfig.streamUrl;
            await audio.play();
          } catch {
            setLoading(false);
          } finally {
            window.removeEventListener("click", startOnInteract);
            window.removeEventListener("touchstart", startOnInteract);
            window.removeEventListener("keydown", startOnInteract);
          }
        };
        window.addEventListener("click", startOnInteract, { once: true });
        window.addEventListener("touchstart", startOnInteract, { once: true });
        window.addEventListener("keydown", startOnInteract, { once: true });
      }
    };
    tryAutoplay();

    return () => {
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("playing", onPlaying);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muted ? 0 : volume / 100;
    }
  }, [volume, muted]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      try {
        setLoading(true);
        // Reload to ensure fresh stream
        audio.src = siteConfig.streamUrl;
        await audio.play();
      } catch (e) {
        setLoading(false);
        console.error("Erro ao iniciar o stream:", e);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-float-in">
      <div className="group flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-primary/30 shadow-red px-3 py-2.5 sm:px-4 sm:py-3 min-w-[280px] sm:min-w-[340px]">
        {/* Play button */}
        <button
          onClick={toggle}
          aria-label={isPlaying ? "Pausar rádio" : "Tocar rádio"}
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-red text-primary-foreground shadow-glow transition-bounce hover:scale-105 active:scale-95"
        >
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
          ) : isPlaying ? (
            <Pause className="h-5 w-5 fill-current" />
          ) : (
            <Play className="h-5 w-5 fill-current ml-0.5" />
          )}
        </button>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest",
                isPlaying
                  ? "bg-live text-primary-foreground animate-pulse-live"
                  : "bg-muted-foreground/20 text-muted-foreground"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Ao Vivo
            </span>
            {isPlaying && (
              <div className="flex items-end gap-0.5 h-3">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="block w-0.5 bg-primary animate-wave origin-bottom"
                    style={{ animationDelay: `${i * 0.15}s`, height: "100%" }}
                  />
                ))}
              </div>
            )}
          </div>
          <p className="mt-0.5 truncate text-xs font-semibold text-foreground flex items-center gap-1.5">
            <Radio className="h-3 w-3 text-primary" />
            {siteConfig.shortName}
          </p>
        </div>

        {/* Volume */}
        <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-border/30">
          <button
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Ativar som" : "Mudo"}
            className="text-foreground/70 hover:text-primary transition-smooth"
          >
            {muted || volume === 0 ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
          <Slider
            value={[muted ? 0 : volume]}
            onValueChange={(v) => { setVolume(v[0]); setMuted(false); }}
            max={100}
            step={1}
            className="w-20"
            aria-label="Volume"
          />
        </div>
      </div>
    </div>
  );
};
