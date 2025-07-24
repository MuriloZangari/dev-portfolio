import AnimatedText from "../components/ui/AnimatedText";
import ProjectCard from "../components/ui/ProjectCard";

export default function Projects() {
    return (
        <div className="relative w-full max-w-[720px] mx-auto py-2">
        <AnimatedText as="div" className="mb-8" delay={0.1}>
            <h1 className="text-3xl font-bold">Projects</h1>
        </AnimatedText>
        <AnimatedText as="div" className="mb-8" delay={0.2}>
            <p>Here you can showcase your projects.</p>
        </AnimatedText>
        <ProjectCard
            image="/project-image.jpg"
            title="Sample Project"
            subtitle="A brief description of the project."
            link="https://example.com"
            
        />
        <ProjectCard
            image="/project-image2.jpg"
            title="Another Project"
            subtitle="Another brief description."
            link="https://example.com"
            github="https://github.com/example/another-project"
        />
    </div>
}
    