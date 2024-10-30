export const dynamic = "force-static";
import Image from "next/image";
import ArrowButton from "../ui/ArrowButton";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-lg md:flex-row">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          Hi, I’m Adithya Ambagaspitiya, a passionate Computer Science student that made this site using NextJs
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Beyond coding, I love diving into hardware projects—most recently, I built an 8-bit TTL breadboard computer based on the SAP architecture. That was fun!<br/>
        </p>
        <ArrowButton text="Back to Home" href="/" />
      </div>
      <div className="">
        <Image
          src="/CoolMountain.jpg"
          alt="Cool pic of a mountain I got"
          width={800}
          height={800}
          className="rounded-3xl"
        />
      </div>
    </section>
  );
}
