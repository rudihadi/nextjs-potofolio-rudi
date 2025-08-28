import { Cormorant_Garamond, Grechen_Fuemen } from "next/font/google";
import { RiCodeBoxLine } from "react-icons/ri";
import { FaComputer, FaRegCircleCheck } from "react-icons/fa6";
import { PiSoccerBallFill } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const grechen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  return (
    <div className="grid grid-flow-col justify-items-center">
      <div className="flex flex-col w-full md:w-5/6">
        <div className={`${grechen.className} font-bold text-center content-center text-3xl text-orange-600 dark:text-orange-500 border-b-4 border-blue-600 dark:border-blue-400 py-2 px-4`}>ABOUT ME</div>
        <div className={`${cormorant.className} mt-4 text-lg md:text-xl text-justify`}>
          Hai, saya Rudi!👋🏼 Saya seorang Junior Programmer dari Medan, Indonesia. Saya telah berkecimpung di dunia IT sejak 2018. Karier saya dimulai sebagai IT Support dari 2018 hingga 2023, dan sejak 2023, saya beralih menjadi Junior
          Programmer. Saat ini, saya terus berkembang dan belajar untuk meningkatkan keterampilan di bidang pemrograman.
        </div>
        <div className={`${cormorant.className} mt-4 text-xl md:text-2xl`}>
          <span className="font-bold text-orange-600 dark:text-orange-500">Ini Saya :</span>
          <div className="ps-6 text-lg md:text-xl">
            <div className="flex flex-col">
              <div className="font-semibold flex items-center">
                <RiCodeBoxLine className="me-2 text-orange-600 dark:text-orange-500" /> Junior Programmer
              </div>
              <div className="font-semibold flex items-center">
                <FaComputer className="me-2 text-orange-600 dark:text-orange-500" /> IT Support
              </div>
              <div className="font-semibold flex items-center">
                <PiSoccerBallFill className="me-2 text-orange-600 dark:text-orange-500" /> Hobi Soccer & Badminton
              </div>
            </div>
          </div>
        </div>
        <div className={`${cormorant.className} mt-4 text-xl md:text-2xl`}>
          <span className="font-bold text-orange-600 dark:text-orange-500">Karir :</span>
          <div className="ps-6 text-lg md:text-xl">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="uppercase font-bold flex items-center">
                  <IoMdCheckmarkCircleOutline className="me-2 text-orange-600 dark:text-orange-500" /> IT Support - Staff IT
                </div>
                <div className=" ms-4 ps-8">
                  <p className="font-semibold">PT. Tanjung Timberindo Industry</p>
                  <p className="">Juni 2025 – Sekarang</p>
                  <p className="">Jl. Utama No. 108, Kec. Tj. Morawa, Kabupaten Deli Serdang, Sumatera Utara 20362</p>
                  <p className="">Menjaga performa dan keandalan perangkat serta sistem IT agar selalu optimal</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="uppercase font-bold flex items-center">
                  <IoMdCheckmarkCircleOutline className="me-2 text-orange-600 dark:text-orange-500" /> Junior Programmer
                </div>
                <div className=" ms-4 ps-8">
                  <p className="font-semibold">PT. Sumatera Timber Indo Industry</p>
                  <p className="">September 2023 – April 2025</p>
                  <p className="">Jl. Batang Kuis No. 8, Desa Buntu Bedimbar KM 2,5, Kec. Tj. Morawa, Kabupaten Deli Serdang, Sumatera Utara 20362</p>
                  <p className="">Develop, Update Feature & Bug Fixing Website</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="uppercase font-bold flex items-center">
                  <IoMdCheckmarkCircleOutline className="me-2 text-orange-600 dark:text-orange-500" /> IT Support - Technology Infrastructure Engineer (TIE Maybank)
                </div>
                <div className=" ms-4 ps-8">
                  <p className="font-semibold">PT. Infomedia Nusantara (Penempatan Maybank Medan)</p>
                  <p className="">Maret 2022 - September 2023</p>
                  <p className="">Jl. Rs. Fatmawati, Kav. 77-81, Kebayoran Baru, Jakarta Selatan, 12150</p>
                  <p className="">Repair & Maintenance (PC, Laptop, CCTV, Network dll)</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="uppercase font-bold flex items-center">
                  <IoMdCheckmarkCircleOutline className="me-2 text-orange-600 dark:text-orange-500" /> IT Support - Desktop Engineer (DE)
                </div>
                <div className=" ms-4 ps-8">
                  <p className="font-semibold">PT. Astragraphia</p>
                  <p className="">April 2018 - Desember 2021</p>
                  <p className="">Jl. SM. Raja km 6,5 no.4, Harjosari II, Kec. Medan Amplas, Kota Medan, Sumatera Utara 20229</p>
                  <p className="">Repair & Maintenance PC / Laptop Customer (Bank Permata, Asuransi Astra, FIF, BPJS Kesehatan dll)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${cormorant.className} mt-4 text-xl md:text-2xl`}>
          <span className="font-bold text-orange-600 dark:text-orange-500">Keterampilan :</span>
          <div className="ps-6 text-lg md:text-xl">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="font-semibold flex items-center">
                  <IoCheckmarkDoneOutline className="me-2 text-orange-600 dark:text-orange-500" /> Repair & Maintenance
                </div>
                <div className="ps-8 flex">
                  <span className="flex me-4 items-center">
                    <FaRegCircleCheck className="me-1 text-orange-600 dark:text-orange-500 text-xs" /> PC
                  </span>
                  <span className="flex me-4 items-center">
                    <FaRegCircleCheck className="me-1 text-orange-600 dark:text-orange-500 text-xs" /> Laptop
                  </span>
                  <span className="flex me-4 items-center">
                    <FaRegCircleCheck className="me-1 text-orange-600 dark:text-orange-500 text-xs" /> CCTV
                  </span>
                  <span className="flex me-4 items-center">
                    <FaRegCircleCheck className="me-1 text-orange-600 dark:text-orange-500 text-xs" /> Network
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-6 text-lg md:text-xl">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="font-semibold flex items-center">
                  <IoCheckmarkDoneOutline className="me-2 text-orange-600 dark:text-orange-500" /> Programming Language
                </div>
                <div className="ps-8 flex">
                  <span className="flex me-4 items-center">
                    <FaRegCircleCheck className="me-1 text-orange-600 dark:text-orange-500 text-xs" /> PHP
                  </span>
                  <span className="flex me-4 items-center">
                    <FaRegCircleCheck className="me-1 text-orange-600 dark:text-orange-500 text-xs" /> Javascript
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-6 text-lg md:text-xl">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="font-semibold flex items-center">
                  <IoCheckmarkDoneOutline className="me-2 text-orange-600 dark:text-orange-500" /> Fullstack
                </div>
                <div className="ps-8 flex">
                  <span className="flex me-4 items-center">
                    <FaRegCircleCheck className="me-1 text-orange-600 dark:text-orange-500 text-xs" /> Codeigniter 3
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-6 text-lg md:text-xl">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="font-semibold flex items-center">
                  <IoCheckmarkDoneOutline className="me-2 text-orange-600 dark:text-orange-500" /> Frontend
                </div>
                <div className="ps-8 flex">
                  <span className="flex me-4 items-center">
                    <FaRegCircleCheck className="me-1 text-orange-600 dark:text-orange-500 text-xs" /> HTML
                  </span>
                  <span className="flex me-4 items-center">
                    <FaRegCircleCheck className="me-1 text-orange-600 dark:text-orange-500 text-xs" /> CSS
                  </span>
                  <span className="flex me-4 items-center">
                    <FaRegCircleCheck className="me-1 text-orange-600 dark:text-orange-500 text-xs" /> ReactJS
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-6 text-lg md:text-xl">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="font-semibold flex items-center">
                  <IoCheckmarkDoneOutline className="me-2 text-orange-600 dark:text-orange-500" /> Backend
                </div>
                <div className="ps-8 flex">
                  <span className="flex me-4 items-center">
                    <FaRegCircleCheck className="me-1 text-orange-600 dark:text-orange-500 text-xs" /> Codeigniter 3
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-6 text-lg md:text-xl">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="font-semibold flex items-center">
                  <IoCheckmarkDoneOutline className="me-2 text-orange-600 dark:text-orange-500" /> Database
                </div>
                <div className="ps-8 flex">
                  <span className="flex me-4 items-center">
                    <FaRegCircleCheck className="me-1 text-orange-600 dark:text-orange-500 text-xs" /> MySQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
