import AboutSection from "./components/about_section/AboutSection";
import ContactSection from "./components/contact_section/ContactSection";
import HeroSection from "./components/hero_section/HeroSection";
import ServicesSection from "./components/services_section/ServicesSection";
import TestimonialSection from "./components/testimonial_section/TestimonialSection";

export default function Home() {
    return (
        <div className="max-w-screen-2xl m-auto">
            <main className="">
                <HeroSection />

                <AboutSection />

                <TestimonialSection />

                <ServicesSection />

                <ContactSection />
            </main>
        </div>
    );
}