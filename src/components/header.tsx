import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function Headers() {
  const [dark, setDark] = useState(false);

  function darkModeHandler() {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }
  return (
    <header className="sticky top-0 h-10 w-full">
      <div className="absolute end-5 top-5 text-zinc-950 dark:text-zinc-50">
        <button
          onClick={() => {
            darkModeHandler();
          }}
        >
          {dark && <Sun />}
          {!dark && <Moon />}
        </button>
      </div>
      <nav className="flex list-none items-center justify-center px-5 py-5 text-sm text-zinc-950 dark:text-zinc-50">
        <div className="flex gap-5 sm:gap-10">
          <li className="decoration-yellow-400 decoration-2 hover:font-semibold hover:underline hover:underline-offset-4">
            <a href="">HOME</a>
          </li>
          <button>
            <li
              className="decoration-yellow-400 decoration-2 hover:font-semibold hover:underline hover:underline-offset-4"
              onClick={(e) => {
                let about = document.getElementById("about");
                e.preventDefault();
                about && about.scrollIntoView();
              }}
            >
              ABOUT
            </li>
          </button>
          <button>
            <li
              className="decoration-yellow-400 decoration-2 hover:font-semibold hover:underline hover:underline-offset-4"
              onClick={(e) => {
                let about = document.getElementById("projects");
                e.preventDefault();
                about && about.scrollIntoView();
              }}
            >
              PROJECTS
            </li>
          </button>
          <button>
            <li
              className="decoration-yellow-400 decoration-2 hover:font-semibold hover:underline hover:underline-offset-4"
              onClick={(e) => {
                let about = document.getElementById("contact");
                e.preventDefault();
                about && about.scrollIntoView();
              }}
            >
              CONTACT
            </li>
          </button>
        </div>
      </nav>
    </header>
  );
}
