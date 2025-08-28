import Link from "next/link";
import { Cormorant_Garamond, Grechen_Fuemen } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const grechen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="justify-center content-center">
      <div className={`${grechen.className} justify-center`}>
        <div className="font-bold text-center content-center text-6xl text-orange-500">
          Hai <span>👋🏼</span>
        </div>
        <div className="flex justify-center my-6">
          <div
            className={`${cormorant.className} w-3/4 text-lg md:text-2xl text-justify`}
          >
            Perkenalkan, saya Rudi Hadi Syahfitrah. Saya berkarier sebagai
            Junior Programmer dan IT Support. Kini saya bergabung sebagai Staff
            IT di PT Tanjung Timberindo Industry, dengan peran utama menjaga
            performa dan keandalan perangkat serta sistem IT agar selalu
            optimal.
          </div>
        </div>
        <div className="text-center">
          <Link
            href={"/about"}
            className={`${cormorant.className} inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            More About Me
          </Link>
        </div>
      </div>
    </div>
  );
}
