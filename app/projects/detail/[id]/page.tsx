import Link from "next/link";
import { projects } from "@/app/data/projects";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Cormorant_Garamond, Grechen_Fuemen } from "next/font/google";

type Props = {
  params: Promise<{ id: string }>;
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const grechen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: "400",
});

export default async function Detail({ params }: Props) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center h-full mt-8">
        <h1 className="text-5xl text-center uppercase text-orange-600 dark:text-orange-500">
          Project not found
        </h1>
        <Link
          href={"/projects"}
          className="flex items-center justify-center text-3xl hover:text-blue-600 dark:hover:text-blue-400 mt-4"
        >
          <FiArrowLeftCircle className="me-2" /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-flow-col justify-items-center">
      <div className="flex flex-col w-full md:w-5/6">
        <div
          className={`${cormorant.className} flex font-bold items-center text-3xl border-b-4 border-blue-600 dark:border-blue-400 py-2 px-4`}
        >
          <Link
            href={"/projects"}
            className="border-blue-600 dark:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FiArrowLeftCircle className="me-4" />
          </Link>
          <span className="text-orange-600 dark:text-orange-500 uppercase">
            {project.title}
          </span>
        </div>
        <div
          className={`${cormorant.className} mt-4 text-lg md:text-xl text-justify`}
        >
          {project.title}
        </div>
      </div>
    </div>
  );
}
