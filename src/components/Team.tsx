"use client";

export default function Team() {
  const teammates = [
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
  ];

  return (
    <div className="">
      <h3> La Dream Team ...</h3>

      {teammates.map((teammate) => (
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
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

                {teammate.email === "zina@gmail.com" ? (
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {teammate.email}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {""}
                  </p>
                )}
                {teammate.email === "isabelle@gg.com" ? (
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {teammate.email}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {""}
                  </p>
                )}

                {teammate.email === "NA" ? (
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
                )}
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}
