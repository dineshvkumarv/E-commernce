import SocialMediaFooter from "./SocialMediaFooter";
import { HiChevronDown } from "react-icons/hi2";

const Footer = () => {
  return (
    <>
      <SocialMediaFooter />
      <footer className="max-w-screen-2xl mx-auto border-b-8 border-secondaryBrown px-5 max-[400px]:px-3">
        <div className="flex justify-center gap-24 text-center mt-12 max-[800px]:flex-col max-[800px]:gap-10">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">
              Servicio al cliente
            </h3>
            <p className="text-lg max-sm:text-base">Servicio posventa</p>
            <p className="text-lg max-sm:text-base">333 3333 333</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">Nuestra Marca</h3>
            <p className="text-lg max-sm:text-base">La compañia</p>
            <p className="text-lg max-sm:text-base">La excelencia</p>
            <p className="text-lg max-sm:text-base">Nuestra historia</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">Ropa de lujo</h3>
            <p className="text-lg max-sm:text-base">Categoria 1</p>
            <p className="text-lg max-sm:text-base">Categoria 2</p>
            <p className="text-lg max-sm:text-base">Categoria 3</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 my-20">
          <h2 className="text-6xl font-light text-center max-sm:text-5xl">
            MARILU
          </h2>
          <p className="text-base text-center max-sm:text-sm">
            All rights reserved ©2024
          </p>
          <ul className="flex justify-center items-center gap-7 text-base max-sm:text-sm max-[350px]:flex-col max-[350px]:gap-5">
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Legal Notes</li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
