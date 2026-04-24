import newsHero from "@/assets/contato-hero.jpg";
import { Layout } from "@/components/Layout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, Newspaper, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contato = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Substitua por integração com backend / e-mail.
    toast({
      title: "Mensagem enviada!",
      description: "Em breve a equipe da Voluntários FM entrará em contato.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative overflow-hidden bg-orange-900 text-background">
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
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-4 flex items-center gap-2">
            <Newspaper className="h-3.5 w-3.5" /> Fique por dentro
          </p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-balance max-w-3xl">
            Contato
          </h1>
          <p className="mt-6 text-lg text-background/75 max-w-xl leading-relaxed">
            As principais informações da sua cidade e da região, atualizadas
            pela equipe da Voluntários FM.
          </p>
        </div>
      </section>

      <section className="container py-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl uppercase mb-6">Canais de atendimento</h2>
          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-red shadow-red shrink-0">
                <Phone className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display uppercase text-sm tracking-wider text-muted-foreground">Telefone</p>
                <p className="font-semibold text-lg">{siteConfig.phone}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-red shadow-red shrink-0">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display uppercase text-sm tracking-wider text-muted-foreground">E-mail</p>
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-lg hover:text-primary transition-smooth">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-red shadow-red shrink-0">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display uppercase text-sm tracking-wider text-muted-foreground">Endereço</p>
                <p className="font-semibold text-lg">{siteConfig.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-hero text-background relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-2xl uppercase mb-2">Quer falar agora?</h3>
              <p className="text-background/80 text-sm mb-5">Resposta rápida pelo WhatsApp da redação.</p>
              <WhatsAppButton size="lg" />
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-3xl bg-card border border-border p-8 shadow-elegant">
          <h2 className="font-display text-3xl uppercase mb-6">Envie sua mensagem</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nome</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">E-mail</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Mensagem</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-red text-primary-foreground font-bold uppercase tracking-wider px-6 py-4 text-sm shadow-red transition-bounce hover:scale-[1.02] hover:shadow-glow"
            >
              <Send className="h-4 w-4" /> Enviar mensagem
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Contato;
