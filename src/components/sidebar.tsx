import { BookOpen, FolderSearch, HomeIcon, PhoneCall } from "lucide-react";

export function SideBar() {
  return (
    <nav className="fixed end-0 z-50 me-5 flex h-full list-none items-center justify-center shadow-zinc-950 drop-shadow-lg">
      <div className="flex flex-col gap-5 rounded-full bg-yellow-500 p-2 py-10">
        <li
          className="hover:underline"
          onClick={(e) => {
            let about = document.getElementById("start");
            e.preventDefault();
            about && about.scrollIntoView();
          }}
        >
          <HomeIcon />
        </li>
        <li
          onClick={(e) => {
            let about = document.getElementById("about");
            e.preventDefault();
            about && about.scrollIntoView();
          }}
        >
          <BookOpen />
        </li>
        <li
          onClick={(e) => {
            let about = document.getElementById("projects");
            e.preventDefault();
            about && about.scrollIntoView();
          }}
        >
          <FolderSearch />
        </li>
        <li
          onClick={(e) => {
            let about = document.getElementById("contact");
            e.preventDefault();
            about && about.scrollIntoView();
          }}
        >
          <PhoneCall />
        </li>
      </div>
    </nav>
  );
}
