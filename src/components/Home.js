import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

const Home = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();

  const backgroundStyle = {
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
    backgroundPosition: `${cursorPosition.x}px ${cursorPosition.y}px`, // Set background position based on cursor position
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-start justify-center pt-16 px-8 sm:px-16">
      <div className="absolute inset-0 bg-cover bg-center" style={backgroundStyle}></div>
      <div className="z-10 flex flex-col sm:flex-row items-center text-left text-purple-700 text-xl md:text-2xl lg:text-3xl whitespace-nowrap mt-16">
        <div className="mb-8 sm:mb-0 sm:mr-8">
          <div className="text-4xl sm:text-6xl lg:text-8xl font-bold">
            <span className="typing text-transparent bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text">Hallo!</span>
          </div>
          <div className="mt-4 text-base sm:text-lg md:text-xl">Saya M. Riduan</div>
          <div className="mt-4 text-base sm:text-lg md:text-xl">Ayo mulai sekarang!</div>
          <div className="mt-8">
            <Link to="/about">
              <button className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
                Explore
              </button>
            </Link>
          </div>
        </div>
        <RocketLaunchIcon className="h-40 w-40 sm:h-56 sm:w-56 text-purple-700 animate-bounce" />
      </div>
      <div className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 text-center font-roboto-mono time-date">
        <div className="mb-2 sm:mb-4">{formattedDate}</div>
        <div>{formattedTime}</div>
      </div>
    </div>
  );
};

export default Home;
