import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faChair,
  faHome,
  faWrench,
  faLayerGroup,
  faTrowelBricks
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Property Agent",
    icon: faBuilding,
    description: "Vestibulum imperdiet morbi venenatis blandit egestas torquent id.",
  },
  {
    title: "Interior",
    icon: faChair,
    description: "Vestibulum imperdiet morbi venenatis blandit egestas torquent id.",
  },
  {
    title: "Exterior",
    icon: faHome,
    description: "Vestibulum imperdiet morbi venenatis blandit egestas torquent id.",
  },
  {
    title: "Renovation",
    icon: faWrench,
    description: "Vestibulum imperdiet morbi venenatis blandit egestas torquent id.",
  },
  {
    title: "Planning",
    icon: faLayerGroup,
    description: "Vestibulum imperdiet morbi venenatis blandit egestas torquent id.",
  },
  {
    title: "Building",
    icon: faTrowelBricks,
    description: "Vestibulum imperdiet morbi venenatis blandit egestas torquent id.",
  },
];

const Professional = () => {
  return (
    <div className="bg-gray-100 py-10">
      
      <div className="text-center mb-10 px-4">
        <h3 className="text-orange-500 font-semibold uppercase text-sm tracking-wide">
          What We Offer
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold">
          Professional Service
        </h2>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 lg:px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-8 sm:p-10 lg:p-14 text-center hover:shadow-lg transition-shadow duration-300"
          >
           
            <div className="text-4xl lg:text-5xl text-orange-500 mb-4">
              <FontAwesomeIcon icon={service.icon} />
            </div>
        
            <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
           
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professional;
