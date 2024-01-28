import { AboutSection } from '@/components/AboutSection';
import { EmailSection } from '@/components/ContactSection';
import { HeroSection } from '@/components/HeroSection';
import { ProjectSection } from '@/components/ProjectSection';

export default function Home() {
  return (
    <main className=" mx-auto max-w-[1400px]  px-12 py-4 ">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <EmailSection />
    </main>
  );
}
