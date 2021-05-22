import React from 'react'
import { Link } from "react-router-dom";
const Partners = () => {
  return (
    <section
        className="h-screen-70vh bg-no-repeat bg-fixed bg-cover bg-top-center"
        style={{ backgroundImage: "url('assets/img/bg.jpg.webp')" }}
      >
        <div className="container mx-auto h-full flex justify-center items-center">
          <div className="max-w-5xl flex flex-col justify-center">
            <h1 className="text-white text-7xl font-extrabold tracking-tight mb-2">
              Be one of our partners!
            </h1>
            <p className="text-white mb-8">
              Do you have properties you want to rent?
            </p>
            <Link
              to="/partners/signup"
              className="font-normal w-max text-2xl px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-400 hover:bg-red-500"
            >
              Join us!
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Partners
