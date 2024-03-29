import React from "react";

function TopButton({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "New York",
    },
    {
      id: 2,
      title: "Los Angeles",
    },
    {
      id: 3,
      title: "Chicago",
    },
    {
      id: 4,
      title: "Houston",
    },
    {
      id: 5,
      title: "Miami",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6 top-cities">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
