import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import InvitationCard from './components/InvitationCard';
import PhotoGallery from './components/PhotoGallery';
import ShareButton from './components/ShareButton';
import Footer from './components/Footer';

function App() {
  // YouTube Live Stream URL - in a real app, this would come from config or CMS
  const youtubeLink = "https://youtube.com/live/example";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HomeSection />
        <InvitationCard />
        <PhotoGallery />
      </main>
      
      <ShareButton url={youtubeLink} />
      <Footer />
    </div>
  );
}

export default App;