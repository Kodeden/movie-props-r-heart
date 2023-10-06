import moviePropsSeed from "../db.json";
import AddMoviePropForm from "./components/add-movie-prop-form";
import MoviePropList from "./components/movie-prop-list";

function App() {
  const movieProps = moviePropsSeed;

  return (
    <main className="container mx-auto mt-16 flex flex-col items-center">
      <h1 className="mb-8 text-6xl font-black">Movie Props Manager</h1>
      <AddMoviePropForm />
      <MoviePropList movieprops={movieProps} />
    </main>
  );
}

export default App;
