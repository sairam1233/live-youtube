import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import InvitationCard from './components/InvitationCard';
import PhotoGallery from './components/PhotoGallery';
import ShareButton from './components/ShareButton';
import Footer from './components/Footer';

function App() {
  // YouTube Live Stream URL - in a real app, this would come from config or CMS
  const youtubeLink = "https://live-youtube-six.vercel.app/";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HomeSection />
        <InvitationCard />
        <PhotoGallery />
      </main>
      
      <ShareButton 
        url={youtubeLink} 
        text="||Join us live for the Dhoti Ceremony of Ch. Bhargava Nandan & Ch. Thaman Sandesh! Don’t miss it! 🎉"/>
      <Footer/>
    </div>
  );
}

export default App;