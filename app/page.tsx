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
        <OrganicDivider color="text-background" variant="arc" flip />
        <Services />
        <OrganicDivider color="text-secondary" variant="ripple" />
        <WhyUs />
        <OrganicDivider color="text-background" variant="wave" flip />
        <Testimonials />
        <OrganicDivider color="text-secondary" variant="arc" />
        <ContactForm />
        <OrganicDivider color="text-primary" variant="ripple" flip />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
