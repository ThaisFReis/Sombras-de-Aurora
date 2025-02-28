import { Feed } from "@/features/feed";
import { ProgressBar } from "@/components/ProgressBar";

export const Home = () => {
  return (
    <div className="w-full min-h-screen flex justify-between">
      <Feed /> {/* Conteúdo principal */}
      <ProgressBar /> {/* ProgressBar fixa no canto direito */}
    </div>
  );
};