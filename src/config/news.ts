// ============================================================================
// NOTÍCIAS — Integração com o RSS do G1 Petrolina e Região.
// ----------------------------------------------------------------------------
// Como o RSS do G1 não envia cabeçalhos de CORS, usamos o serviço público
// `rss2json` para converter o feed em JSON e permitir a leitura no navegador.
// Se um dia quiser trocar a fonte, basta alterar `RSS_FEED_URL` abaixo.
// ============================================================================

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  externalUrl: string;
  date: string;
  category?: string;
};

// ----------------------------------------------------------------------------
// FONTE DO RSS — G1 Petrolina e Região
// ----------------------------------------------------------------------------
export const RSS_FEED_URL =
  "https://g1.globo.com/rss/g1/pe/petrolina-regiao/";

// Conversor RSS → JSON (gratuito, com CORS habilitado)
const RSS_TO_JSON_ENDPOINT = "https://api.rss2json.com/v1/api.json?rss_url=";

// Imagem padrão caso algum item venha sem foto
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&q=80";

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function extractFirstImage(html: string): string | null {
  const match = html?.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("pt-BR");
  } catch {
    return "";
  }
}

// ----------------------------------------------------------------------------
// Busca as notícias do RSS
// ----------------------------------------------------------------------------
export async function getNews(): Promise<NewsItem[]> {
  try {
    const url = `${RSS_TO_JSON_ENDPOINT}${encodeURIComponent(RSS_FEED_URL)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Erro ${res.status} ao buscar o RSS`);

    const data = await res.json();
    const items = Array.isArray(data?.items) ? data.items : [];

    return items.map((it: any, idx: number): NewsItem => {
      const image =
        it.thumbnail ||
        it.enclosure?.link ||
        extractFirstImage(it.content || "") ||
        extractFirstImage(it.description || "") ||
        FALLBACK_IMAGE;

      const excerpt = stripHtml(it.description || it.content || "").slice(
        0,
        180,
      );

      return {
        id: it.guid || String(idx),
        title: stripHtml(it.title || "Sem título"),
        excerpt: excerpt + (excerpt.length === 180 ? "..." : ""),
        image,
        externalUrl: it.link,
        date: formatDate(it.pubDate),
        category:
          Array.isArray(it.categories) && it.categories.length > 0
            ? it.categories[0]
            : "G1 Petrolina",
      };
    });
  } catch (err) {
    console.error("Falha ao carregar notícias do RSS:", err);
    return [];
  }
}
