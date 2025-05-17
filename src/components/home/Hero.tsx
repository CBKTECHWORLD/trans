export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Students going Abroad Made Simple
          </h1>
          <p className="text-xl opacity-90">
            Find the best universities, courses, jobs, rooms, forex, and scholarships tailored for you.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search universities or courses..."
              className="px-4 py-3 rounded-lg text-gray-800 flex-grow"/>
            <button className="bg-secondary hover:bg-orange-600 px-6 py-3 rounded-lg font-medium whitespace-nowrap">
              Search
            </button>
          </div> */}
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img 
            src="/banner/A1.jpg" 
            alt="Students in abroad"
            className="rounded-xl shadow-2xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}