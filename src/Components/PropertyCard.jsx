import React from "react";

const PropertyCard = () => {
  const properties = [
    {
      id: 1,
      image:
        "https://demo.moxcreative.com/graha/wp-content/uploads/sites/35/2021/05/houses-e1621612276203.jpg",
      location: "Jakarta, Indonesia",
      title: "Jakarta Garden City",
      price: "$81,000",
      details: { beds: 3, baths: 2, area: "352 sqf" },
    },
    {
      id: 2,
      image:
        "https://demo.moxcreative.com/graha/wp-content/uploads/sites/35/2021/05/donau-city-office-buildings-in-vienna-austria-e1621612233964.jpg",
      location: "Vienna, Austria",
      title: "Donau City",
      price: "$135,000",
      details: { beds: 3, baths: 2, area: "352 sqf" },
    },
    {
      id: 3,
      image:
        "https://demo.moxcreative.com/graha/wp-content/uploads/sites/35/2021/05/modern-office-building-facade-e1621612302425.jpg",
      location: "Jakarta, Indonesia",
      title: "Asya Apartement",
      price: "$54,000",
      details: { beds: 3, baths: 2, area: "352 sqf" },
    },
    {
      id: 4,
      image:
        "https://demo.moxcreative.com/graha/wp-content/uploads/sites/35/2021/05/architectural-house-exterior-e1621612326173.jpg",
      location: "Jakarta, Indonesia",
      title: "Golden River Park",
      price: "$145,000",
      details: { beds: 3, baths: 2, area: "352 sqf" },
    },
  ];

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2  max-w-7xl gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white flex flex-col shadow-lg overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={property.image}
              alt={property.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <p className="text-gray-500 text-sm">{property.location}</p>
              <h2 className="text-lg font-semibold text-gray-800">
                {property.title}
              </h2>
              <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                <p>
                  <span className="font-bold">{property.details.beds}</span> Beds
                </p>
                <p>
                  <span className="font-bold">{property.details.baths}</span>{" "}
                  Baths
                </p>
                <p>
                  <span className="font-bold">{property.details.area}</span>
                </p>
              </div>
              <p className="text-lg font-bold text-red-500 mt-4">
                {property.price}
              </p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-red-600">
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;
