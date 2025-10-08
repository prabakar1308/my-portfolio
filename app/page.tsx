import Header from '@/components/Header';
import Profile from '@/components/Profile';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import EducationAwards from '@/components/EducationAwards';
import Footer from '@/components/Footer';
import { JSX } from 'react';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen">
      <Header />
      <Profile />
      <WorkExperience />
      <Skills />
      <EducationAwards />
      <Footer />
    </main>
  );
}