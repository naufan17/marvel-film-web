export interface Movie {
  id: number;
  title: string;
  poster: string;
  year: number;
  plot: string;
}

export interface MovieDetail extends Movie {
  trailer: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  torrent: string;
}