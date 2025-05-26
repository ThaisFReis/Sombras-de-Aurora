type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

export const NavItem = ({ icon, label }: NavItemProps) => (
  <button className="flex items-center gap-3 text-sm hover:text-indigo-400 transition">
    <span>{icon}</span>
    {label}
  </button>
);