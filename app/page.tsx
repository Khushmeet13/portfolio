import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import AboutPreview from '@/components/AboutPreview';
import ContactCTA from '@/components/ContactCTA';
import WorkExperience from '@/components/WorkExperience';

export default function Home() {
  return (
    <>
      <Navbar />

      <main >
        <Hero />
        <Skills />
        <WorkExperience />
        <Projects />
        <AboutPreview />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
