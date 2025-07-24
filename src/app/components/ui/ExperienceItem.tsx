type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

export default function ExperienceItem({
  title,
  company,
  period,
  bullets,
}: ExperienceItemProps) {
  return (
    <div className="flex flex-col gap-1 my-6">
      <h3 className="text-md font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{company} · {period}</p>
      <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
        {bullets.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
