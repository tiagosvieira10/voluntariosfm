// import { Radio } from "lucide-react";
// import { useEffect, useState } from "react";

// const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

// // Channel ID do YouTube da rádio (@voluntariosfm)
// const CHANNEL_ID = "UChHCu-_ueX-2345dj4TZG6g";

// export const LiveSection = () => {
//   const [videoId, setVideoId] = useState<string | null>(null);
//   const [isLive, setIsLive] = useState(false);

//   useEffect(() => {
//     const fetchLiveOrLatest = async () => {
//       try {
//         // 1 - Tenta buscar live ao vivo
//         const liveResponse = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&maxResults=1&key=${API_KEY}`
//         );

//         const liveData = await liveResponse.json();

//         if (liveData.items && liveData.items.length > 0) {
//           setVideoId(liveData.items[0].id.videoId);
//           setIsLive(true);
//           return;
//         }

//         // 2 - Se não tiver live, pega o último vídeo/livestream
//         const latestResponse = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&type=video&maxResults=1&key=${API_KEY}`
//         );

//         const latestData = await latestResponse.json();

//         if (latestData.items && latestData.items.length > 0) {
//           setVideoId(latestData.items[0].id.videoId);
//           setIsLive(false);
//         }
//       } catch (error) {
//         console.error("Erro ao carregar transmissão:", error);
//       }
//     };

//     fetchLiveOrLatest();

//     // Atualiza automaticamente a cada 60 segundos
//     const interval = setInterval(fetchLiveOrLatest, 60000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
//       {/* <div className="position: relative; overflow: hidden; width: 100%;padding-top: 56.25%;">
//         <iframe width="560" height="300" referrerpolicy="origin" src="https://stream01.ouveai.com.br:2020/VideoPlayer/tvvoluntatios?autoplay=1" className="position: absolute;top: 0;left: 0;bottom: 0;right: 0;width: 100%;height: 100%;" scrolling="no" frameborder="0" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
//       </div> */}
//       <div className="absolute inset-0" aria-hidden />

//       <div className="container relative px-4 sm:px-6 lg:px-8">
//         <div className="mb-6 sm:mb-10 text-center">
//           <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-background inline-flex items-center gap-3">
//             <Radio className="h-7 w-7 sm:h-9 sm:w-9 text-primary" />

//             <span className="text-primary">
//               {isLive ? "Ao Vivo" : "Última Transmissão"}
//             </span>

//             {isLive && (
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
//               </span>
//             )}
//           </h2>

//           <p className="mt-2 text-primary/70 text-sm sm:text-base">
//             {isLive
//               ? "Acompanhe nossa transmissão direto do estúdio"
//               : "Confira nossa última transmissão realizada"}
//           </p>
//         </div>

//         <div className="max-w-5xl mx-auto">
//           <div className="rounded-2xl lg:rounded-3xl overflow-hidden bg-card/5 backdrop-blur-md border border-background/10 shadow-elegant">
//             <div className="relative w-full aspect-video bg-black">
//               {videoId ? (
//                 <iframe
//                   src={`https://www.youtube.com/embed/${videoId}`}
//                   title="Transmissão da rádio"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="absolute inset-0 h-full w-full"
//                 />
//               ) : (
//                 <div className="flex items-center justify-center h-full text-white">
//                   Carregando transmissão...
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
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
                src="https://stream01.ouveai.com.br:2020/VideoPlayer/tvvoluntatios?autoplay=1"
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
