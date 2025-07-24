type EducationItemProps = {
  title: string;
  university: string;
  period: string;

};

export default function EducationItem({
  title,
  university,
  period,
}: EducationItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="text-sm">{university} · {period}</p>
    </div>
  );
}
