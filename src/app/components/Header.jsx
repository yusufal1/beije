"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import Basket from '../../../public/basket.svg';
import Profile from '../../../public/profile.svg';
import Hamburger from '../../../public/hamburger.svg';


const Header = () => {
 

  return (
    <header className='flex flex-col fixed top-0 left-auto right-0 shrink-0 z-50 bg-primary justify-center items-center w-full p-6'>
      <div className='w-full mx-auto flex flex-row gap-6 lg:max-w-[1152px]'>
        <div className='flex items-center w-[172px]'>
          <a href="/">
            <Image src={Logo} width={56.39}/>
          </a>
        </div>
        <nav className='md:flex hidden gap-8 flex-grow flex-nowrap'>
          <div className='inline-flex relative'>
            <a href='/' className='text-[#000000e6] text-nowrap'>Ürünler</a>
          </div>
          <div className='inline-flex relative'>
            <a href='/' className='text-[#000000e6] text-nowrap'>Biz Kimiz?</a>
          </div>
          <div className='inline-flex relative'>
            <a href='/' className='text-[#000000e6] text-nowrap'>Bağış Kültürü</a>
          </div>
          <div className='inline-flex relative'>
            <a href='/' className='text-[#000000e6] text-nowrap'>Regl Testi!</a>
          </div>
          <div className='inline-flex relative'>
            <a href='/' className='text-[#000000e6] text-nowrap'>Kendi Paketini Oluştur</a>
          </div>
        </nav>
        <nav className='flex justify-end gap-4 flex-grow'>
          <a href="/">
            <span className='relative inline-flex align-middle'>
              <Image src={Basket} width={24}/>
            </span>
          </a>
          <a href="/">
            <span className='relative inline-flex align-middle'>
              <Image src={Profile} width={24}/>
            </span>
          </a>
          <a href="/">
            <span className='relative inline-flex align-middle'>
            <Image src={Hamburger} width={24}/>
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
