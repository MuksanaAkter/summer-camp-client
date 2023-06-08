import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
             <Carousel className="max-w-screen-2xl mx-auto">
                
                <div>
                    
                    <img  className="h-full z-0" src="https://images.unsplash.com/photo-1621367507503-1b5816c754a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
                    <p className="legend ">Legend 1</p>
                   
                </div>
                <div>
                    <img className="h-fit" src="https://media.istockphoto.com/id/155858873/photo/piano-playing.jpg?s=170667a&w=0&k=20&c=OWuZXOmz5QWf6FcPih3mwQgfm1l_QUPGP3y3kppghfk=" />
                  
                </div>
                <div>
                    <img className="h-full" src="https://verbnow.com/wp-content/uploads/2021/06/trumpets-jun112021.jpg" />
                   
                </div>
                <div className="h-full">
                    <img className=" w-full h-fit image-full" src="https://media.istockphoto.com/id/656169936/photo/musician-hand-playing-the-cello.jpg?s=612x612&w=0&k=20&c=iyDCVZfVsiO7tB1LJsYTogOsJNZNyqAoR9edlmjLwFY=" />
                    
                </div>
                
                <div>
                    <img className="h-fit" src="https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  
                </div>
             
            </Carousel>
        </div>
    );
};

export default Banner;