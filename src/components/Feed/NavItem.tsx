export const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <button className="flex items-center gap-3 text-sm hover:text-indigo-400 transition">
    <span>{icon}</span>
    {label}
  </button>
);