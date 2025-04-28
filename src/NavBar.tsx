import React, { useState } from "react";
function NavBar() {
  const [busqueda, setBusqueda] = useState('');
  const manejarCambiosBusqueda = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valorBusqueda = e.target.value;
    setBusqueda(valorBusqueda);
    console.log(valorBusqueda);
  }

  return (
    <nav className="w-full flex items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 shadow-md">
      <div className="flex items-center space-x-4">
        <span><i className="fas fa-bars cursor-pointer"></i></span>

        <img
          src="https://opengameart.org/sites/default/files/duck_10.png"
          alt="Toureese Logo Viajes Turisticos Ahora"
          className="h-8 w-auto rounded-full shadow-sm cursor-pointer"
        />
      </div>

      <div className="flex items-center w-full max-w-md mx-4">
        <div className="relative w-full">
          <input
            value={busqueda}
            onChange={manejarCambiosBusqueda}
            type="text"
            id="buscar_uid"
            placeholder="¿A dónde quieres ir?"
            autoComplete="off"
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/90 backdrop-blur-md shadow-inner focus:outline-none focus:ring-2 focus:ring-white"
          />
          <span className="absolute left-3 top-3 text-gray-400 flex items-center justify-center">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>

      <span><i className="fas fa-map-marker-alt text-black-500 cursor-pointer"></i></span>
    </nav>
  )
}
export default NavBar;