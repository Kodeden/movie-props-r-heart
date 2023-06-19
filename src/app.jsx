import AddMoviePropForm from "./components/add-movie-prop-form";

function App() {
  return (
    <main className="container mx-auto mt-16 flex flex-col items-center">
      <h1 className="mb-8 text-6xl font-black">Movie Props Manager</h1>
      <AddMoviePropForm />
    </main>
  );
}

export default App;
