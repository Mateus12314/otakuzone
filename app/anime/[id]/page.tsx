import AnimeClient from "./AnimeClient";

export default function Page({ params }: any) {
  return <AnimeClient id={params.id} />;
}
