import Image from "next/image";
import React from 'react';

const Footer = () => {

  return (
    <>
      <footer className="w-full flex flex-col items-center gap-4 py-5  text-white "
        style={{ backgroundColor: "var(--primary-color)" }}>
        <div className="flex flex-wrap items-center justify-center gap-6">

          <a
            className="flex items-center gap-2 hover:underline"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="filter invert" // This will make the logo white
              src="https://nextjs.org/icons/next.svg"
              alt="Next.js logo"
              width={70}
              height={20}
              priority
            />
          </a>
        </div>
        <div className="text-center">
          <p>© 2024 Engineer's Production. All rights reserved.</p>
          <p>
            Contact us:{" "}
            <a
              href="mailto:engr.atherali@gmail.com"
              className="hover:underline"
            >
              engr.atherali@gmail.com
            </a>
          </p>
          <div className=" h-20 mx-auto text-5xl flex justify-center gap-8 items-center">
            {/* github account link */}
            <a
              href="https://github.com/Eng-Ather"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-square-github text-black"></i></a>

            {/*    Linkedin account link */}
            <a
              href="https://www.linkedin.com/in/eng-ather-ali-21bb29266/"
              target="_blank">
              <i className="fa-brands fa-linkedin text-blue-800"></i>
            </a>

            {/*    npm account link */}
            <a
              href="https://www.npmjs.com/~ather.siddiqui"
              target="_blank">
              <i className="fa-brands fa-npm text-red-500 text-5xl "></i>
            </a>
          </div>

          <p>Version 1.0.0</p>
        </div>
      </footer>

    </>
  )
}

export default Footer