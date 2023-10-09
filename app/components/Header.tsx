'use client'

import { useState } from 'react';
import Image from 'next/image'
import { ThemeSwitcher } from '@/app/components/ThemeSwitcher'

export const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const headerScrollTo = (id: string) => {
    const currPath = window.location.pathname

    if (currPath === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setShowMobileMenu(false);
      }
    } else {
      window.location.href = window.location.protocol+'//'+window.location.host+'#'+id
    }

  }

  return (
    <>
      <header className="hidden lg:block relative lg:fixed w-full top-0 border-b border-grey-200 dark:border-grey-600 z-[0] lg:z-30 bg-[#ffffffcc] dark:bg-[#222222cc] backdrop-blur-2xl">
        <nav className="z-50 w-full items-center px-4 py-2 relative lg:sticky lg:top-0 left-0 right-0 top-0">
          <div className="flex justify-between mx-auto max-w-[1392px]">
            <div className="items-center gap-3">
              {/* <Image src="/logo.svg" alt="MKS Logo" className="w-16" width={50} height={24} priority /> */}
              {/* <a className="font-semibold dark:text-grey-500 brand-primary" href="/">MAP <span className="font-light brand-primary">CA</span></a> */}
              <a className='grid font-semibold dark:text-grey-500 brand-primary' href='/'> <span>MAP & Co</span><span className='font-light text-sm'>Chartered Accountants</span></a>
            </div>
            <ol className="mx-auto w-max z-10 flex items-center hidden lg:flex">
              <li className="group relative list-none hover:scale-110 py-3 px-7 cursor-pointer dark:text-grey-500">
                <a className="relative flex items-center justify-center" onClick={()=>{headerScrollTo('home')}}>Home</a>
              </li>
              <li className="group relative list-none hover:scale-110 py-3 px-7 cursor-pointer dark:text-grey-500">
                <a className="relative z-10 flex items-center justify-center" onClick={()=>{headerScrollTo('service')}}>Service</a>
              </li>
              <li className="group relative list-none hover:scale-110 py-3 px-7 cursor-pointer dark:text-grey-500">
                <a className="relative z-10 flex items-center justify-center" onClick={()=>{headerScrollTo('resource')}}>Why Choose Us</a>
              </li>
              <li className="group relative list-none hover:scale-110 py-3 px-7 cursor-pointer dark:text-grey-500">
                <a className="relative z-10 flex items-center justify-center" onClick={()=>{headerScrollTo('team')}}>Team</a>
              </li>
              <li className="group relative list-none hover:scale-110 py-3 px-7 cursor-pointer dark:text-grey-500">
                <a className="relative z-10 flex items-center justify-center" onClick={()=>{headerScrollTo('contact')}}>Contact Us</a>
              </li>
            </ol>
            <a rel="noreferrer" href="" className="btn flex items-center justify-center gap-4 hidden text-small md:flex black sm ">
              <ThemeSwitcher />
            </a>
          </div>
        </nav>
      </header>

      <nav className="lg:hidden relative z-10">
        {showMobileMenu ? 
          <>
            <div className="fixed h-full w-full bg-[#3333334d] dark:bg-[#e8e8e84d] top-0 backdrop-blur"></div>
            <div className="fixed bottom-[80px] right-5 items-end justify-end flex lg:hidden flex-col gap-2">
                <div className="py-3 px-8 rounded-3xl text-grey-400 dark:text-grey-300 cursor-pointer dark:hover:text-grey-500 hover focus:ring-4 ring-[grey] dark:shadow-dark font-normal bg-[#ffffffe0] hover:bg-[#f5f5f7cc] dark:hover:bg-[#2b2b2bcc] dark:bg-[#222222e0] z-20 backdrop-blur-lg border-[0.5px] border-[#33333329] dark:border-grey-600" style={{opacity: 1, transform: 'none'}}><span className="false inline-block" onClick={()=>{headerScrollTo('home')}}>Home</span></div>
                <div className="py-3 px-8 rounded-3xl text-grey-400 dark:text-grey-300 cursor-pointer dark:hover:text-grey-500 hover focus:ring-4 ring-[grey] dark:shadow-dark font-normal bg-[#ffffffe0] hover:bg-[#f5f5f7cc] dark:hover:bg-[#2b2b2bcc] dark:bg-[#222222e0] z-20 backdrop-blur-lg border-[0.5px] border-[#33333329] dark:border-grey-600" style={{opacity: 1, transform: 'none'}}><span className="false inline-block" onClick={()=>{headerScrollTo('service')}}>Service</span></div>
                <div className="py-3 px-8 rounded-3xl text-grey-400 dark:text-grey-300 cursor-pointer dark:hover:text-grey-500 hover focus:ring-4 ring-[grey] dark:shadow-dark font-normal bg-[#ffffffe0] hover:bg-[#f5f5f7cc] dark:hover:bg-[#2b2b2bcc] dark:bg-[#222222e0] z-20 backdrop-blur-lg border-[0.5px] border-[#33333329] dark:border-grey-600" style={{opacity: 1, transform: 'none'}}><span className="false inline-block" onClick={()=>{headerScrollTo('resource')}}>Why Choose Us</span></div>
                <div className="py-3 px-8 rounded-3xl text-grey-400 dark:text-grey-300 cursor-pointer dark:hover:text-grey-500 hover focus:ring-4 ring-[grey] dark:shadow-dark font-normal bg-[#ffffffe0] hover:bg-[#f5f5f7cc] dark:hover:bg-[#2b2b2bcc] dark:bg-[#222222e0] z-20 backdrop-blur-lg border-[0.5px] border-[#33333329] dark:border-grey-600" style={{opacity: 1, transform: 'none'}}><span className="false inline-block" onClick={()=>{headerScrollTo('team')}}>Team</span></div>
                <div className="py-3 px-8 rounded-3xl text-grey-400 dark:text-grey-300 cursor-pointer dark:hover:text-grey-500 hover focus:ring-4 ring-[grey] dark:shadow-dark font-normal bg-[#ffffffe0] hover:bg-[#f5f5f7cc] dark:hover:bg-[#2b2b2bcc] dark:bg-[#222222e0] z-20 backdrop-blur-lg border-[0.5px] border-[#33333329] dark:border-grey-600" style={{opacity: 1, transform: 'none'}}><span className="false inline-block" onClick={()=>{headerScrollTo('contact')}}>Contact Us</span></div>
            </div>
          </>
          :
          ''
        }
        <button className="py-3 px-8 text-white focus:ring-4 ring-[grey] rounded-3xl bg-[#333333cc] dark:bg-[#ffffffcc] backdrop-blur-lg fixed dark:text-slate-800 bottom-6 right-6 font-normal" onClick={()=>{setShowMobileMenu(!showMobileMenu)}}>Menu</button>
      </nav>
    </>
  );
};