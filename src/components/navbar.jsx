import React from 'react';
import logo from '../assets/logo.svg';
import { Disclosure } from "@headlessui/react";
import { NavLink } from 'react-router-dom';
import OpenIcon from '../assets/open-icon.svg';
import CloseIcon from '../assets/close-icon.svg';

export const navbar = () => {
  const navigation = [
    'Home',
    'About Me',
    'Education',
    'Skills',
    'Projects',
    'Contact',
  ];

  return (
    <div className='w-full'>
      <nav className="container relative flex flex-row items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* <img src={logo} alt="logo" /> */}
        <Disclosure>
          {({ open }) => (
            <>
            <div className='relative w-full justify-between'>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <NavLink to='/'>
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                  <span>
                    <img className='w-8' src={logo} alt="logo" />
                  </span>
                  <span>Portfolio</span>
                </span>
                </NavLink>

              <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
              </Disclosure.Button>
              </div>

              <Disclosure.Panel className="absolute z-10 flex flex-wrap w-full my-5 lg:hidden bg-white rounded-md shadow-md dark:bg-gray-800">
                  <>
                    {navigation.map((item, index) => (
                      <NavLink key={index} href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item}
                      </NavLink>
                    ))}
                  </>
              </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="flex flex-row items-center justify-center">
            {navigation.map((item, index) => (
              <NavLink key={index} href="/" className="px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none truncate">
                  {item}
              </NavLink>
            ))}
          </div>
        </div>
        
      </nav>

    </div>
  );
}

export default navbar
