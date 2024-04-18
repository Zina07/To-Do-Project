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
        <div className="">
          <h3> liste des tâches</h3>
          <Item numero={1} title="la tache"/>
          <Item  title="acheter une pomme"/>
          <Item  title="la tache"/>
          <Item  title="la tache"/>
        </div>
      </div>
    </div>
  );
}
