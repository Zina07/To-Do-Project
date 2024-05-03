"use client";

import { useState, useRef, useEffect, ChangeEvent } from "react";
import Item from "./Item";
import Image from "next/image";

export interface Todo {
  num: number;
  title: string;
  designation: string;
}

export default function Todo() {
  // A faire
  // 1/ Après ajout, clean l'input
  // 2/ Rajouter un deuxième input "description" qui s'affiche également

  const [currentNewTodoTitle, setCurrentNewTodoTitle] = useState("");
  const [currentNewTodoNum, setCurrentNewTodoNum] = useState(1);
  const [currentNewTodoDesign, setCurrentNewTodoDesign] = useState("");
  // typer useRef en html InputElement (en input)
  const myInput = useRef<HTMLInputElement>(null);
  const myDesignation = useRef<HTMLInputElement>(null);

  const [todos, setTodos] = useState<Todo[]>([
    // { title: "la tache", num: 1 },
    // { title: "acheter des cookies", num: 2 },
    // { title: "partir en courant", num: 3 },
    // { title: "acheter billet de train", num: 4 },
  ]);

  // function myCallback() {}
  // useEffect(
  //   ()=>{},
  //   [todos, myInput]
  // );

  //  ============**********evenement dans l'input rajout d'un titre
  const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log("value", event.target.value);
    // Vérifier que event.target (la cible du onChange) est bien du type input
    if (event.target instanceof HTMLInputElement) {
      setCurrentNewTodoTitle(event.target.value);
    }
  };
  //  ============**********evenement dans l'input rajout d'une désignation
  const changeDesignation = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log("value", event.target.value);
    // Vérifier que event.target (la cible du onChange) est bien du type input
    // Interface est un type architectural supérieur
    // monArgument : Interface<Type>
    // monArgument : Type
    if (event.target instanceof HTMLInputElement) {
      setCurrentNewTodoDesign(event.target.value);
    }
  };

  const addItem = () => {
    // currentNewTodoNum = currentNewTodoNum + 1
    setCurrentNewTodoNum(currentNewTodoNum + 1);
    const newTodo = {
      title: currentNewTodoTitle,
      num: currentNewTodoNum,
      designation: currentNewTodoDesign,
    };
    // setTodos(todos.push(newTodo))
    setTodos([...todos, newTodo]);
    setCurrentNewTodoTitle("");
    setCurrentNewTodoDesign("");

    if (myInput.current) myInput.current.value = "";
    if (myDesignation.current) myDesignation.current.value = "";
    //document.getElementById("task").value="";
  };
  const addDesignation = () => {
    setCurrentNewTodoNum(currentNewTodoNum + 1);
    const newTodo = { designation: currentNewTodoDesign };
    // setTodos(todos.push(newTodo))
    setTodos([...todos, newTodo]);
    setCurrentNewTodoDesign("");
    if (myDesignation.current) myDesignation.current.value = "";
  };
  // ================************bouton delete*************===============
  const deletItem = (index) => {
    console.log(index);
    console.log(todos);
    //const num_to_delete = 1;
    // currentNewTodoNum = currentNewTodoNum + 1
    // setCurrentNewTodoNum(currentNewTodoNum + 1);
    // const newTodo = {
    //   title: currentNewTodoTitle,
    //   num: currentNewTodoNum,
    //   designation: currentNewTodoDesign,
    // };
    // // setTodos(todos.push(newTodo))
    // setTodos([...todos, newTodo]);
    // setCurrentNewTodoTitle("");
    // setCurrentNewTodoDesign("");
  };
  // ================************LES RÉSEAUX************===============
  const reseaux = [
    { title: "Facebook", image: "https://picsum.photos/50" },
    { title: "Twitter", image: "https://placebeard.it/50x50" },
    { title: "LinkedIn", image: "http://placebeard.it/50x50" },
    { title: "Youtube", image: "https://picsum.photos/50" },
  ];
  return (
    <div>
      <div className="">
        <div className="" id="liste">
          <div className="flex w-full mx-10 rounded bg-white">
            <div className="" id="designation">
              <div className="flex w-full mx-10 rounded bg-white"></div>
              <input
                ref={myDesignation}
                className=" m-2 border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none "
                type="search"
                name="search"
                placeholder="Désignation..."
                id="deisgn"
                onChange={changeDesignation}
                // value={tache}
              />
              <input
                ref={myInput}
                className=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none "
                type="search"
                name="search"
                placeholder="Ajoutez une tâche..."
                id="task"
                onChange={changeTitle}
                // value={tache}
              />

              <div className="flex items-start mb-6">
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
            </div>
          </div>
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
                  <Item
                    num={todo.num}
                    title={todo.title}
                    designation={todo.designation}
                  />
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>

                  <button
                    type="button"
                    className="m-2 rounded bg-blue-600 px-4 py-2 text-white"
                    id="efface"
                    name="poubelle"
                    onClick={(e) => deletItem(idx)}
                    // value={+}
                  >
                    <Image
                      src="/poubelle.png"
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

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
  );
}
