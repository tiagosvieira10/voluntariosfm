import { Radio } from "lucide-react";

export const LiveSection = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0" aria-hidden />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-10 text-center">
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
            <div className="relative overflow-hidden w-full pt-[56.25%] bg-black">
              <iframe
                src="https://www.voluntariosfm.com.br/tvonline/"
                title="TV Voluntários FM"
                allow="autoplay; fullscreen"
                allowFullScreen
                scrolling="no"
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
