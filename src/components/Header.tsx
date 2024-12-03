import { HiBars3 } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Abre el menú al pasar el cursor
  const handleMouseEnter = () => {
    setIsSidebarOpen(true);
  };

  // Cierra el menú al salir del área
  const handleMouseLeave = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="max-w-screen-2xl flex text-center justify-between items-center py-4 px-5 text-black mx-auto max-sm:px-5 max-[400px]:px-3">
        <HiBars3
          className="text-2xl max-sm:text-xl mr-20 max-lg:mr-0 cursor-pointer"
          onMouseEnter={handleMouseEnter} // Abre el menú al pasar el mouse
          title="Menú"
        />
        <Link
          to="/"
          className="text-4xl font-light tracking-[1.08px] max-sm:text-3xl max-[400px]:text-2xl"
        >
          MARILU
          
        </Link>
        <div className="flex gap-4 items-center max-sm:gap-2">
          <Link to="/search" title="Buscar productos">
            <HiOutlineMagnifyingGlass className="text-2xl max-sm:text-xl hover:text-blue-500 transition-all duration-300" />
          </Link>
          <Link to="/login" title="Iniciar sesión">
            <HiOutlineUser className="text-2xl max-sm:text-xl hover:text-blue-500 transition-all duration-300" />
          </Link>
          <Link to="/cart" title="Ver carrito">
            <HiOutlineShoppingBag className="text-2xl max-sm:text-xl hover:text-blue-500 transition-all duration-300" />
          </Link>
        </div>
      </header>
      {/* El menú lateral se controla con los eventos de entrada y salida */}
      <div onMouseLeave={handleMouseLeave}>
        <SidebarMenu
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
    </>
  );
};

export default Header;
