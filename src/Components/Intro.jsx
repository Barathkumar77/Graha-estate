import React from 'react';

const Intro = () => {
  return (
    <div
      className="relative pl-48 pt-48 h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://demo.moxcreative.com/graha/wp-content/uploads/sites/35/2021/05/donau-city-office-buildings-in-vienna-austria-e1621612233964.jpg')",
      }}
    >
     
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>


      <div className="relative text-white">
        <p className="text-lg font-semibold uppercase tracking-widest mb-2">Intro</p>
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Let's Talk About Your<br/> Project.</h1>
        <p className="max-w-lg text-sm lg:text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 ">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-red-500">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
