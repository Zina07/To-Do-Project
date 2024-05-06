"use client";

import { useEffect, useState } from "react";
type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export default function Photos() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  //   Au mount, c'est à dire à la naissance du composant, va chercher les données
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        setPhotos(json.slice(0, 5));
      });
  }, []);

  return (
    <div className="">
      <h3> Les photos</h3>

      {photos.map((photo, idx) => (
        <ul
          key={idx}
          className="max-w-md divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-1 min-w-0">
              {photo.title}
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                 
                  <img
                    className="rounded-full w-36 h-36"
                    src={photo.url}
                    alt="image description"
                    // id={photo.thumbnailUrl}
                  ></img>
                  {/* {photo.url} {photo.thumbnailUrl} */}
                </p>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}
