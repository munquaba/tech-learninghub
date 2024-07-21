import React from 'react';
import { Link } from 'react-router-dom';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  const cardsData = [
    {
      title: 'Web Development',
      image: Single,
      description: 'Master the art of web development with our comprehensive courses.',
      route: '/webdevelopment',
    },
    {
      title: 'Machine Learning',
      image: Double,
      description: 'Dive into the world of machine learning and AI with hands-on projects.',
      route: '/machinelearning',
    },
    {
      title: 'App Development',
      image: Triple,
      description: 'Build mobile and web apps with our app development courses and tutorials.',
      route: '/appdevelopment',
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={card.image} alt={card.title} />
            <h2 className="text-2xl font-bold text-center py-8">{card.title}</h2>

            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">{card.description}</p>
            </div>
          
            {/* Link to navigate to each roadmap page */}
            <Link to={card.route} className="block w-full text-center">
              <button className="bg-green-500 text-white rounded-md font-medium my-2 mx-auto px-6 py-3">
                View Roadmap
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
