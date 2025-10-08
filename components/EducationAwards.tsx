import { education, awards, languages, getLanguageProficiencyColor } from '@/data/portfolio';
import { Trophy, GraduationCap, Languages, Award } from 'lucide-react';
import { JSX } from 'react';

interface EducationAwardsProps {}

export default function EducationAwards(props: EducationAwardsProps): JSX.Element {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <div 
                key={index}
                className="space-y-3 p-4 bg-blue-50 rounded-lg border border-blue-100"
              >
                <div className="text-sm text-blue-600 font-semibold">
                  {edu.period}
                </div>
                <div className="text-lg font-bold text-gray-900">
                  {edu.institution}
                </div>
                <div className="text-gray-700">
                  {edu.degree}
                </div>
              </div>
            ))}
          </div>

          {/* Awards & Languages */}
          <div className="space-y-6">
            {/* Awards */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500">
                  <Trophy className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Awards & Recognition</h3>
              </div>
              
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-100"
                  >
                    <div className="flex items-center gap-3">
                      <Award size={20} className="text-yellow-600" />
                      <span className="font-semibold text-gray-900">
                        {award.title}
                      </span>
                    </div>
                    {award.count && (
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                        {award.count}x
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
                  <Languages className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {languages.map((language, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="font-medium text-gray-900">
                      {language.name}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLanguageProficiencyColor(language.proficiency)}`}>
                      {language.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}