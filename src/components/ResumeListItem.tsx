import { experience } from '@/data/resume';

type ResumeListItemPropsType = experience;

export default function ResumeListItem({ title, date, company, techs }: ResumeListItemPropsType) {
  return (
    <li className="flex justify-between items-center py-4 border-b border-[#f1f1f1]/20">
      <div className="flex flex-col gap-1">
        <h5 className="text-xl font-medium">{title}</h5>
        <span className="font-dot text-sm opacity-50">{date}</span>
      </div>
      <h6 className="font-pp text-xl opacity-50">{company}</h6>
      <h6 className="text-xl">{techs}</h6>
    </li>
  );
}
