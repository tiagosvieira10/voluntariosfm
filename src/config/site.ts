// Configuração centralizada do site — edite aqui para personalizar.
// Centralized site config — edit here to customize the site.

export const siteConfig = {
  name: "Rádio Voluntários da Pátria",
  shortName: "Voluntários FM",
  slogan: "A trilha sonora da sua cidade. Ao vivo, 24 horas por dia.",
  description: "A rádio que vibra com o povo. Música, notícias e a melhor companhia.",

  // ⚠️ URL do streaming ao vivo — substitua pela URL real da sua rádio.
  streamUrl: "https://stream01.ouveai.com.br:1216/stream", // exemplo — troque aqui

  // Contatos
  phone: "(87) 9 9150-1009",
  whatsapp: "5587991501009", // formato internacional sem +
  whatsappMessage: "Olá! Vim pelo site da Rádio Voluntários da Pátria.",
  email: "contatocomercial@voluntariosfm.com.br",
  address: "Travessa Valdir Leopércio, 23. Aeroporto, Ouricuri - PE",

  // Comercial
  commercialWhatsapp: "5587991501009",
  commercialWhatsappMessage: "Olá! Tenho interesse em anunciar na Rádio Voluntários.",
  commercialEmail: "comercial@voluntariosfm.com.br",
  commercialPhone: "(87) 9 9150-1009",

  // Redes sociais
  social: {
    facebook: "https://facebook.com/voluntariosfm",
    instagram: "https://instagram.com/voluntariosfm",
    youtube: "https://youtube.com/@voluntariosfm",
  },
};

export const whatsappLink = (phone = siteConfig.whatsapp, msg = siteConfig.whatsappMessage) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
