import React from 'react';

export default function Productcategory() {
  const categories = [
    {
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      title: "Vehicle Name.1",
      bgGradient: "from-rose-50 to-pink-50"
    },
    {
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      title: "Vehicle Name.2",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172",
      title: "Vehicle Name.3",
      bgGradient: "from-purple-50 to-violet-50"
    },
    {
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      title: "Vehicle Name.4",
      bgGradient: "from-amber-50 to-orange-50"
    },
    {
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
      title: "Vehicle Name.5",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      image: "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
      title: "Vehicle Name.6",
      bgGradient: "from-indigo-50 to-blue-50"
    }
  ];

  return (
    <div className="py-7 px-6 sm:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 font-serif">Top Categories</h2>
        <p className="text-black text-sm sm:text-base font-serif ">Discover amazing deals across our curated collections</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 sm:gap-6 lg:gap-8">
        {categories.map((category, index) => (
          <div 
            key={index}
            className={`group bg-gradient-to-br ${category.bgGradient} p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2`}
          >
            <div className="aspect-square rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-white shadow-md group-hover:ring-offset-2 group-hover:ring-offset-gray-100 transition-all duration-300">
              <img 
                src={category.image} 
                alt={category.title}
                className="h-full w-full object-cover object-top group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="text-center">
              <h4 className="text-slate-900 text-sm sm:text-base font-bold group-hover:text-rose-600 transition-colors duration-300">
                {category.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}