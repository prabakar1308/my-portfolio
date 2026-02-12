import { personalInfo, getTotalExperience } from '@/data/portfolio';
import { Mail, Phone, MapPin, Award, Download } from 'lucide-react';
import { JSX } from 'react';

export default function Header(): JSX.Element {
  const totalExperience: number = getTotalExperience();

  return (
    <header className="header-wrapper from-cyan-800 via-cyan-700 to-cyan-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold border-4 border-white/20 overflow-hidden">
              <img
                src="/profile.png" // Path to the profile picture in the public folder
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            {personalInfo.name}
          </h1>

          <h2 className="text-xl md:text-2xl text-blue-100 mb-6 font-light">
            {personalInfo.title}
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-sm md:text-base">
            <a
              href={`tel:${personalInfo.contact.phone}`}
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Phone size={16} />
              <span>{personalInfo.contact.phone}</span>
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Mail size={16} />
              <span>{personalInfo.contact.email}</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{personalInfo.contact.location}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="bg-pink-100/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-blue-400/30">
              <Award size={16} className="text-cyan-800" />
              <span className="font-semibold text-cyan-800">
                {totalExperience}+ Years Experience
              </span>
            </div>

            <div className="bg-lime-100/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-green-400/30">
              <span className="font-semibold text-cyan-800">Available for Opportunities</span>
            </div>

            <button className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-white/50 hover:bg-white/20 transition-all">
              <a
                href="/Prabakaran_Arumugam.pdf"
                download="Prabakaran_Arumugam.pdf"
                className="flex items-center gap-2"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </button>
          </div>

          {/* Adding LinkedIn and GitHub links  */}
          <div className="flex justify-center gap-6 my-4">
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764c.965 0 1.75.79 1.75 1.764s-.785 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.065-1.868-3.065-1.868 0-2.154 1.459-2.154 2.967v5.702h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.562 2.841-1.562 3.039 0 3.6 2.001 3.6 4.601v5.594z" />
              </svg>
            </a>

            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.599.111.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118
                3.176.767.84 1.23 1.91 1.23 3.222 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 text-gray-50 fill-current"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </header>
  );
}
