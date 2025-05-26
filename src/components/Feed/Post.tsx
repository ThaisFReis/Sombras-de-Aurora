export const Post = ({
  user,
  handle,
  content,
}: {
  user: string;
  handle: string;
  content: string;
}) => (
  <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 shadow-sm hover:shadow-md transition">
    <div className="flex justify-between items-center">
      <div>
        <div className="font-semibold">{user}</div>
        <div className="text-xs text-zinc-500">{handle}</div>
      </div>
    </div>
    <p className="text-sm mt-2 text-zinc-200">{content}</p>
  </div>
);