type HeroProps = {
  videoSrc: string;
};

export default function Hero({ videoSrc }: HeroProps) {
  return (
    <section className="w-full max-h-svh top-0 z-0">
      <video
        controlsList="nodownload"
        loop
        className="opacity-75 aspect-[4/3] max-h-svh -z-10 top-0 w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} />
      </video>
    </section>
  );
}
