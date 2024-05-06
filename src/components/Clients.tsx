"use client";

import { useEffect, useState } from "react";
type Client = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: String;
    city: string;
    zipcode: string;
    geo: {
      lat: String;
      lng: String;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
export default function Clients() {
  const [clients, setClients] = useState<Client[]>([]);

  //   Au mount, c'est à dire à la naissance du composant, va chercher les données
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setClients(json.slice(0, 5));
      });
  }, []);

  return (
    <div className="">
      <h3> Clients</h3>

      {clients.map((client, idx) => (
        <ul
          key={idx}
          className="max-w-md divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {client.name}
                  {client.address.street} {client.address.city}
                </p>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}
