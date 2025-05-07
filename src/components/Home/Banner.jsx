import { useEffect, useState } from "react";
import { LinkIcon } from "../../icons/LinkIcon";
import { runCode } from '../hooks/useRunCode.js';

export function Banner() {
  const [isLive, setIsLive] = useState(false);
  const [streamData, setStreamData] = useState({
    url: '',
    title: '',
    description: ''
  });

  // Cargar configuración inicial desde la base de datos
  useEffect(() => {
    const fetchLiveStreamConfig = async () => {
      try {
        const result = await runCode('-st live_stream_config;');
        const config = result[0];
        setIsLive(config.is_live === "1");
        console.log(result)
        setStreamData({
          url: config.stream_url,
          title: config.title,
          description: config.description
        });
      } catch (error) {
        console.error('Error fetching live stream config:', error);
      }
    };

    fetchLiveStreamConfig();
  }, []);

  if (!isLive) {
    return null; // No mostrar nada si no hay transmisión en vivo
  }

  return (
    <section className="w-full p-4 -mb-14 md:-mb-10 relative top-0 left-0 z-50">
      <div className="flex bg-zinc-200 rounded-lg flex-col py-2 px-3 md:flex-row justify-between max-w-screen-xl mx-auto items-center gap-4 md:gap-10">
        <div className="text-lg font-light items-center text-center md:text-left flex flex-col md:flex-row">
          <h3 className="me-2 font-medium flex items-center gap-2">
            <span className="h-3 w-3 bg-red-700 animate-pulse rounded-full"></span>
            {streamData.title}
          </h3>
          <p className="text-sm">
            {streamData.description}
          </p>
        </div>
        <a href={streamData.url} target="_blank" rel="noopener noreferrer" className="flex text-sm items-center gap-3 px-6 py-1.5 text-white bg-black rounded-lg">
          Ir a Ver
          <LinkIcon className="size-4" />
        </a>
      </div>
    </section>
  )
}