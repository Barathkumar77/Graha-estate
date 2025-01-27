import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faReceipt,
  faFileFragment,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Buy Properties",
    icon: faBuilding,
    description:
      "Vestibulum imperdiet morbi venenatis blandit egestas torquent id.",
  },
  {
    title: "Sell Properties",
    icon: faReceipt,
    description:
      "Vestibulum imperdiet morbi venenatis blandit egestas torquent id.",
  },
  {
    title: "Rent Properties",
    icon: faFileFragment,
    description:
      "Vestibulum imperdiet morbi venenatis blandit egestas torquent id.",
  },
];

const Propertyservice = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h3 className="text-orange-500 font-semibold uppercase text-sm tracking-wide mb-4">
          Property Service
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          We Help You Get an Excellent Home.
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-8 lg:p-12 text-center hover:shadow-lg transition-shadow duration-300"
          >
           
            <div className="text-5xl text-orange-500 mb-6">
              <FontAwesomeIcon icon={service.icon} />
            </div>
           
            <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
            
            <p className="text-gray-600 text-sm md:text-base">
              {service.description}
            </p>
            
            <button className="bg-black text-white py-2 px-6 mt-5 rounded hover:bg-red-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Propertyservice;
