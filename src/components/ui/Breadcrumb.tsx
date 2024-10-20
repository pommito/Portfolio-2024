import AnimatedLink from '../common/AnimatedLink';

interface BreadcrumbProps {
  pageTitle: string;
}

export default function Breadcrumb({ pageTitle }: BreadcrumbProps) {
  return (
    <nav className="text-sm flex items-start gap-1 leading-none uppercase">
      <span className="font-medium">[</span>
      <ul className="flex gap-1">
        <li className="opacity-75">
          <AnimatedLink title="Home" url="/" />
        </li>
        <li>/</li>
        <li className="font-medium">{pageTitle}</li>
      </ul>
      <span className="font-medium">]</span>
    </nav>
  );
}
