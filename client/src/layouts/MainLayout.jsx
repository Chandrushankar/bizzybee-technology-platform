import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VoiceAI from '../components/VoiceAI';
import SocialSidebar from '../components/SocialSidebar';
import ScrollProgress from '../components/ScrollProgress';


const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <SocialSidebar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <VoiceAI />
    </div>

  );
};

export default MainLayout;
