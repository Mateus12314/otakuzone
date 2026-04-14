"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [animes, setAnimes] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(https://api.jikan.moe/v4/anime?order_by=popularity&limit=50&page=1)
      .then(res => res.json())
      .then(data => setAnimes(data.data));
  }, []);

  const filtered = animes.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: 20 }}>
      
      <h1 style={{ color: "red" }}>OtakuZone</h1>

      <input
        placeholder="Buscar anime..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 10, width: "100%", marginBottom: 20 }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 10 }}>
        {filtered.map(anime => (
          <a href={`/anime/${anime.mal_id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{
              background: "#111",
              padding: 10,
              borderRadius: 10,
              transition: "0.3s",
            }}>
              <img src={anime.images.jpg.image_url} style={{ width: "100%", borderRadius: 10 }} />
              <p style={{ fontWeight: "bold" }}>{anime.title}</p>
              <p>⭐ {anime.score}</p>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}
