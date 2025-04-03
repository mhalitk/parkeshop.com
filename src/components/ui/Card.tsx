import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  href: string;
  tags?: string[];
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, href, tags }) => {
  return (
    <Link href={href}>
      <div className="bg-neutral-light rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {imageUrl && (
          <div className="h-48 relative">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-accent-green mb-2">{title}</h3>
          <p className="text-neutral-dark mb-4">{description}</p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-accent-amber text-primary-dark text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card; 