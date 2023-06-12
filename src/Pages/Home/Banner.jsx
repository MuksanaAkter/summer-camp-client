import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="mt-10">
      <Carousel className="">
        <div>
          <img
            className="h-full"
            src="https://images.unsplash.com/photo-1621367507503-1b5816c754a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <p className="text-white md:text-5xl m-10 bg-black bg-opacity-50 py-10 px-10">
              Music instrument schools are educational institutions that
              specialize in providing instruction and training in playing
              musical instruments. These schools offer a structured curriculum
              designed to teach students the necessary skills, techniques, and
              knowledge to become proficient in their chosen instrument.
            </p>
          </div>
        </div>
        <div>
          <img
            className="h-fit"
            src="https://media.istockphoto.com/id/155858873/photo/piano-playing.jpg?s=170667a&w=0&k=20&c=OWuZXOmz5QWf6FcPih3mwQgfm1l_QUPGP3y3kppghfk="
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <p className="text-white md:text-5xl m-10 bg-black bg-opacity-50 py-10 px-10">
              Music instrument schools are educational institutions that
              specialize in providing instruction and training in playing
              musical instruments. These schools offer a structured curriculum
              designed to teach students the necessary skills, techniques, and
              knowledge to become proficient in their chosen instrument.
            </p>
          </div>
        </div>
        <div>
          <img
            className="h-full"
            src="https://verbnow.com/wp-content/uploads/2021/06/trumpets-jun112021.jpg"
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <p className="text-white md:text-5xl m-10 bg-black bg-opacity-50 py-10 px-10">
              Music instrument schools are educational institutions that
              specialize in providing instruction and training in playing
              musical instruments. These schools offer a structured curriculum
              designed to teach students the necessary skills, techniques, and
              knowledge to become proficient in their chosen instrument.
            </p>
          </div>
        </div>
        <div className="h-full">
          <img
            className=" w-full h-fit image-full"
            src="https://media.istockphoto.com/id/656169936/photo/musician-hand-playing-the-cello.jpg?s=612x612&w=0&k=20&c=iyDCVZfVsiO7tB1LJsYTogOsJNZNyqAoR9edlmjLwFY="
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <p className="text-white md:text-5xl m-10 bg-black bg-opacity-50 py-10 px-10">
              Music instrument schools are educational institutions that
              specialize in providing instruction and training in playing
              musical instruments. These schools offer a structured curriculum
              designed to teach students the necessary skills, techniques, and
              knowledge to become proficient in their chosen instrument.
            </p>
          </div>
        </div>

        <div>
          <img
            className="h-fit"
            src="https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <p className="text-white md:text-5xl m-10 bg-black bg-opacity-50 py-10 px-10">
              Music instrument schools are educational institutions that
              specialize in providing instruction and training in playing
              musical instruments. These schools offer a structured curriculum
              designed to teach students the necessary skills, techniques, and
              knowledge to become proficient in their chosen instrument.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
