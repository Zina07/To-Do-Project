export default function Todo() {
  return (
    // <section className="grid place-items-center p-16 min-h-screen">
    //   <div className="flex gap-4">
    //     <div className="flex items-center">
    <div className="min-h-screen">
      <div id="liste">
        <div className="flex w-full mx-10 rounded bg-white">
          <input
            className=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none "
            type="search"
            name="search"
            placeholder="Ajoutez une tâche..."
          />
          <button
            type="add"
            className="m-2 rounded bg-blue-600 px-4 py-2 text-white"
            id="plus"
            type="add"
            name="ajout"
          >
            Ajout
          </button>
        </div>
        <h3> Ma liste</h3>
        <ul>
          <li></li>
        </ul>
      </div>

     
    </div>
  );
}
