import { Button } from "@/components/ui/button";

export default function Header({onCreatePost}) {

  return (
    <nav className="w-full border-b border-[#242628] bg-black">
      <div className="flex h-14 items-center justify-between px-6">
        <h1 className="text-md text-white font-semibold">React Poster</h1>

        <Button onClick={onCreatePost}>
          New Post
        </Button>
      </div>
    </nav>
  );
}
