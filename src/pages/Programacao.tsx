import newsHero from "@/assets/programacao-hero.jpg";
import { Layout } from "@/components/Layout";
import { dayOrder, schedule } from "@/config/schedule";
import { Calendar, User } from "lucide-react";


const Programacao = () => {
  const today = dayOrder[(new Date().getDay() + 6) % 7];

  return (
    <Layout>
        <section className="relative overflow-hidden bg-blue-900 text-background">
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
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-4 flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" /> Grade Semanal
          </p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-balance max-w-3xl">
            Programação
          </h1>
          <p className="mt-6 text-lg text-background/75 max-w-xl leading-relaxed">
            Confira tudo que vai ao ar na Voluntários FM, do nascer ao pôr do sol.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-10">
          {dayOrder.map((day) => (
            <div key={day} id={day}>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-display text-3xl sm:text-4xl uppercase">
                  {day}
                </h2>
                {day === today && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest animate-pulse-live">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" /> Hoje
                  </span>
                )}
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="grid gap-3">
                {schedule[day].map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-card border border-border hover:border-primary transition-smooth"
                  >
                    <div className="font-display text-2xl sm:text-3xl text-primary tabular-nums w-16 sm:w-20 shrink-0">
                      {p.time}
                    </div>
                    <div className="h-10 w-px bg-border shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-lg sm:text-xl uppercase tracking-wide truncate">
                        {p.title}
                      </p>
                      {p.host && (
                        <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5">
                          <User className="h-3 w-3" /> {p.host}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Programacao;
