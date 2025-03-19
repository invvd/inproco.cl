import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="aspect-[4/3] relative w-screen max-h-screen top-0 z-0">
        <video
          controlsList="nodownload"
          loop
          className="opacity-75 -z-10 absolute top-0 size-full object-cover"
          autoPlay
          muted
          playsInline
        >
          <source src="/videos/bg.mp4" />
        </video>
      </section>
    </>
  );
}
