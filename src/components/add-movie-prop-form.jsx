export default function AddMoviePropForm() {
  return (
    <form className="space-x-2">
      <label htmlFor="name" className="sr-only">
        Prop Name:
      </label>
      <input
        type="text"
        id="name"
        placeholder="Prop Name"
        className="rounded"
      />
      <button
        type="submit"
        className="rounded border-white bg-green-500 px-4 py-2 text-white"
      >
        Add Prop
      </button>
    </form>
  );
}
