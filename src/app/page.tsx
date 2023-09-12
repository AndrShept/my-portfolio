import { AboutSection } from '@/components/AboutSection';
import { HeroSection } from '@/components/HeroSection';
import { ProjectSection } from '@/components/ProjectSection';

export default function Home() {
  return (
    <main className=' px-12 py-4  mx-auto'>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}
