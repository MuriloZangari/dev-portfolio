import ExpandableCard from '../ui/ExpandableCard';
import EducationItem from '../ui/EducationItem';

export default function Education() {
  return (
    <ExpandableCard title="Education">
      <EducationItem
        title="PhD in Computer Science"
        university="Federal University of Paraná"
        period="2015 - 2017"
      />
      <EducationItem
        title="Master's in Computer Science"
        university="Federal University of Paraná"
        period="2010 - 2012"
      />
      <EducationItem
        title="Bachelor's in Computer Science"
        university="State University of Maringá"
        period="2006 - 2009"
      />
    </ExpandableCard>
  );
}