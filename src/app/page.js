import AboutSection from "./components/about_section/AboutSection";
import HeroSection from "./components/hero_section/HeroSection";
import TestimonialSection from "./components/testimonial_section/TestimonialSection";

export default function Home() {
    return (
        <div className="max-w-screen-2xl m-auto">
            <main className="">
                <HeroSection />

                <AboutSection />

                <TestimonialSection />
            </main>
        </div>
    );
}