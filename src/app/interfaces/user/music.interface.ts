interface IMusic {
  id: number;
  title: string;
  band: string;
  genre: number; // This should ideally be a reference to a Genre interface
  isFavorite: boolean;
}
