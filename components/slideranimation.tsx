import React from "react";
import Image from "next/image";
import "./style.css";
import Silder1 from '../public/images/Silder1.png';
import Silder2 from '../public/images/Silder2.png';
import Silder3 from '../public/images/Silder3.png';
import Silder4 from '../public/images/Silder4.png';
import Silder5 from '../public/images/Silder5.png';
import Silder6 from '../public/images/Silder6.png';
import Silder7 from '../public/images/Silder7.png';

const SliderAnimation: React.FC = () => {
  const AvatarImages = [
    Silder1, Silder2, Silder3, Silder4, Silder5, Silder6, Silder7
  ];

  return (
    <div className="banner w-screen mb-[-300px]">
      <div className="slider" style={{ '--quantity': '7' } as React.CSSProperties}>
        {AvatarImages.map((image, i) => (
          <div 
            className="item pb-4" 
            key={i} 
            style={{ '--position': `${i + 1}` } as React.CSSProperties}
          >
            <Image className="rounded-full border-4 border-amber-900" src={image} alt={`avatar ${i + 1}`} width={200} height={200} />
          </div>
        ))}
      </div>
      <div className="content">
        <div className="model"></div>
      </div>
    </div>
  );
};

export default SliderAnimation;
