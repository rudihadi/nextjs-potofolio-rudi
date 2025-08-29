import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="relative items-center px-6 py-2 bg-background text-foreground"
      style={{ maxHeight: "7vh" }}
    >
      <div className="text-lg flex content-center">
        <div className="text-left font-semibold w-1/2 content-center">
          {/* <div className="text-center sm:w-full md:w-3/4 md:text-left"> */}
          <div className="flex flex-nowrap">
            <Link
              href={"https://github.com/rudihadi"}
              className="flex items-center me-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ease-in-out"
            >
              <FaGithub className="me-1" />{" "}
              <span className="hidden md:block">Github</span>
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/rudi-hadi-syahfitrah-51328a231/"
              }
              className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ease-in-out"
            >
              <FaLinkedin className="me-1" />{" "}
              <span className="hidden md:block">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="text-right font-semibold w-1/2">
          {/* <div className="text-right sm:w-full md:w-1/4 md:text-right"> */}
          Rudi Hadi &copy; 2025
        </div>
      </div>
    </footer>
  );
}
