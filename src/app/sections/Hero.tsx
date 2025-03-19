type HeroProps = {
  videoSrc: string;
};

export default function Hero({ videoSrc }: HeroProps) {
  return (
    <section className="w-full max-h-screen top-0 z-0">
      <video
        controlsList="nodownload"
        loop
        className="opacity-75 -z-10 top-0 w-full max-h-svh object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src={videoSrc} />
      </video>
    </section>
  );
}
