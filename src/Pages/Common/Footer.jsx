import { FaFacebook,FaInstagramSquare,FaTwitter,FaYoutube ,FaAddressBook, FaPhone, FaVoicemail } from "react-icons/fa";
import logo from "../../assets/logo1.png";
const Footer = () => {
  return (
    <div className="bg-black opacity-90 text-white">
      <footer className="max-w-screen-2xl mx-auto footer p-10  ">
        <div className=" mx-auto px-5">
        <img className="h-18 w-24 rounded-lg" src={logo} alt="" />
        <h1 className="text-4xl "style={{ fontFamily: 'Lobster, cursive' }} >Melody<span className="text-yellow-600">Master</span></h1>
          <p className=" mb-5">
          A music instrument school is an educational  institution that specializes <br /> in teaching students  how to play  various musical instruments.  </p>
        </div>
        <div>
          <span className=" text-2xl font-bold text-yellow-600 mb-2">Quick Links</span>
          <a className="no-underline link hover:text-yellow-600">Home</a>
          <a className="no-underline link hover:text-yellow-600r">Instractor</a>
          <a className="no-underline link hover:text-yellow-600">Classes</a>
          <a className="link hover:text-yellow-600 no-underline">Dashboard</a>
        </div>
        <div className="">
          <span className=" text-2xl font-bold text-yellow-600 mb-2">Follow us on</span>
          <p className=" flex flex-row items-center hover:text-yellow-600"><FaFacebook className="mr-2"></FaFacebook> Facebook</p>
          <a className=" flex flex-row items-center hover:text-yellow-600"><FaTwitter className="mr-2"></FaTwitter>Twitter</a>
          <a className=" flex flex-row items-center hover:text-yellow-600"><FaInstagramSquare className="mr-2"></FaInstagramSquare>Instagram</a>
          <a className=" flex flex-row items-center hover:text-yellow-600"><FaYoutube className="mr-2"></FaYoutube>Youtube</a>

        </div>
        <div>
          <span className=" text-2xl font-bold text-yellow-600 mb-2">Information</span>
          <p className="flex flex-row items-center mb-2">
          <FaAddressBook className="mr-2"></FaAddressBook>Addresss: 1800 Abbot Kinney Nebraska UK
          </p >
          <p className="flex flex-row  items-centeri mb-2"><FaVoicemail className="mr-2"></FaVoicemail>Email: hello@example.com</p>
          <p className="flex flex-row items-center mb-2"><FaPhone className="mr-2"></FaPhone>Phone: (012) 345 6789</p>
        </div>
        

      </footer>
      <footer className="footer items-center p-4 bg-yellow-700 text-neutral-content">
  <div className="max-w-7xl mx-auto items-center grid-flow-col text-lg font-semibold">
    <p>Copyright © 2023 - All right reserved</p>
  </div> 

</footer>
    </div>
  );
};

export default Footer;