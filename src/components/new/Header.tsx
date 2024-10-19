import DropdownMenu from './DropdownMenu';

export default function Header() {
  return (
    <header className="flex justify-between items-start">
      <h2 className="font-medium leading-none uppercase">Victor Lebecq</h2>
      {/* TODO : Enhance the style of the location */}
      <span className="text-xs leading-none uppercase">Grenoble, France</span>
      <DropdownMenu />
    </header>
  );
}
