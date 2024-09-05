import AboutSection from "./components/about_section/AboutSection";
import HeroSection from "./components/hero_section/HeroSection";

export default function Home() {
    return (
        <div className="max-w-screen-2xl m-auto">
            <main className="">
                <HeroSection />

                <AboutSection />
            </main>
        </div>
    );
}