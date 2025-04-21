import React from 'react';
import { Calendar, Clock, MapPin, Heart, Music } from 'lucide-react';
import "./index.css"

const eventData = {
  brideAndGroom: "Sarah & Michael",
  date: "June 15, 2025",
  time: "2:00 PM EST",
  venue: "St. Patrick's Cathedral",
  address: "5th Avenue, New York, NY",
  description: "We joyfully invite you to join us virtually as we celebrate our love and commitment. Share in the magic of our special day through our live stream ceremony.",
  youtubeLink: "https://youtube.com/live/example",
  parents: {
    bride: {
      father: "Mr. James Wilson",
      mother: "Mrs. Emily Wilson"
    },
    groom: {
      father: "Mr. Robert Thompson",
      mother: "Mrs. Sarah Thompson"
    }
  }
};

const InvitationCard: React.FC = () => {
  return (
    <section id="invitation" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-white to-rose-50">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:40px_40px] opacity-5"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Traditional Wedding Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-fade-up border border-rose-100 mb-16">
          <div className="relative p-8 md:p-12 bg-[url('https://images.pexels.com/photos/5560911/pexels-photo-5560911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center">
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-rose-600 rounded-full mb-8">
                  <Heart size={40} className="text-white" />
                </div>
                
                <div className="mb-8 font-serif">
                  <p className="text-rose-600 text-lg mb-4">Together with their families</p>
                  <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-serif leading-tight">
                    {eventData.brideAndGroom}
                  </h2>
                  <p className="text-2xl text-gray-700">Request the honor of your virtual presence</p>
                  <p className="text-xl text-gray-700 mt-2">at their wedding celebration</p>
                </div>

                <div className="space-y-2 mb-8 font-serif">
                  <p className="text-gray-700">
                    <span className="font-semibold">Bride's Parents:</span><br />
                    {eventData.parents.bride.father} & {eventData.parents.bride.mother}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Groom's Parents:</span><br />
                    {eventData.parents.groom.father} & {eventData.parents.groom.mother}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-rose-50/50 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                <p className="text-gray-900 font-medium text-center text-lg">{eventData.date}</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300">
                <Clock className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                <p className="text-gray-900 font-medium text-center text-lg">{eventData.time}</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                <p className="text-gray-900 font-medium text-center text-lg">{eventData.venue}</p>
                <p className="text-sm text-gray-600 text-center mt-1">{eventData.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={eventData.youtubeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-rose-600 text-white text-lg font-medium rounded-full hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Music className="w-5 h-5 mr-2 animate-pulse" />
                Join Live Stream
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationCard;