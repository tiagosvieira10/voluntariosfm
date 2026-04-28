import { Radio } from "lucide-react";

// Channel ID do YouTube da rádio (@voluntariosfm)
const CHANNEL_ID = "UCZJk3kZV0lqX0lZqS0uV3lg";

export const LiveSection = () => {
  const liveSrc = `https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}&autoplay=0`;

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0" aria-hidden />
      {/* <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-primary/30 blur-3xl" aria-hidden /> */}

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-10 text-center">
          {/* <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2 inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            Transmissão
          </p> */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-background inline-flex items-center gap-3">
            <Radio className="h-7 w-7 sm:h-9 sm:w-9 text-primary" />
            <span className="text-primary">Ao Vivo</span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
          </h2>
          <p className="mt-2 text-primary/70 text-sm sm:text-base">
            Acompanhe nossa transmissão direto do estúdio
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl lg:rounded-3xl overflow-hidden bg-card/5 backdrop-blur-md border border-background/10 shadow-elegant">
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={liveSrc}
                title="Transmissão ao vivo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
