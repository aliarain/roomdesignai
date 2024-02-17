import DowloadIcon from "@/components/DOwnloadIcon";
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
    <section>
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
        <div className="h-64 sm:h-96 w-full flex justify-center items-center">
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
    </section>



    <section className="max-w-screen-xl mx-auto mt-8">
      <div>
         <h1 className="text-center max-w-3xl mb-4 text-3xl font-extrabold tracking-tight md:text-4xl mx-auto">
           Loved by many world wide.
         </h1>
         <p className="text-center mt-5 text-lg font-light text-gray-500 max-w-4xl md:text-lg mx-auto">
         336+ People can't be wrong. Let AI do magic for you.
           </p>
      </div>
      
      <div className="mt-8 px-4 py-8 max-w-screen-xl grid grid-cols-12 gap-4 w-full mx-auto">
        <div  className="border-2 border-gray-200 rounded-lg px-4 py-6">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-black w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path d="M8 17l4 4 4-4m-4-5v9"></path><path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path></svg>
        </div>

      </div>

    </section>  
    


   </div>
  );
}
