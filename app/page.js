import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen">
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh] px-4 py-8">
        <div className="flex flex-col gap-4 items-center justify-center text-center lg:text-left">
          <p className={`text-2xl md:text-3xl font-bold ${poppins.className} px-4`}>
            The best URL shortener in the Market
          </p>
          <p className="px-4 md:px-8 lg:px-16 text-sm md:text-base">
            We are the most straightfoward URL shortener in the world. Most of the url shortener will trac you or ask you to give you details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Link href="/Shorten"><button className="cursor-pointer bg-purple-500 shadow-lg rounded-lg p-3 py-2 text-white font-bold w-full sm:w-auto">Try now</button></Link>
            <Link href="/github"><button className="cursor-pointer bg-purple-500 shadow-lg rounded-lg p-3 py-2 text-white font-bold w-full sm:w-auto">Github</button></Link>
        </div>
        </div>
        <div className="flex justify-center relative h-64 md:h-96 lg:h-full mt-8 lg:mt-0">
          <Image className="mix-blend-darken object-cover" alt="An Image of the vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>

  );
}
