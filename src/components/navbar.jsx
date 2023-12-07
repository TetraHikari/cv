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
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* <img src={logo} alt="logo" /> */}
        <Disclosure>
          {({ open }) => (
            <>
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
                  {open ? <img src={OpenIcon} /> : <img src={CloseIcon} />}
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
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
        
      </nav>

    </div>
  );
}

export default navbar
