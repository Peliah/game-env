import Image from "next/image";

export default function Expedition() {
  return (
    <>
      <section className="relative h-screen w-full p-4 flex justify-center items-center">
        <div className="relative h-full w-full">
          <div className="relative h-full w-full hero-img-container">
            <div className="absolute top-0 left-0 w-full h-full" >
              <Image src="/images/trace_img_03.jpg" alt="expedition" fill className="object-cover w-full h-full" />
            </div>
            <div className="hero-img-overlay"></div>
            <div className="hero-img-gradient"></div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full z-1">
            <div className="p-24 flex flex-col justify-center flex-start h-full ">
              <h1 style={{ fontFamily: 'SCHABO' }}>
                Expedition
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

