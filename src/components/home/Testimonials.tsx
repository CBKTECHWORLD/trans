import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "consultancy helped me get into my dream university with a full scholarship!",
      name: "Priya K.",
      role: "MS in Computer Science, USA",
      image: "https://randomuser.me/api/portraits/women/65.jpg" // Replace with your image URL
    },
    {
      id: 2,
      quote: "The guidance I received was invaluable for my application process.",
      name: "Rahul M.",
      role: "MBA in UK",
      image: "https://randomuser.me/api/portraits/men/32.jpg" // Replace with your image URL
    },
    {
      id: 3,
      quote: "Excellent support throughout my visa application process.",
      name: "Sneha P.",
      role: "BSc in Canada",
      image: "https://randomuser.me/api/portraits/women/44.jpg" // Replace with your image URL
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-12">Student Success Stories</h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-md mb-4 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${currentIndex === index ? 'bg-pink-500' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}