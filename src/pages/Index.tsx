import HeroSection from "@/components/HeroSection";
import ServicosSection from "@/components/ServicosSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import ResultsSection from "@/components/ResultsSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import TopSectionsNav from "@/components/TopSectionsNav";

const Index = () => (
  <>
    <TopSectionsNav />
    <main className="pt-16 md:pt-[3.5rem]">
    <HeroSection />
    <ServicosSection />
    <DiferenciaisSection />
    <ResultsSection />
    <DepoimentosSection />
    <CtaSection />
    <Footer />
    </main>
  </>
);

export default Index;
