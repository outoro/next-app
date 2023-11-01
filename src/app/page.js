import Image from "next/image";

export default function Home() {
  return (
    <>
      <p>hello, whe~!</p>
      <Image
        src="/image.jpg"
        width={400}
        height={500}
        priority={true}
        alt="Picture of the author"
      />
    </>
  );
}
