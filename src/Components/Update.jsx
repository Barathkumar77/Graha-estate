import React from "react";

const Update = () => {
  const blogs = [
    {
      id: 1,
      image:
        "https://demo.moxcreative.com/graha/wp-content/uploads/sites/35/2021/05/classic-home-at-sunset-e1621612442557.jpg",
      title: "A classic design that is still in demand today",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      tag: "Design Concept",
    },
    {
      id: 2,
      image:
        "https://demo.moxcreative.com/graha/wp-content/uploads/sites/35/2021/05/dutch-village-scene-with-wooden-houses-and-canal.jpg",
      title:
        "House concept with village nuances and vintage and minimalist style",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      tag: "Design Concept",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 ">
      <h4 className="font-semibold text-center text-red-400">Update</h4>
      <h2 className="text-2xl font-bold text-center mb-8">
        Latest Blog & News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-md shadow">
                {blog.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 hover:text-red-500 cursor-pointer mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Update;






