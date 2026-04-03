import {
  CategoriesSection,
  GallerySection,
  LocationSection,
  ParametersSection,
  SponsorsSection,
  TeamSection,
  TestimonialsSection,
  WorkoutsSection,
  WhoWeAreSection,
} from "./_components/landing-sections";
import { MainBanner } from "./_components/main-banner";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <MainBanner />
      <WhoWeAreSection />
      <CategoriesSection />
      <ParametersSection />
      <WorkoutsSection />
      <TeamSection />
      <GallerySection />
      {/* <InstagramSection /> */}
      <TestimonialsSection />
      <SponsorsSection />
      <LocationSection />
    </main>
  );
}
