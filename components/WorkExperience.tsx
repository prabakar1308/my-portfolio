import { workExperience } from '@/data/portfolio';
import { Calendar, MapPin, Code, Users } from 'lucide-react';
import { JSX } from 'react';

interface WorkExperienceProps {}

export default function WorkExperience(props: WorkExperienceProps): JSX.Element {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="space-y-8 max-w-6xl mx-auto">
          {workExperience.map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 card-hover border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {exp.position}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <div className="flex items-center gap-2 text-blue-600 font-semibold">
                      <Code size={18} />
                      <span>{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed border-l-4 border-blue-500 pl-4 bg-blue-50 py-2 rounded-r">
                {exp.projectDetails}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users size={18} />
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {exp.roles.map((role, roleIndex) => (
                    <li 
                      key={roleIndex} 
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-blue-500 mt-1.5 flex-shrink-0">▸</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}