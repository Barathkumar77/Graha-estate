
import React from "react";

const Passion = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 flex max-md:flex-col ">
      <div className="max-w-6xl mx-auto text-center">
      <h4 className='text-red-400 text-[20px] font-light'>WHY CHOOSE US</h4>
      <h1 className='text-[40px] font-bold'> Passion And <br/> Dedication Are<br/> Keys To Success.</h1>

            <h6 className='text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit 
            tellus,  ullamcorper mattis, pulvinar dapibus leo.</h6>
           <button className="h-11  px-7 my-10 font-semibold  bg-black text-white hover:bg-red-500">Learn More</button>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {[
          {
            title: "Creative",
            description:
              "Vestibulum imperdiet morbi venenatis blandit egestas torquent id",
            icon: "💡", 
          },
          {
            title: "Passionate",
            description:
              "Vestibulum imperdiet morbi venenatis blandit egestas torquent id",
            icon: "🔥", 
          },
          {
            title: "Experience",
            description:
              "Vestibulum imperdiet morbi venenatis blandit egestas torquent id",
            icon: "⚙️", 
          },
          {
            title: "24/7 Support",
            description:
              "Vestibulum imperdiet morbi venenatis blandit egestas torquent id",
            icon: "📞", 
          },
        ].map((item, index) => (
          <div
            key={index}
            className="text-center     rounded-lg"
          >
            <div className="text-4xl text-gray-800 mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Passion;
