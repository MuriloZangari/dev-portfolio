import ExpandableCard from '../ui/ExpandableCard';

export default function Skills() {
  return (
    <ExpandableCard title="Skills"> 
      <ul className="list-disc pl-5 space-y-2">
        <li><b>Front-End: </b> React.js, Next.js, Tailwind CSS, Vite, HTML5, Bootstrap</li>
        <li><b>Back-End: </b> Django (incl. RESTful APIs), Node.js, OAuth2</li>
        <li><b>DevOps & Infrastructure: </b> PostgreSQL, AWS (EC2, S3, IAM, Route 53, RDS, Cost Management, Backup), Terraform, Docker, CI/CD (GitHub Actions, GitLab CI)</li>
        <li><b>Testing & Quality: </b> Test-Driven Development (TDD), PyTest, Playwright</li>
        <li><b>AI: </b> Machine Learning, LLM (Large Language Models), Ollama</li>
        <li><b>Programming Languages: </b> Python, JavaScript, TypeScript, C++</li>
        <li><b>Data Analysis: </b> Pandas, NumPy, Scikit-learn, Data Visualization</li>
        <li><b>Project & Workflow Management: </b> Jira, Agile Methodologies</li>
      </ul>
    </ExpandableCard>
  );
}
