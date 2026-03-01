import Hero from "./_ui/Hero";
import Overview from "./_ui/Overview";
import TechStack from "./_ui/TechStack";
import VisualShowcase from "./_ui/VisualShowcase";

export default function MemMoviesPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-32">
            <Hero />
            <Overview />
            <TechStack />
            <VisualShowcase />

            <div className="mt-20 pt-10 border-t border-border/40 text-center">
                <p className="text-muted-foreground text-sm">
                    Interested in more? Check out my other{" "}
                    <a href="/#work" className="text-primary hover:underline underline-offset-4">
                        featured projects
                    </a>.
                </p>
            </div>
        </div>
    );
}
