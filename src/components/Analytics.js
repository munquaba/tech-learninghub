// import React from 'react';
// import Laptop from '../assets/laptop.jpg';

// const LearningSection = () => {
//   return (
//     <div className="bg-gray-100 py-16 px-4">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//         <div className="md:order-2">
//           <img className="w-full rounded-md" src={Laptop} alt="Laptop" />
//         </div>
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">
//             Learn from Experts
//           </h1>
//           <p className="text-gray-600 mb-4">
//             Welcome to our learning platform, where knowledge meets
//             opportunity. Our expert instructors provide you with the skills and
//             insights you need to succeed in your field.
//           </p>
//           <p className="text-gray-600 mb-4">
//             Whether you're a beginner or an experienced professional, our
//             courses and resources are designed to help you reach your goals.
//           </p>
          

//   <button className="bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
//     Get Started
//   </button>
  


//         </div>
//       </div>
//     </div>
//   );
// };

// export default LearningSection;
import React from 'react';
import Laptop from '../assets/laptop.jpg';
import { Link } from 'react-router-dom';

const LearningSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="md:order-2">
          <img className="w-full rounded-md" src={Laptop} alt="Laptop" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Articles
          </h1>
          <p className="text-gray-600 mb-4">
            Welcome to our articles section, where knowledge meets
            opportunity. Our expert contributors provide you with the insights and information you need to succeed in your field.
          </p>
          <p className="text-gray-600 mb-4">
            Whether you're seeking beginner guides or advanced strategies, our articles are tailored to help you achieve your goals.
          </p>

<Link to="/articles">
          <button className="bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
            Get Articles
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default LearningSection;

