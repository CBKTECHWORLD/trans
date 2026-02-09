import React from 'react';
import { Users, Briefcase, Home, Handshake, Mail, ExternalLink, Sparkles } from 'lucide-react';

// ============================================
// CONFIGURATION - EASY TO UPDATE
// ============================================

interface JobPosting {
  id: string;
  title: string;
  description: string;
  location?: string;
  isActive: boolean;
  applicationMethod: {
    type: 'google-form' | 'email' | 'both';
    formUrl?: string;
    email?: string;
  };
}

const jobCategories = {
  studentAmbassador: {
    title: 'Student Ambassador',
    icon: Users,
    jobs: [
      {
        id: 'sa-1',
        title: 'Student Ambassador Program',
        description: 'Represent Transitley on your campus, connect students with opportunities, and earn while you learn.',
        location: 'Remote',
        isActive: true,
        applicationMethod: {
          type: 'google-form',
          formUrl: 'https://forms.gle/PcHHAh4W9o6QUpEY8'
        }
      }
    ] as JobPosting[]
  },
  
  fullTime: {
    title: 'Full-Time',
    icon: Briefcase,
    jobs: [
      // {
      //   id: 'ft-1',
      //   title: 'Marketing Manager',
      //   description: 'Lead marketing initiatives and grow our brand',
      //   location: 'Mumbai',
      //   isActive: true,
      //   applicationMethod: {
      //     type: 'email',
      //     email: 'info@transitley.com'
      //   }
      // }
    ] as JobPosting[]
  },
  
  hybrid: {
    title: 'Hybrid',
    icon: Home,
    jobs: [
      // Add hybrid jobs here
    ] as JobPosting[]
  },
  
  referralPartner: {
    title: 'Referral Partner',
    icon: Handshake,
    jobs: [
      // Add referral partner opportunities here
    ] as JobPosting[]
  }
};

// ============================================
// COMPONENTS
// ============================================

const JobCard: React.FC<{ job: JobPosting }> = ({ job }) => {
  return (
    <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-400 transform hover:-translate-y-2">
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
        {job.title}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
      
      {job.location && (
        <p className="text-sm text-green-600 font-medium mb-4">📍 {job.location}</p>
      )}
      
      <div className="flex flex-wrap gap-3 mt-4">
        {job.applicationMethod.type === 'google-form' && job.applicationMethod.formUrl && (
          <a
            href={job.applicationMethod.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Apply Now
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        
        {(job.applicationMethod.type === 'email' || job.applicationMethod.type === 'both') && (
          <a
            href={`mailto:${job.applicationMethod.email || 'info@transitley.com'}?subject=Application for ${job.title}`}
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <Mail className="w-4 h-4" />
            Email Resume
          </a>
        )}
      </div>
    </div>
  );
};

const JobCategory: React.FC<{ 
  title: string; 
  icon: React.ElementType; 
  jobs: JobPosting[];
  index: number;
}> = ({ title, icon: Icon, jobs, index }) => {
  const activeJobs = jobs.filter(job => job.isActive);
  
  return (
    <div 
      className="mb-12 opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      
      {activeJobs.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {activeJobs.map((job, idx) => (
            <div 
              key={job.id}
              className="opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${(index * 0.1) + (idx * 0.1)}s`, animationFillMode: 'forwards' }}
            >
              <JobCard job={job} />
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center border-2 border-dashed border-gray-300">
          <Sparkles className="w-10 h-10 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600 font-medium">No openings currently</p>
          <p className="text-sm text-gray-500 mt-1">Check back soon!</p>
        </div>
      )}
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="animate-float inline-block mb-4">
            <Briefcase className="w-16 h-16 text-white/90 mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight animate-fadeInUp">
            Join Our Team
          </h1>
          <p className="text-xl text-green-100 font-light animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0 }}>
            Shape the future 
          </p>
        </div>
      </section>

      {/* Job Categories */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {Object.entries(jobCategories).map(([key, category], index) => (
          <JobCategory
            key={key}
            title={category.title}
            icon={category.icon}
            jobs={category.jobs}
            index={index}
          />
        ))}
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Don't See a Perfect Fit?</h2>
          <p className="text-lg text-green-100 mb-6">
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:info@transitley.com?subject=General Application"
            className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;