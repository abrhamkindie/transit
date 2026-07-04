import SectionHero from "@/components/section-hero";
import SectionPartners from "@/components/section-partners";
import SectionServices from "@/components/section-services";
import SectionProcess from "@/components/section-process";
import SectionStats from "@/components/section-stats";
import SectionWhyUs from "@/components/section-why-us";
import SectionCoverage from "@/components/section-coverage";
import SectionTestimonials from "@/components/section-testimonials";
import SectionFaq from "@/components/section-faq";
import SectionCta from "@/components/section-cta";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionPartners />
      <SectionServices />
      <SectionProcess />
      <SectionStats />
      <SectionWhyUs />
      <SectionCoverage />
      <SectionTestimonials />
      <SectionFaq />
      <SectionCta />
    </>
  );
}
