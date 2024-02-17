import Image from "next/image";

export default function Home() {
  return (
   <div>
    {/* Hero Section */}
    <div className="grid lg:grid-cols-12 mx-auto px-4 py-8 max-w-screen lg:py-16">
      <div className="lg:col-span-7 place-self-center mr-auto">
        <h1 className="max-w-2xl mb-4 text-center text-2xl font-extrabold text-black tracking-tight leading-none md:text-5xl">
          Generating Dream Rooms For  <br className="max-md:hidden" />
          <span className="text-center purple_gradient">
             Your Home Using AI.
            </span>
        </h1>
        <p className="hero_desc">
          Upload your photo , choose a mode and pick from over 40 room designs styles.
          <strong>
          Reimagine Any Home Interior With Our AI Room Designs.
          </strong>
        </p>
        <button className=" mt-8 black_btn">Redesign My Room</button>
      </div>
      <div className="mt-8 lg:mt-8 lg:col-span-5">
        <video className="rounded-lg" autoPlay="autpplay" muted controls loop={true}>
          {" "}
          <source src="/headvid.mp4" />
        </video>
      </div>
    
    </div>
    
    <div className="text-center max-w-3xl mb-4 text-3xl font-extrabold tracking-tight md:text-4xl mx-auto">
    AI-Powered Room and landscaping designs for your home.
    </div>
    <div className="text-center mt-5 text-lg font-light text-gray-500 max-w-4xl md:text-lg mx-auto">
      AI automatically re-designs your home interior with over 40 styles of room designs. Upload your photo , choose a mode and pick from over 40 room designs styles. Reimagine Any Home Interior With Our AI Room Designs. AI-Powered Room and landscaping designs for your home. 
    </div>
    <div className="mt-8 px-4 py-8 max-w-screen-xl grid grid-cols-9 gap-4 w-full mx-auto"> 
      <div className="col-span-4">
        <div className="h-64 sm:h-96 w-full aspect-video bg-gray-100 relative">
          <Image
          className="rounded--lg object-cover"
          alt="photo"
          src="/assets/images/original-pic.jpg"
          fill
          />
        </div>
      </div>
      <div className="col-span-1">
        <div className="h-64 sm:h-96 w-full flex-center">
          <Image
          className="rounded--lg object-cover"
          alt="photo"
          src="/assets/images/arrow.jpg"
          width={30}
          height={30}

          />
        </div>
      </div>
      <div className="col-span-4">
        <div className="h-64 sm:h-96 w-full aspect-video bg-gray-100 relative">
          <Image
          className="rounded--lg object-cover"
          alt="photo"
          src="/assets/images/generated-pic.jpg"
          fill
          />
        </div>
      </div>
    </div>
   </div>
  );
}
