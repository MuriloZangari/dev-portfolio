import ExpandableCard from "../ui/ExpandableCard";

export default function Certifications() {
  return (
    <ExpandableCard title="Certifications">
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Google Advanced Data Analytics Professional Certificate | Coursera 2024 |{" "}
          <a
            href="https://coursera.org/share/a80efe79d0a62a327077949d46276bce"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Certificate
          </a>
        </li>
        <li>
          Google Data Analytics Professional Certificate | Coursera  2024 |{" "}
          <a
            href="https://coursera.org/share/e85e45cb07d33b7b51c0fb401d6c9db4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Certificate
          </a>
        </li>
        <li>
          Microsoft Power BI for Business Intelligence and Data Science | Data Science Academy 2024 |{" "}
          <a
            href="https://drive.google.com/file/d/1ZIkxPQOg0y64XM9vjIzVKCi0tolgZbPB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Certificate
          </a>
        </li>        
      </ul>
    </ExpandableCard>
  );
}
