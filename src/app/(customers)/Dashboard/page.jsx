export default function AdminHomePage() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 font-sans">
        Welcome Back, Admin!
      </h2>
      <p className="text-gray-600 mb-6 font-sans">
        Here’s a quick overview of your system performance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Total Reports", value: "256" },
          { title: "Blog Posts", value: "14" },
          { title: "Contact Messages", value: "89" },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-md hover:scale-[1.02] transition-transform duration-200 font-sans"
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-3xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
