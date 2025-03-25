import React from 'react';

const VideoTour = () => {
  return (
    <section className="py-20 bg-gray-50" id="video-tour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Take a Virtual Tour</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Experience RWAMPARA SUITES through our virtual tour and discover the comfort that awaits you.
          </p>
        </div>

        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            title="RWAMPARA SUITES Virtual Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoTour;