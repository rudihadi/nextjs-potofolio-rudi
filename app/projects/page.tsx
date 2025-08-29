"use client";

import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { Cormorant_Garamond, Grechen_Fuemen } from "next/font/google";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/app/data/projects";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const grechen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: "400",
});

export default function Projects() {
  return (
    <div className="grid grid-flow-col justify-items-center">
      <div className="flex flex-col w-full md:w-5/6">
        <div
          className={`${grechen.className} font-bold text-center content-center text-3xl text-orange-600 dark:text-orange-500 border-b-4 border-blue-600 dark:border-blue-400 py-2 px-4`}
        >
          <Typewriter
            words={["PROJECTS"]}
            // loop={0} // 0 = infinite loop
            // cursor
            // cursorStyle="|"
            cursor={false}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div
          className={`${cormorant.className} mt-4 text-lg md:text-xl text-justify`}
        >
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-3 xl:grid-cols-3 xl:gap-4">
            {projects.map((item) => {
              return (
                <Card key={item.id}>
                  <CardHeader className="text-orange-600 dark:text-orange-500 hover:text-blue-600 dark:hover:text-blue-400">
                    <Link href={"/projects/detail/" + item.id}>
                      <CardTitle className="text-xl md:text-2xl">
                        {item.title}
                      </CardTitle>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <p>{item.desc}</p>
                  </CardContent>
                  <CardFooter>
                    <p>
                      [
                      <span className="text-orange-600 dark:text-orange-500">
                        {item.fw1}
                      </span>{" "}
                      |{" "}
                      <span className="text-orange-600 dark:text-orange-500">
                        {item.fw2}
                      </span>{" "}
                      ]
                    </p>
                  </CardFooter>
                </Card>
              );
            })}
            {/* <Card>
              <CardHeader className="text-orange-600 dark:text-orange-500 hover:text-blue-600 dark:hover:text-blue-400">
                <Link href={"#"}>
                  <CardTitle className="text-xl md:text-2xl">
                    Total Productive Maintenance (TPM)
                  </CardTitle>
                </Link>
              </CardHeader>
              <CardContent>
                <p>
                  Aplikasi ini digunakan untuk mendata semua mesin produksi
                  pabrik, mencatat kerusakan dll.
                </p>
              </CardContent>
              <CardFooter>
                <p>
                  [
                  <span className="text-orange-600 dark:text-orange-500">
                    CodeIgniter 3
                  </span>{" "}
                  |{" "}
                  <span className="text-orange-600 dark:text-orange-500">
                    Bootstrap
                  </span>{" "}
                  ]
                </p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="text-orange-600 dark:text-orange-500 hover:text-blue-600 dark:hover:text-blue-400">
                <Link href={"#"}>
                  <CardTitle className="text-xl md:text-2xl">
                    STII Integrated Portal (SIP)
                  </CardTitle>
                </Link>
              </CardHeader>
              <CardContent>
                <p>
                  Aplikasi ini digunakan untuk mendata penjualan, proses
                  produksi dll.
                </p>
              </CardContent>
              <CardFooter>
                <p>
                  [
                  <span className="text-orange-600 dark:text-orange-500">
                    CodeIgniter 3
                  </span>{" "}
                  |{" "}
                  <span className="text-orange-600 dark:text-orange-500">
                    Bootstrap
                  </span>{" "}
                  ]
                </p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="text-orange-600 dark:text-orange-500 hover:text-blue-600 dark:hover:text-blue-400">
                <Link href={"#"}>
                  <CardTitle className="text-xl md:text-2xl">
                    Progress Monitoring
                  </CardTitle>
                </Link>
              </CardHeader>
              <CardContent>
                <p>
                  Aplikasi ini digunakan untuk mencatat proses produksi,
                  mempermudah melihat proses produksi dll.
                </p>
              </CardContent>
              <CardFooter>
                <p>
                  [
                  <span className="text-orange-600 dark:text-orange-500">
                    CodeIgniter 3
                  </span>{" "}
                  |{" "}
                  <span className="text-orange-600 dark:text-orange-500">
                    Bootstrap
                  </span>{" "}
                  ]
                </p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="text-orange-600 dark:text-orange-500 hover:text-blue-600 dark:hover:text-blue-400">
                <Link href={"#"}>
                  <CardTitle className="text-xl md:text-2xl">
                    IT Assets
                  </CardTitle>
                </Link>
              </CardHeader>
              <CardContent>
                <p>
                  Aplikasi ini digunakan untuk mendata semua asset IT, mencatat
                  kerusakan dll.
                </p>
              </CardContent>
              <CardFooter>
                <p>
                  [
                  <span className="text-orange-600 dark:text-orange-500">
                    CodeIgniter 3
                  </span>{" "}
                  |{" "}
                  <span className="text-orange-600 dark:text-orange-500">
                    Bootstrap
                  </span>{" "}
                  ]
                </p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="text-orange-600 dark:text-orange-500 hover:text-blue-600 dark:hover:text-blue-400">
                <Link href={"#"}>
                  <CardTitle className="text-xl md:text-2xl">
                    Certificate STII
                  </CardTitle>
                </Link>
              </CardHeader>
              <CardContent>
                <p>
                  Website ini berisikan semua sertifikat PT STII untuk
                  memudahkan melihat sertifikat.
                </p>
              </CardContent>
              <CardFooter>
                <p>
                  [
                  <span className="text-orange-600 dark:text-orange-500">
                    ReactJS
                  </span>{" "}
                  |{" "}
                  <span className="text-orange-600 dark:text-orange-500">
                    Bootstrap
                  </span>{" "}
                  ]
                </p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="text-orange-600 dark:text-orange-500 hover:text-blue-600 dark:hover:text-blue-400">
                <Link href={"#"}>
                  <CardTitle className="text-xl md:text-2xl">
                    My Personal Website
                  </CardTitle>
                </Link>
              </CardHeader>
              <CardContent>
                <p>My Personal Website</p>
              </CardContent>
              <CardFooter>
                <p>
                  [
                  <span className="text-orange-600 dark:text-orange-500">
                    NextJS
                  </span>{" "}
                  |{" "}
                  <span className="text-orange-600 dark:text-orange-500">
                    Tailwind
                  </span>{" "}
                  ]
                </p>
              </CardFooter>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
}
