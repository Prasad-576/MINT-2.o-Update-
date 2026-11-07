import { useState } from 'react';
import Navbar from '../components/Landing/Navbar';
import Hero from '../components/Landing/Hero';
import LoginModal from '../components/Login/LoginModal';

const LandingPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-teal-primary/10 selection:text-blue-900">
      <Navbar onOpenLogin={() => setIsLoginModalOpen(true)} />
      <main>
        <Hero onOpenLogin={() => setIsLoginModalOpen(true)} />
      </main>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
};

export default LandingPage;
