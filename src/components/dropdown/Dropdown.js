import Link from "next/link";
import React from "react";

const category = [
  { id: 1, title: "WebDevelopment" },
  // { id: 1, title: "Programming" },
];

const webDevelopment = [
  { href: "frontend", label: "Frontend Development Course" },
  { href: "backend", label: "Backend Development Course" },
  { href: "fullstack", label: "Fullstack Development Course" },
];

const Programming = [
  { href: "cpp", label: "C / C++" },
  { href: "java", label: "Java" },
  { href: "python", label: "Python" },
];

export default function Dropdown() {
  const [popup, setPopup] = React.useState(false);

  const [webdev, setWebdev] = React.useState("");
  //   const [prog, setProg] = React.useState(webDevlopment());

  const toggleClick = () => {
    setPopup(!popup);
  };

  return (
    <div className="dropdown inline-block relative">
      <button className="bg-[#f0f0f0] text-[13px] font-semibold p-[9px] px-[16px] text-gray-700 rounded flex items-center">
        <p className="mr-1">Courses</p>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </button>

      {/* Mobile Dropdown */}
      <div className="block md:hidden">
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-2 w-[250px] md:w-[300px] right-0 sm:left-0 ">
          <li className=" rounded-t bg-white py-2 px-4 font-bold ">Category</li>
          <li className=" wdropdown  bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap">
            <span className="flex gap-4 items-center">
              <p> Web Development </p>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </span>

            <ul className=" wdropdown-menu absolute hidden text-gray-700 pt-1  left-0 md:right-0">
              {webDevelopment.map(({ href, label }) => (
                <li
                  key={`/web-development/${href}${label}`}
                  className=" bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                >
                  <Link
                    href={`/web-development/${href}`}
                    className="hover:text-gray-600"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* <li className="bg-white pdropdown hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap">
            <span className="flex gap-4 items-center">
              <p> Programming </p>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </span>

            <ul className=" pdropdown-menu absolute hidden text-gray-700 pt-1 ">
              {Programming.map(({ href, label }) => (
                <li
                  key={`${href}${label}`}
                  className=" bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                >
                  <Link
                    href={`/programming/${href}`}
                    className="hover:text-gray-600"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
        </ul>
      </div>

      {/* Desktop Dropdown */}

      <div className="hidden md:block">
        <div className="absolute dropdown-menu hidden w-[500px]  bg-white shadow-xl transition-all delay-1000 ">
          <div className="flex gap-4 ">
            <div className="border-r border-gray-200">
              <h2 className="font-bold p-3">Category</h2>
              <div>
                <ul className="  text-gray-700  ">
                  {category.map(({ title, id }) => (
                    <li
                      key={id}
                      className=" bg-white hover:bg-gray-200 py-2 block whitespace-no-wrap"
                    >
                      <p className="px-3">{title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <h2 className="font-bold py-3">Courses</h2>
              <ul className="  text-gray-700 ">
                {webDevelopment.map(({ href, label }) => (
                  <li
                    key={`/web-development/${href}${label}`}
                    className=" bg-white hover:text-red-500 py-2  block whitespace-no-wrap"
                  >
                    <Link
                      href={`/web-development/${href}`}
                      className="hover:text-red-500"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
