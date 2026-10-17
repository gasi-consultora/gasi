import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { OrganicDivider } from "@/components/OrganicDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OrganicDivider color="text-secondary" />
        <div className="h-8 bg-secondary sm:h-12" />
        <OrganicDivider color="text-background" flip />
        <Services />
        <OrganicDivider color="text-secondary" />
        <WhyUs />
        <OrganicDivider color="text-background" flip />
        <Testimonials />
        <OrganicDivider color="text-secondary" />
        <ContactForm />
        <OrganicDivider color="text-primary" flip />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
