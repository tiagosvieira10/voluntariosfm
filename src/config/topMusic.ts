// =====================================================================
// TOP 10 MÚSICAS — Consome a playlist do YouTube de forma dinâmica
// ---------------------------------------------------------------------
// A lista é buscada em tempo real a partir do RSS oficial da playlist.
// Sempre que você adicionar/remover/reordenar vídeos no YouTube,
// o site refletirá a mudança automaticamente (sem editar código).
//
// Para trocar a playlist, altere apenas PLAYLIST_ID abaixo.
// =====================================================================

export type Track = {
  title: string;
  artist: string;
  videoId: string;
  thumbnail: string;
};

// ID da playlist do YouTube atualmente exibida no site.
// Fonte: https://youtube.com/playlist?list=PLNU5mBGtELxZiTZp15FD0Z0DVdi0X6Zbn
export const PLAYLIST_ID = "PLNU5mBGtELxZiTZp15FD0Z0DVdi0X6Zbn";

// Quantidade máxima de músicas exibidas no ranking.
export const MAX_TRACKS = 10;

// Decodifica entidades HTML (&amp;, &quot;, etc.) que vêm no feed.
const decodeHtml = (s: string) => {
  if (typeof window === "undefined") return s;
  const el = document.createElement("textarea");
  el.innerHTML = s;
  return el.value;
};

// Tenta separar "Artista - Música" no título do vídeo.
// Quando não dá, usa o nome do canal como artista.
const parseTitle = (rawTitle: string, channel: string): { title: string; artist: string } => {
  const title = decodeHtml(rawTitle).trim();
  const cleanChannel = decodeHtml(channel).replace(/\s*Oficial$/i, "").trim();

  // Padrão "Artista - Música" (com hífen ou travessão)
  const dashMatch = title.match(/^(.+?)\s+[-–—]\s+(.+)$/);
  if (dashMatch) {
    const [, left, right] = dashMatch;
    return { artist: left.trim(), title: right.trim() };
  }

  return { title, artist: cleanChannel || "Artista desconhecido" };
};

type Rss2JsonItem = {
  title: string;
  link: string;
  author?: string;
  thumbnail?: string;
  guid?: string;
  enclosure?: { thumbnail?: string };
};

/**
 * Busca a playlist em tempo real via RSS oficial do YouTube.
 * Usa o proxy público rss2json para contornar CORS.
 */
export const getTopTracks = async (): Promise<Track[]> => {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error(`Falha ao carregar playlist (${res.status})`);

  const data: { status: string; items?: Rss2JsonItem[] } = await res.json();
  if (data.status !== "ok" || !Array.isArray(data.items)) {
    throw new Error("Resposta inválida da playlist");
  }

  const tracks: Track[] = data.items.slice(0, MAX_TRACKS).map((item) => {
    // videoId vem em "yt:video:XXXX" ou no link ?v=XXXX
    let videoId = "";
    if (item.guid && item.guid.startsWith("yt:video:")) {
      videoId = item.guid.replace("yt:video:", "");
    } else {
      const m = item.link.match(/[?&]v=([^&]+)/);
      videoId = m?.[1] ?? "";
    }

    const { title, artist } = parseTitle(item.title, item.author ?? "");
    const thumbnail =
      item.thumbnail ||
      item.enclosure?.thumbnail ||
      (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "");

    return { title, artist, videoId, thumbnail };
  });

  return tracks.filter((t) => t.videoId);
};
