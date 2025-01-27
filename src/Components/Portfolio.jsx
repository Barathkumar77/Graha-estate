import React from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      category: "Landscape",
      image:
        "https://demo.moxcreative.com/graha/wp-content/uploads/sites/35/2021/05/modern-designed-garden-e1621612179135.jpg",
      title: "Outdoor Lounge",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      category: "Office Tower",
      image:
        "https://demo.moxcreative.com/graha/wp-content/uploads/sites/35/2021/05/donau-city-office-buildings-in-vienna-austria-1024x682.jpg",
      title: "Donau City",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      category: "Office Tower",
      image:
        "https://demo.moxcreative.com/graha/wp-content/uploads/sites/35/2021/05/detail-of-the-guggenheim-museum-building-in-bilbao-spain-1024x682.jpg",
      title: "Modern Office",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      category: "Luxury Apartments",
      image:
        "https://demo.moxcreative.com/graha/wp-content/uploads/sites/35/2021/05/modern-luxury-apartments-buildings-1024x667.jpg",
      title: "Luxury Living",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 px-4">
          <h3 className="text-orange-500 font-semibold uppercase text-sm tracking-wide">
            Portfolio
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            An awesome project <br />
            has been finished.
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus <br />
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Project Content */}
              <div className="p-5">
                <span className="text-sm text-orange-500 block mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-5 text-sm md:text-base">
                  {project.description}
                </p>
                <button className="bg-black text-white py-2 px-4 rounded hover:bg-red-600 transition-all duration-300">
                  More Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="text-center mt-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            An awesome project <br />
            has been finished.
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus <br />
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-red-600 transition-all duration-300">
            More Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
