import { personalInfo } from '@/data/portfolio';
import { JSX } from 'react';

interface FooterProps {}

export default function Footer(props: FooterProps): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400">
              {personalInfo.title}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <a 
              href={`tel:${personalInfo.contact.phone}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {personalInfo.contact.phone}
            </a>
            
            <a 
              href={`mailto:${personalInfo.contact.email}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {personalInfo.contact.email}
            </a>
            
            <span className="text-gray-300">
              {personalInfo.contact.location}
            </span>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 mb-4">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 italic text-sm">
              I do hereby declare that all the above-furnished details are true to the best of my knowledge and belief.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}