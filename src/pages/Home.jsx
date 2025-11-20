import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";


export const Home = () => {
    return(
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}

        <main>
            <HeroSection />
            <ExperienceSection />
            <SkillsSection />
        </main>
    
    </div>
    ); 
};