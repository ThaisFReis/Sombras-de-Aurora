import { Feed } from "@/features/feed";
import { ProgressBar } from "@/components/ProgressBar";

export const Home = () => {
  return (
    <div className="flex w-full min-h-screen justify-evenly space-y-4">
      <Feed />
      <ProgressBar />
    </div>
  );
};
