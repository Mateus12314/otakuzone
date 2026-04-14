"use client";
import { useEffect, useState } from "react";

export default function AnimePage({ params }: any) {
  const [anime, setAnime] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${params.id}`)
      .then(res => res.json())
      .then(data => setAnime(data.data));
  }, [params.id]);

  if (!anime) {
    return <p style={{ color: "#fff", padding: 20 }}>Carregando...</p>;
  }

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: 20 }}>

      <h1 style={{ color: "red" }}>{anime.title}</h1>

      <img
        src={anime.images.jpg.large_image_url}
        style={{ width: 300, borderRadius: 10 }}
      />

      <p style={{ marginTop: 20 }}>{anime.synopsis}</p>

      <p>⭐ Nota: {anime.score}</p>
      <p>🎬 Episódios: {anime.episodes}</p>

    </div>
  );
}

