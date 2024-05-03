"use client";

import { useState } from "react";

export default function Team() {
  const [teammates, setTeamates] = useState([
    {
      image: "https://picsum.photos/50",
      name: "Zina",
      gender: "f",
      country: "FR",
      email: "zina@gmail.com",
    },
    {
      image: "https://placebeard.it/50x50",
      name: "Sofian",
      gender: "h",
      country: "UK",
      email: "NA",
    },
    {
      image: "https://placebeard.it/50x50",
      name: "Isabelle",
      gender: "f",
      country: "UK",
      email: "isabelle@gg.com",
    },
    {
      image: "https://placebeard.it/50x50",
      name: "Warda",
      gender: "f",
      country: "DE",
      email: "warda@gg.com",
    },
  ]);

  return (
    <div className="">
      <h3> La Dream Team ...</h3>

      {teammates.map((teammate, i) => (
        <ul
          key={i}
          className="max-w-md divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src={teammate.image}
                  alt=""
                ></img>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {teammate.name}
                </p>
                {/* {
                  if (teammate.gender === "f") {
                    return ...
                  } else {
                    return ...
                  }
                } */}
                {teammate.gender === "f" ? (
                  <p className="text-sm truncate text-yellow-500">
                    {teammate.gender}
                  </p>
                ) : (
                  <p className="text-sm  truncate  text-green-500">
                    {teammate.gender}
                  </p>
                )}

                {/* If dreapeau == FR => met le drapeau FR */}
                {/* If dreapeau == UK => met le drapeau UK */}
                {/* If dreapeau == ALL => met le drapeau ALL */}
                {teammate.country == "FR" && <div>🇫🇷</div>}
                {teammate.country == "UK" && <div>🏴󠁧󠁢󠁥󠁮󠁧󠁿</div>}

                {/* {
                  if (teammate.gender === "f") {
                    return ...
                  } else {
                    return ...
                  }
                } */}

                {teammate.email !== "NA" ? (
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {teammate.email}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {""}
                  </p>
                )}
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {teammate.email !== "NA" ? teammate.email : ""}
                </p>
                {/* {teammate.email === "isabelle@gg.com" ? (
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {teammate.email}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {""}
                  </p>
                )}

                {teammate.email !== "NA" ? (
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {""}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {""}
                  </p>
                )}
                {teammate.email === "warda@gg.com" ? (
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {teammate.email}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {""}
                  </p>
                )} */}
              </div>
            </div>
          </li>
        </ul>
      ))}

      {/* <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
   <li className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> </img>
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
               Neil Sims
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $320
         </div>
      </div>
   </li>
   <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image"> </img>
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
               Bonnie Green
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $3467
         </div>
      </div>
   </li>
   <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image"></img>
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
               Michael Gough
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $67
         </div>
      </div>
   </li>
   <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image"> </img>
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
               Thomas Lean
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $2367
         </div>
      </div>
   </li>
   <li className="pt-3 pb-0 sm:pt-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Neil image"></img>
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
               Lana Byrd
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $367
         </div>
      </div>
   </li>
</ul> */}
    </div>
  );
}
