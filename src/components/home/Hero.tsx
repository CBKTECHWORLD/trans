export default function HeroSection() {
  return (
    // <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20 px-4">
    //   <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <section>
        {/* <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Students going Abroad Made Simple
          </h1>
          <p className="text-xl opacity-90">
            Find the best universities, courses, jobs, rooms, forex, and scholarships tailored for you.
          </p>
         
        </div> */}

        {/* Image */}
<div className="relative md:w-auto">
  <img 
    src="/banner/herobanner1.jpg" 
    alt="Students in abroad" 
    className="rounded-l shadow-2xl border-2 border-white" 
  />
  
  {/* Blinking Arrow */}
  {/* <button
    onClick={() => {
      const nextSection = document.querySelector('#next-section');
      nextSection?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg animate-bounce cursor-pointer transition-all"
    aria-label="Scroll to next section"
  >
    <svg 
      className="w-6 h-6 text-gray-800 animate-pulse" 
      fill="none" 
      strokeWidth="2" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </button> */}
</div>
      {/* </div> */}
    </section>
  );
}