import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Front = () => {
  const backgroundStyle = {
    backgroundImage: `url('/back1.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };

  return (
    <div className="text-white" style={backgroundStyle}>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className='mt-28'>
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 5, type: 'spring', stiffness: 50 }}
        >
          <h1 className="text-6xl font-bold mb-4">LEARN WITH US</h1>
        </motion.div>
        
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 5, type: 'spring', stiffness: 50 }}
        >
          <h2 className="text-3xl font-semibold mb-8">GROW WITH US</h2>
        </motion.div>
</div>
        <Link to="/cards">
          <button className="bg-[white] w-[200px]  text-black rounded-md font-medium my-5 mx-auto py-3 mt-8 text-white">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Front;
