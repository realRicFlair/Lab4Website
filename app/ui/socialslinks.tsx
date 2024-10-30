// SocialLinks.tsx

import React from 'react';
import { FaGithub, FaYoutube, FaDiscord } from 'react-icons/fa';

const SocialLinks: React.FC = () => {
  const links = [
    {
      href: 'https://github.com/realRicFlair',
      icon: <FaGithub />,
      label: 'GitHub',
    },
    {
      href: 'https://www.youtube.com/@honkhonk8009',
      icon: <FaYoutube />,
      label: 'YouTube',
    },
    {
      href: 'https://discord.gg/8jHJhTTv',
      icon: <FaDiscord />,
      label: 'Discord',
    },
  ];

  return (
    <div className="flex space-x-4 items-center mt-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
          aria-label={link.label}
        >
          <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            {link.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
