import { Layout } from "@/components/Layout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { Briefcase, Mail, Phone, Sparkles, Target, TrendingUp, Users } from "lucide-react";

const Comercial = () => {
  return (
    <Layout>
      <section className="relative bg-surface-darker text-background py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-yellow-700/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-yellow-300/30 blur-3xl" />
        </div>
        <div className="container relative">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-3 flex items-center gap-2">
            <Briefcase className="h-3.5 w-3.5" /> Anuncie na Voluntários Fm
          </p>
          <h1 className="font-display text-5xl sm:text-7xl uppercase max-w-3xl text-balance">
            Sua marca <span className="text-orange-500">no ar</span> da nossa região
          </h1>
          <p className="mt-6 text-background/80 max-w-2xl text-lg leading-relaxed">
            Conecte-se com milhares de ouvintes fiéis todos os dias. Criamos campanhas sob medida para o seu negócio crescer junto com a cidade.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton
              phone={siteConfig.commercialWhatsapp}
              message={siteConfig.commercialWhatsappMessage}
              label="Falar com comercial"
              size="lg"
            />
            <a
              href={`mailto:${siteConfig.commercialEmail}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-background/10 hover:bg-background/20 backdrop-blur text-background border border-background/20 font-semibold px-7 py-4 text-base transition-smooth"
            >
              <Mail className="h-5 w-5" /> {siteConfig.commercialEmail}
            </a>
          </div>
        </div>
      </section>

      {/* Por que anunciar */}
      <section className="container py-20">
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-center mb-4">
          Por que anunciar conosco?
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
          A Voluntários FM é parte da rotina das famílias da nossa região. Sua marca conversa direto com quem decide a compra.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Users, title: "Audiência fiel", desc: "Milhares de ouvintes acompanham nossa programação todos os dias." },
            { icon: Target, title: "Público local", desc: "Foco regional: alcance certo para negócios da sua cidade." },
            { icon: TrendingUp, title: "Resultado real", desc: "Campanhas com criação, produção e veiculação inclusas." },
          ].map((b, i) => (
            <div key={i} className="p-8 rounded-3xl bg-card border border-border hover:border-primary transition-smooth hover:shadow-red">
              <div className="h-14 w-14 rounded-2xl bg-gradient-red grid place-items-center shadow-red mb-5">
                <b.icon className="h-6 w-6 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-xl uppercase mb-2 tracking-wide">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Planos futuros */}
      <section className="container pb-12">
        <div className="rounded-3xl bg-gradient-dark text-background p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-red opacity-10" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Sparkles className="h-8 w-8 text-yellow-500 mb-4" />
              <h2 className="font-display text-3xl sm:text-4xl uppercase mb-4">
                Planos de publicidade <span className="text-yellow-500">em breve</span>
              </h2>
              <p className="text-background/70 leading-relaxed">
                Estamos preparando pacotes especiais com spots, patrocínios de programa e ações combinadas com redes sociais.
                Entre em contato e receba uma proposta personalizada antes do lançamento.
              </p>
            </div>
            <div className="space-y-3">
              {["Spot 30s", "Patrocínio de programa", "Citação ao vivo", "Promoções de Eventos"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/40 border border-border/10">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-semibold">{item}</span>
                  <span className="ml-auto text-xs text-background/50 uppercase tracking-widest">Sob consulta</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contatos finais */}
      <section className="container py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href={`tel:${siteConfig.commercialPhone.replace(/\D/g, "")}`}
            className="group p-8 rounded-3xl bg-card border border-border hover:border-primary transition-smooth flex items-center gap-5"
          >
            <div className="h-14 w-14 rounded-2xl bg-gradient-red grid place-items-center shadow-red transition-bounce group-hover:scale-110">
              <Phone className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Telefone comercial</p>
              <p className="font-display text-2xl uppercase">{siteConfig.commercialPhone}</p>
            </div>
          </a>
          <a
            href={`mailto:${siteConfig.commercialEmail}`}
            className="group p-8 rounded-3xl bg-card border border-border hover:border-primary transition-smooth flex items-center gap-5"
          >
            <div className="h-14 w-14 rounded-2xl bg-gradient-red grid place-items-center shadow-red transition-bounce group-hover:scale-110">
              <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">E-mail comercial</p>
              <p className="font-display text-xl uppercase break-all">{siteConfig.commercialEmail}</p>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Comercial;
