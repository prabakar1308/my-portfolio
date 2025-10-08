import { personalInfo } from '@/data/portfolio';
import { JSX } from 'react';

export default function Profile(): JSX.Element {
  return (
    <section id="profile" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Professional <span className="gradient-text">Profile</span>
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-balance">
              {personalInfo.profile}
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">12+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">10+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">3</div>
              <div className="text-sm text-gray-600">Awards</div>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">7</div>
              <div className="text-sm text-gray-600">Spot Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}