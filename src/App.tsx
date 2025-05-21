import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar'; 
import HomePage from './pages/Home';
import './index.css'
import WhatsAppButton from './components/common/WhatsAppButton';
import Footer from './components/common/Footer';
import Dashboard from './pages/Dashboard';
import { ApplicationProvider } from './contexts/ApplicationContext';
import Universities from './pages/Universities';
import ContactSection from './pages/ContactSection';
import EventsPage from './pages/EventsPage';
import CVMaker from './pages/CVMaker';
import Travel from './pages/Travel';
import Finance from './pages/Finance';


const App: React.FC = () => {
  return (
    <ApplicationProvider>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/cvmaker" element={<CVMaker />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/finance" element={<Finance />} />
        </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </ApplicationProvider>
  );
};

export default App;