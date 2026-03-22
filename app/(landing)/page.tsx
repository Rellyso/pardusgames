import {
  CategoriesSection,
  GallerySection,
  LocationSection,
  ParametersSection,
  TeamSection,
  TestimonialsSection,
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
      <TeamSection />
      {/* <GallerySection /> */}``
      {/* <InstagramSection /> */}
      <TestimonialsSection />
      {/* <SponsorsSection /> */}
      <LocationSection />
    </main>
  );
}
