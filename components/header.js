import React from "react";
import { cx } from "@utils/all";

export default function Header(props) {

  return (

      <div className="text-center bg-light text-gray-800 py-8 px-6 dark:bg-dark text-gray-400">
      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Bienvenido a <br /><span className="text-blue-600">Dinámica Cooperativa</span></h1>
      <p className="mt-2 text-xl text-gray-500 dark:text-gray-400 line-clamp-3">Piensa distinto, duda y sigue adelante</p>
    </div>
  );
}
