"use client";

import { useState, useEffect } from "react";
import Item from "./Item";

export default function Todo() {
  const [tache, SetTache] = useState("");
  const handleChange = (event) => {
    console.log("test");
  };
  return (
    <div className="min-h-screen">
      <div className="" id="liste">
        <div className="flex w-full mx-10 rounded bg-white">
          <input
            className=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none "
            type="search"
            name="search"
            placeholder="Ajoutez une tâche..."
            id="task"
            value={tache}
            onChange={handleChange}
          />
          <button
            type="button"
            className="m-2 rounded bg-blue-600 px-4 py-2 text-white"
            id="plus"
            name="ajout"
          >
            Ajouter
          </button>
        </div>

        {/* =============================== Liste avec Numero + Title =  désignation de la tache  + Checkbox ==================*/}
        <div className="">
          <h3> liste des tâches</h3>

          <div
            className="mb-6 bg-green-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 
            dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div className="flex items-center">
              <Item numero={1} title="la tache" />
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
            </div>
          </div>
          <div className="flex items-center">
            <Item numero={2} title="acheter une pomme" />{" "}
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
          </div>
          <div className="flex items-center">
            <Item numero={3} title="la tâche" />{" "}
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
          </div>
          <div className="flex items-center">
            <Item numero={4} title="la tâche" />{" "}
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
