import { Fragment } from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import PrimaryButton from '../common/buttons/primaryButton';
import footer from '../assets/images/footer.png'
import { Link } from 'react-router-dom';
import { scrollToTop } from '../functionsUI';
import { boletin } from '../common/alerts/boletin';
import { HiMiniRocketLaunch } from "react-icons/hi2";
import Logo from '../common/logo/logo';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  return (

    <Fragment>
      <div className=" w-full  bg-cover bg-center md:h-[350px] py-8 md:p-auto flex justify-center items-center relative " style={{ backgroundImage: `url(${footer})` }}>
        <div className={`flex transition-[1s] h-full absolute bottom-0 w-full items-end bg-gradient-to-r from-black/55 to-black/15 z-10`}></div>

        <div className="w-[75vw]  flex flex-col md:flex-row justify-between items-center z-50">
          <div className="text-white md:w-[50%] flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl md:text-[42px] font-bold">¡No esperes más!</h2>
            <p className='hidden md:flex'>
              Haz tu cotización y descubre cómo Sentinel GPS puede transformar la gestión de tu flota. Nuestro equipo está listo para brindarte una atención personalizada y responder todas tus preguntas. ¡Haz clic en el botón y cotiza!
            </p>
            <p className='md:hidden pb-4'>
              Haz tu cotización y descubre cómo Sentinel GPS puede transformar la gestión de tu flota.
            </p>
          </div>

          <Link to="/services/4" onClick={() => scrollToTop()}> <PrimaryButton textBtn="Hacer Cotización" /></Link>

        </div>
      </div>
      <footer className="bg-gray-100 py-8 flex flex-col items-center justify-center">
        <div className="md:w-[75vw]  container mx-auto px-4">
          {/* Newsletter Section */}
          <div className="flex flex-col items-center mb-8 py-10">
            <p className="text-blueMain font-semibold text-lg">Suscríbete a nuestro boletín<span className="ml-2">📧</span></p>
            <p className="text-gray-600 mb-4 md:w-[50vw] text-center">Al suscribirte, te mantendremos al día con nuestras promociones exclusivas, consejos útiles, y los avances más recientes en tecnología de rastreo y gestión de flotas.</p>
            <button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 px-6 rounded-3xl flex gap-2 items-center" onClick={() => boletin()}>
              <HiMiniRocketLaunch />  ¡Suscribirse!</button>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8 text-gray-600">

            <div className='flex justify-center md:block'>
              <h3 className="hidden md:block font-semibold text-gray-800 pb-2">Quienes somos</h3>
              <p className='pb-4 hidden md:block'>Somos una empresa dedicada a brindar soluciones avanzadas de rastreo y monitoreo. Nuestra misión es mejorar la seguridad y eficiencia de las flotas y activos móviles de empresas y particulares</p>
              <Logo />
            </div>
            <div className='hidden md:flex flex-col pl-[30%] '>
              <h3 className="font-semibold text-gray-800">Menu</h3>
              <ul className='pt-2'>
                <a href='/'><li >Home</li></a>
                <a href='/about'><li >Soluciones</li></a>
                <a href='/about'><li >Ventajas</li></a>
                <a href='/about'><li >Recursos</li></a>
                <a href='/about'><li >Nosotros</li></a>
              </ul>
            </div>
            <div className='hidden md:block'>
              <h3 className="font-semibold text-gray-800">Recursos</h3>
              <ul className="text-gray-600 pt-2">
                <a href='#'><li >FAQ</li></a>
                <a href='#'><li >Términos y condiciones</li></a>
              </ul>
            </div>
            <div className='md:block flex justify-center flex-col items-center'>
              <h3 className="font-semibold text-gray-800">Contácto</h3>
              <ul className="text-gray-600 flex flex-col items-center md:items-start gap-2 pt-2">
                <a href='#' className='flex gap-2 items-center'><FaMapMarkerAlt /><li >Calle Los Perales 123, La Serena, Chile.</li></a>
                <a href='#' className='flex gap-2 items-center'><FaEnvelope /><li >info@sentinelgps.cl</li></a>
                <a href='#' className='flex gap-2 items-center'><FaPhone /><li >+56 2 9123 4567</li></a>
                <a href='#' className='flex gap-2 items-center'><FaWhatsapp size={20} /><li >+56 9 2246 5427</li></a>




              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-4">
            <FaFacebookF className="text-gray-500 hover:text-red-700 cursor-pointer" />
            <div className="text-gray-500 hover:text-red-700 cursor-pointer" >X</div> {/* Simula el ícono de 'X' */}
            <FaLinkedinIn className="text-gray-500 hover:text-red-700 cursor-pointer" />
            <FaYoutube className="text-gray-500 hover:text-red-700 cursor-pointer" />
            <FaInstagram className="text-gray-500 hover:text-red-700 cursor-pointer" />
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
