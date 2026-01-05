import { getSkillsByCategory, getProficiencyColor } from '@/data/portfolio';
import { Code, Database, Settings } from 'lucide-react';
import { JSX } from 'react';

interface SkillsProps {}

const categoryConfig = {
  frontend: {
    title: 'Frontend Technologies',
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  },
  backend: {
    title: 'Backend Technologies',
    icon: Database,
    color: 'from-green-500 to-emerald-500'
  },
  tools: {
    title: 'Tools & Platforms',
    icon: Settings,
    color: 'from-purple-500 to-pink-500'
  },
  ai: {
    title: 'AI Skills',
    icon: Code, // You can replace this with a more relevant icon if available
    color: 'from-indigo-500 to-purple-500',
  }
} as const;

export default function Skills(props: SkillsProps): JSX.Element {
  const frontendSkills = getSkillsByCategory('frontend');
  const backendSkills = getSkillsByCategory('backend');
  const toolsSkills = getSkillsByCategory('tools');

  const aiSkills = [
    { name: 'Langchain', proficiency: 90 },
    { name: 'Langgraph', proficiency: 85 },
    { name: 'MCP', proficiency: 80 },
    { name: 'RAG', proficiency: 75 },
  ];

  const skillCategories = [
    { type: 'frontend' as const, skills: frontendSkills },
    { type: 'backend' as const, skills: backendSkills },
    { type: 'tools' as const, skills: toolsSkills },
    { type: 'ai' as const, skills: aiSkills },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const config = categoryConfig[category.type];
            const IconComponent = config.icon;
            
            return (
              <div
                key={category.type}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 card-hover border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${config.color}`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {config.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700 text-sm md:text-base">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600 font-medium">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className={`skill-progress ${getProficiencyColor(skill.proficiency)}`}
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}