import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";



const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 800",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="px-56 text-center">
            We are the most straightfoward URL shortener in the world. Most of the url shortener will trac you or ask you to give you details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3 justify-start'>
            <Link href="/Shorten"><button className="cursor-pointer bg-purple-500 shadow-lg rounded-lg p-3 py-1 text-white font-bold">Try now</button></Link>
            <Link href="/github"><button className="cursor-pointer bg-purple-500 shadow-lg rounded-lg p-3 py-1 text-white font-bold">Github</button></Link>
        </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="An Image of the vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>

  );
}
