import ExpandableCard from "../ui/ExpandableCard";

export default function About() {
  return (
    <ExpandableCard title="Professional Summary">
      <p className="text-justify text-sm md:text-base" style={{ textIndent: "2em" }}>
      I am a versatile software engineer with a PhD in Computer Science,
      specializing in web development and machine learning applications. I
      have a strong foundation in both front-end and back-end technologies,
      and I am passionate about building efficient and scalable applications.
      </p>
      <p className="text-justify text-sm md:text-base" style={{ textIndent: "2em" }}>
      Whether I&apos;m building back-end systems, managing database and infrastructure, crafting intuitive
      front-end interfaces, or developing Machine Learning applications, I
      bring a problem-solving mindset, creativity, and analytical thinking to every project.
      </p>
      <p className="text-justify text-sm md:text-base" style={{ textIndent: "2em" }}>
      I am always eager to learn new technologies and improve my skills, and I
      thrive in collaborative environments where I can contribute to
      innovative solutions.
      </p>
    </ExpandableCard>
  );
}
