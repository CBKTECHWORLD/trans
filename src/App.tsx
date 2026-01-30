import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar'; 
import HomePage from './pages/Home';
import './index.css'
// import WhatsAppButton from './components/common/WhatsAppButton';
import Footer from './components/common/Footer';
import Dashboard from './pages/Dashboard';
import { ApplicationProvider } from './contexts/ApplicationContext';
import Universities from './pages/Universities';
import ContactSection from './pages/ContactSection';
import EventsPage from './pages/EventsPage';
import CVMaker from './pages/CVMaker';
import Travel from './pages/Travel';
import Finance from './pages/Finance';
import Accommodation from './components/home/Accomodation';
import Job from './pages/Job';
import Business from './components/home/Business';
import Flights from './pages/Flights';
import Forex from './pages/Forex';
import About from './pages/About';
import Legal from './pages/Legal';
import GoogleTagManager from './components/GTM';
import StudyUSA from './components/studyabroad/studyusa';
import StudentAmbassador from './pages/StudentAmbassador';
import StudyCanada from './components/studyabroad/studycanada';
import StudyGermany from './components/studyabroad/studygermany';
import LanguageCourses from './pages/LanguageCourses';
import StudyUK from './components/studyabroad/studyuk';

const App: React.FC = () => {
  return (
    <ApplicationProvider>
      <GoogleTagManager />
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/studyuk" element={<Universities />} /> */}
              <Route path="/studyuk" element={<StudyUK />} />
              <Route path="/studyusa" element={<StudyUSA />} />
              <Route path="/studycanada" element={<StudyCanada />} />
              <Route path="/studygermany" element={<StudyGermany />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/cvmaker" element={<CVMaker />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/studentambassador" element={<StudentAmbassador />} />
              
              <Route path="/job" element={<Job />} />
              <Route path="/business" element={<Business />} />
              <Route path="/flight" element={<Flights />} />
              <Route path="/forex" element={<Forex />} />
              <Route path="/about" element={<About />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/languagecourses" element={<LanguageCourses />} />
            </Routes>
          </main>
          {/* <WhatsAppButton /> */}
          <Footer />
        </div>
      </Router>
    </ApplicationProvider>
  );
};

export default App;
