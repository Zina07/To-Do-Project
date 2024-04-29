"use client";

import { useState, useEffect } from "react";
import Item from "./Item";

export default function Todo() {
  // A faire
  // 1/ Après ajout, clean l'input
  // 2/ Rajouter un deuxième input "description" qui s'affiche également

  const [currentNewTodoTitle, setCurrentNewTodoTitle] = useState("");
  const [currentNewTodoNum, setCurrentNewTodoNum] = useState(1);

  const [todos, setTodos] = useState([
    // { title: "la tache", num: 1 },
    // { title: "acheter des cookies", num: 2 },
    // { title: "partir en courant", num: 3 },
    // { title: "acheter billet de train", num: 4 },
  ]);
  const onChange = (event) => {
    // console.log("value", event.target.value);
    setCurrentNewTodoTitle(event.target.value);
  };
  const addItem = () => {
    // currentNewTodoNum = currentNewTodoNum + 1
    setCurrentNewTodoNum(currentNewTodoNum + 1);
    const newTodo = { title: currentNewTodoTitle, num: currentNewTodoNum };
    // setTodos(todos.push(newTodo))
    setTodos([...todos, newTodo]);
    setCurrentNewTodoTitle("");
  const tache = document.querySelector("#task");
  document.getElementById("task").innerText = tache.style.display.none;
  



  };

  const reseaux = [
    { title: "Facebook", image: "https://picsum.photos/50" },
    { title: "Twitter", image: "https://placebeard.it/50x50" },
    { title: "LinkedIn", image: "http://placebeard.it/50x50" },
    { title: "Youtube", image: "https://picsum.photos/50" },
  ];
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
            onChange={onChange}
            // value={tache}
          />
          <button
            type="button"
            className="m-2 rounded bg-blue-600 px-4 py-2 text-white"
            id="plus"
            name="ajout"
            onClick={addItem}
            // value={+}
          >
            Ajouter
          </button>
        </div>

        {/* =============================== Liste avec Numero + Title =  désignation de la tache  + Checkbox ==================*/}
        <div className="">
          <h3> liste des tâches</h3>
          {
            // for todo of todos {
            //   return
            // }
            todos.map((todo, idx) => (
              <div
                key={idx}
                className="mb-6 bg-green-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
             focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 
             dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <div className="flex items-center">
                  <Item numero={todo.num} title={todo.title} />
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                </div>
              </div>
            ))
          }
        </div>

        <div className=""></div>
        {/* ===================partie réseaux sociaux ==========titre + img =========================== */}

        <div className="">
          <h3> Nous suivre ...</h3>
          {reseaux.map((reseau, idx) => (
            <div className="flex items-center" key={idx}>
              <img
                className="rounded-full w-86 h-86"
                src={reseau.image}
                alt="image description"
                id="rsImage"
              ></img>
              {reseau.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
