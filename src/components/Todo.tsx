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

      {/* <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="link-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {" "} */}
      {/* <a
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              terms and conditions
            </a> */}
      {/* </label> */}
      {/* <!-- Input: Designation [h-12] & min-w-[12rem] --> */}
      {/* <input
            className="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
            type="text"
            placeholder="Designation"
          />
          {/* <!-- Button: Submit [h-12] --> */}
      {/* <button
            id="annul"
            className="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
          >
            Submit
          </button> */}

      {/* </section> */}
    </div>
  );
}
