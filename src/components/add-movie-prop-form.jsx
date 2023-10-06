import { useRef, useState } from "react";

export default function AddMoviePropForm({
  moviePropsList,
  setMoviePropsList,
}) {
  const [moviePropName, setMoviePropName] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const inputRef = useRef(null); // used to clear the input field of typed text and return to placeholder text after submitting the form

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setMoviePropName(event.target.value);
    setIsButtonDisabled(inputValue.trim() === "");
  };

  const handleAddMovieProp = () => {
    event.preventDefault();

    const maxId = moviePropsList.reduce((max, movieProp) => {
      const idAsNumber = parseInt(movieProp.id, 10);
      return idAsNumber > max ? idAsNumber : max;
    }, 0);

    // Increment the maximum id value by 1 and convert it back to a string
    const nextId = String(maxId + 1);
    if (moviePropName.trim() === "") return;
    const currentDate = new Date().toLocaleDateString();
    const newMovieProp = {
      id: nextId,
      name: moviePropName,
      createdAt: currentDate,
    };
    setMoviePropsList([...moviePropsList, newMovieProp]);
    inputRef.current.value = "";
    setMoviePropName("");
  };

  return (
    <form className="space-x-2">
      <label htmlFor="name" className="sr-only">
        Prop Name:
      </label>
      <input
        type="text"
        id="name"
        placeholder="Prop Name"
        className="rounded text-black"
        onChange={handleInputChange}
        ref={inputRef}
      />
      <button
        type="submit"
        className="rounded border-white bg-green-500 px-4 py-2 text-white"
        onClick={handleAddMovieProp}
        disabled={isButtonDisabled}
      >
        Add Prop
      </button>
    </form>
  );
}
