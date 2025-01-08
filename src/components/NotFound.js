import React from "react";

function NotFound() {
  return (
    <>
      <section className="NotFound bg-Background flex flex-col justify-center items-center h-[85vh] w-full">
        <h1 className="font-Montserrat font-medium lg:text-9xl md:text-4xl sm:text-2xl">
          404
        </h1>
        <p className="font-Orbitron font-normal lg:text-lg md:text-base sm:text-sm">
          Page Not Found
        </p>
      </section>
    </>
  );
}

export default NotFound;
