import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, location, price, imageSrc, onPrimaryClick, primaryLabel }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-48">
        <Image src={imageSrc} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-md font-bold">{price}</p>
          </div>
          <button
            onClick={onPrimaryClick}
            className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition"
            aria-label={primaryLabel}
          >
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
