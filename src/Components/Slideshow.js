import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    
  },
  {
    
  },
  {
    
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container  border-t-2 ">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index} className='bg-cover w-screen h-[50vh] md:h-[500px] lg:h-[500px] flex items-center justify-center mx-auto'>
            
            <div className="bg-cover w-1/2 h-[50vh] md:h-[500px] lg:h-[500px] flex items-center justify-center mx-auto" style={{ backgroundImage: `src(${slideImage.url})` }}>
                
                <img src='/s.jpeg' alt='Joker Image' style={{ maxWidth: '100%', maxHeight: '400px', height: 'auto' }} />
            </div>
            <div className="bg-cover w-1/2 h-[50vh] md:h-[500px] lg:h-[500px] flex items-center justify-center mx-auto" style={{ backgroundImage: `src(${slideImage.url})` }}>
                <img src='/fight.jpeg' alt='Joker Image' style={{ maxWidth: '100%', maxHeight: '400px', height: 'auto' }} />
            </div>
            <div className="bg-cover w-1/2 h-[50vh] md:h-[500px] lg:h-[500px] flex items-center justify-center mx-auto" style={{ backgroundImage: `src(${slideImage.url})` }}>
                <img src='/snatch.jpeg' alt='Joker Image' style={{ maxWidth: '100%', maxHeight: '400px', height: 'auto' }} />
            </div>
            
            <div className="bg-cover w-1/2 h-[50vh] md:h-[500px] lg:h-[500px] flex items-center justify-center mx-auto" style={{ backgroundImage: `src(${slideImage.url})` }}>
                <img src='/god.jpeg' alt='Joker Image' style={{ maxWidth: '100%', maxHeight: '400px', height: 'auto' }} />
            </div>
            <div className="bg-cover w-1/2 h-[50vh] md:h-[500px] lg:h-[500px] flex items-center justify-center mx-auto" style={{ backgroundImage: `src(${slideImage.url})` }}>
                <img src='/a.jpeg' alt='Joker Image' style={{ maxWidth: '100%', maxHeight: '400px', height: 'auto' }} />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slideshow;
