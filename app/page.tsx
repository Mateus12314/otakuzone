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
