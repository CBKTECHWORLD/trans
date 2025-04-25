export default function FeaturesSection() {
    const features = [
      {
        icon: '🎓',
        title: 'University Matching',
        description: 'Find perfect universities based on your profile'
      },
      {
        icon: '💰',
        title: 'Scholarship Finder',
        description: 'Discover scholarships you qualify for'
      },
      
      {
        icon: '📝',
        title: 'Application Help',
        description: 'Get expert guidance for your applications'
      }
    ];
  
    return (
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-500 mb-12">How We Help You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }