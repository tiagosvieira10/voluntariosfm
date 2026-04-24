// Programação semanal — edite livremente.
export type ProgramItem = {
  time: string;
  title: string;
  host?: string;
};

export const schedule: Record<string, ProgramItem[]> = {
  "Segunda-feira": [
    { time: "06:00", title: "Bom Dia Voluntários", host: "Carlos Mendes" },
    { time: "09:00", title: "Manhã da Gente", host: "Ana Beatriz" },
    { time: "12:00", title: "Almoço Musical" },
    { time: "14:00", title: "Tarde Sertaneja", host: "João Pedro" },
    { time: "18:00", title: "Hora do Rush", host: "Fernanda Lima" },
    { time: "20:00", title: "Voluntários Notícias", host: "Marcelo Souza" },
    { time: "22:00", title: "Noite Romântica" },
  ],
  "Terça-feira": [
    { time: "06:00", title: "Bom Dia Voluntários", host: "Carlos Mendes" },
    { time: "09:00", title: "Manhã da Gente", host: "Ana Beatriz" },
    { time: "12:00", title: "Almoço Musical" },
    { time: "14:00", title: "Flashback Voluntários", host: "Roberto Alves" },
    { time: "18:00", title: "Hora do Rush", host: "Fernanda Lima" },
    { time: "20:00", title: "Voluntários Notícias", host: "Marcelo Souza" },
    { time: "22:00", title: "Voz do Povo" },
  ],
  "Quarta-feira": [
    { time: "06:00", title: "Bom Dia Voluntários", host: "Carlos Mendes" },
    { time: "09:00", title: "Manhã da Gente", host: "Ana Beatriz" },
    { time: "12:00", title: "Almoço Musical" },
    { time: "14:00", title: "Tarde Sertaneja", host: "João Pedro" },
    { time: "18:00", title: "Hora do Rush", host: "Fernanda Lima" },
    { time: "20:00", title: "Esportes ao Vivo", host: "Pedro Santos" },
    { time: "22:00", title: "Madrugada Suave" },
  ],
  "Quinta-feira": [
    { time: "06:00", title: "Bom Dia Voluntários", host: "Carlos Mendes" },
    { time: "09:00", title: "Manhã da Gente", host: "Ana Beatriz" },
    { time: "12:00", title: "Almoço Musical" },
    { time: "14:00", title: "Forró da Tarde", host: "Maria Clara" },
    { time: "18:00", title: "Hora do Rush", host: "Fernanda Lima" },
    { time: "20:00", title: "Voluntários Notícias", host: "Marcelo Souza" },
    { time: "22:00", title: "Noite Romântica" },
  ],
  "Sexta-feira": [
    { time: "06:00", title: "Bom Dia Voluntários", host: "Carlos Mendes" },
    { time: "09:00", title: "Manhã da Gente", host: "Ana Beatriz" },
    { time: "12:00", title: "Almoço Musical" },
    { time: "14:00", title: "Sexta Total", host: "Lucas Ribeiro" },
    { time: "18:00", title: "Esquenta de Sexta", host: "DJ Voluntários" },
    { time: "20:00", title: "Balada FM", host: "DJ Voluntários" },
    { time: "23:00", title: "Madrugada Eletrônica" },
  ],
  "Sábado": [
    { time: "07:00", title: "Sábado Animado", host: "Camila Torres" },
    { time: "10:00", title: "Top Hits da Semana" },
    { time: "13:00", title: "Sertanejo no Pé", host: "João Pedro" },
    { time: "16:00", title: "Pagode Voluntários", host: "Bruno Cardoso" },
    { time: "20:00", title: "Sábado da Galera" },
    { time: "23:00", title: "Madrugada Premium" },
  ],
  "Domingo": [
    { time: "08:00", title: "Domingo em Família", host: "Ana Beatriz" },
    { time: "11:00", title: "MPB Voluntários" },
    { time: "14:00", title: "Especial Brasileiríssimo" },
    { time: "17:00", title: "Resumo da Semana", host: "Marcelo Souza" },
    { time: "20:00", title: "Domingo Romântico" },
    { time: "23:00", title: "Boa Noite" },
  ],
};

export const dayOrder = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];
