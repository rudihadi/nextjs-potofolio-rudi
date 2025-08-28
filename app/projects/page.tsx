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

export default function Projects() {
  return <div>Projects</div>;
}
