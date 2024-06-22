"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Recycle from '../../public/recycle.svg';
import Packet from '../../public/packet.webp';

export default function Home() {
  const [activeTab, setActiveTab] = useState('ped');
  const [standardPed, setStandardPed] = useState(0);
  const [superPed, setSuperPed] = useState(0);
  const [superPlusPed, setSuperPlusPed] = useState(0);

  const [dailyPad, setDailyPad] = useState(0);
  const [superDailyPad, setSuperDailyPad] = useState(0);

  const [miniTampon, setMiniTampon] = useState(0);
  const [standardTampon, setStandardTampon] = useState(0);
  const [superTampon, setSuperTampon] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    // Ped fiyatları
    switch (standardPed) {
      case 10: price += 60.84; break;
      case 20: price += 119.85; break;
      case 30: price += 179.41; break;
      case 40: price += 239.70; break;
      case 50: price += 299.26; break;
      case 60: price += 358.82; break;
    }
    switch (superPed) {
      case 10: price += 71.40; break;
      case 20: price += 140.01; break;
      case 30: price += 208.42; break;
      case 40: price += 279.82; break;
      case 50: price += 348.43; break;
      case 60: price += 416.84; break;
    }
    switch (superPlusPed) {
      case 10: price += 80.03; break;
      case 20: price += 158.21; break;
      case 30: price += 235.74; break;
      case 40: price += 315.77; break;
      case 50: price += 393.95; break;
      case 60: price += 471.48; break;
    }

    // Günlük Ped fiyatları
    switch (dailyPad) {
      case 10: price += 37.59; break;
      case 20: price += 57.79; break;
      case 30: price += 80.11; break;
      case 40: price += 115.58; break;
      case 50: price += 127.30; break;
      case 60: price += 160.22; break;
      case 70: price += 185.09; break;
      case 80: price += 207.41; break;
      case 90: price += 240.33; break;
      case 100: price += 254.60; break;
    }
    switch (superDailyPad) {
      case 10: price += 43.23; break;
      case 20: price += 72.73; break;
      case 30: price += 105.45; break;
      case 40: price += 145.46; break;
      case 50: price += 172.84; break;
      case 60: price += 210.90; break;
      case 70: price += 245.57; break;
      case 80: price += 278.29; break;
      case 90: price += 316.35; break;
      case 100: price += 345.68; break;
    }

    // Tampon fiyatları
    switch (miniTampon) {
      case 10: price += 78.74; break;
      case 20: price += 154.47; break;
      case 30: price += 228.81; break;
      case 40: price += 307.55; break;
      case 50: price += 383.28; break;
      case 60: price += 457.62; break;
    }
    switch (standardTampon) {
      case 10: price += 84.88; break;
      case 20: price += 165.10; break;
      case 30: price += 247.23; break;
      case 40: price += 330.20; break;
      case 50: price += 412.33; break;
      case 60: price += 494.46; break;
    }
    switch (superTampon) {
      case 10: price += 89.74; break;
      case 20: price += 178.16; break;
      case 30: price += 263.45; break;
      case 40: price += 353.19; break;
      case 50: price += 441.61; break;
      case 60: price += 526.90; break;
    }

    setTotalPrice(price);
  }, [standardPed, superPed, superPlusPed, dailyPad, superDailyPad, miniTampon, standardTampon, superTampon]);

  const getPedDescription = () => {
    const descriptions = [];
    if (standardPed > 0) descriptions.push(`${standardPed} Standart Ped`);
    if (superPed > 0) descriptions.push(`${superPed} Süper Ped`);
    if (superPlusPed > 0) descriptions.push(`${superPlusPed} Süper+ Ped`);
    return descriptions.join(' ve ');
  };

  const getDailyPadDescription = () => {
    const descriptions = [];
    if (dailyPad > 0) descriptions.push(`${dailyPad} Günlük Ped`);
    if (superDailyPad > 0) descriptions.push(`${superDailyPad} Süper Günlük Ped`);
    return descriptions.join(' ve ');
  };

  const getTamponDescription = () => {
    const descriptions = [];
    if (miniTampon > 0) descriptions.push(`${miniTampon} Mini Tampon`);
    if (standardTampon > 0) descriptions.push(`${standardTampon} Standart Tampon`);
    if (superTampon > 0) descriptions.push(`${superTampon} Süper Tampon`);
    return descriptions.join(' ve ');
  };

  return (
    <main className="flex flex-col w-full flex-grow shrink-0 bg-[#f9f5f2] h-full px-4 pt-8">
      <div className="w-full mx-auto block py-24 lg:max-w-[1152px]">
        <div className="flex md:flex-row flex-col items-start justify-between gap-[7.625rem]">
          <div className="flex flex-col basis-1/2 items-start gap-[1.5rem]">
            <div className="flex flex-row justify-between w-full items-center">
              <span className="font-medium leading-[130%] text-3xl">Kendi Paketini Oluştur</span>
              <a href="/" className="leading-[120%]">Nasıl Çalışır?</a>
            </div>
            <span className="leading-7">Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, sana özel bir paket oluşturalım.</span>
            <div className="flex flex-row items-start justify-between w-full mt-16">
              <button
                onClick={() => setActiveTab('ped')}
                className={`flex items-start basis-1/3 justify-center font-medium pb-2 ${activeTab === 'ped' ? 'border-b-2 border-black text-black' : 'text-[#00000099]'}`}
              >
                beije Ped
              </button>
              <button
                onClick={() => setActiveTab('dailyPad')}
                className={`flex items-start basis-1/3 justify-center font-medium pb-2 ${activeTab === 'dailyPad' ? 'border-b-2 border-black text-black' : 'text-[#00000099]'}`}
              >
                beije Günlük Ped
              </button>
              <button
                onClick={() => setActiveTab('tampon')}
                className={`flex items-start basis-1/3 justify-center font-medium pb-2 ${activeTab === 'tampon' ? 'border-b-2 border-black text-black' : 'text-[#00000099]'}`}
              >
                beije Tampon
              </button>
            </div>
            <div className="flex flex-col w-full mt-8 gap-4">
            {activeTab === 'dailyPad' && (
  <div className="flex flex-col gap-4">
    <label htmlFor="rangeDailyPad" className="block ml-4 text-lg">Günlük Ped</label>
    <input id="rangeDailyPad" type="range" min="0" max="100" step="10" value={dailyPad} onChange={(e) => setDailyPad(parseInt(e.target.value))} className="mt-2 range-slider" />
    <div className="flex justify-between items-center">
      <span>0</span>
      <span>100</span>
    </div>
  </div>
)}

{activeTab === 'ped' && (
  <div className="flex flex-col gap-4">
    <label htmlFor="rangeStandard" className="block ml-4 text-lg">Standart Ped</label>
    <input id="rangeStandard" type="range" min="0" max="60" step="10" value={standardPed} onChange={(e) => setStandardPed(parseInt(e.target.value))} className="mt-2 range-slider" />
    <div className="flex justify-between items-center">
      <span>0</span>
      <span>60</span>
    </div>
  </div>
)}

{activeTab === 'tampon' && (
  <div className="flex flex-col gap-4">
    <label htmlFor="rangeMiniTampon" className="block ml-4 text-lg">Mini Tampon</label>
    <input id="rangeMiniTampon" type="range" min="0" max="60" step="10" value={miniTampon} onChange={(e) => setMiniTampon(parseInt(e.target.value))} className="mt-2 range-slider" />
    <div className="flex justify-between items-center">
      <span>0</span>
      <span>60</span>
    </div>
  </div>
)}

{activeTab === 'ped' && (
  <div className='flex flex-col gap-4'>
    <label htmlFor="rangeSuper" className="block ml-4 text-lg">Süper Ped</label>
    <input id="rangeSuper" type="range" min="0" max="60" step="10" value={superPed} onChange={(e) => setSuperPed(parseInt(e.target.value))} className="mt-2 range-slider" />
    <div className='flex justify-between items-center'>
      <span>0</span>
      <span>60</span>
    </div>
  </div>
)}

{activeTab === 'dailyPad' && (
  <div className='flex flex-col gap-4'>
    <label htmlFor="rangeSuperDailyPad" className="block ml-4 text-lg">Süper Günlük Ped</label>
    <input id="rangeSuperDailyPad" type="range" min="0" max="100" step="10" value={superDailyPad} onChange={(e) => setSuperDailyPad(parseInt(e.target.value))} className="mt-2 range-slider" />
    <div className='flex justify-between items-center'>
      <span>0</span>
      <span>100</span>
    </div>
  </div>
)}

{activeTab === 'tampon' && (
  <div className='flex flex-col gap-4'>
    <label htmlFor="rangeStandardTampon" className="block ml-4 text-lg">Standart Tampon</label>
    <input id="rangeStandardTampon" type="range" min="0" max="60" step="10" value={standardTampon} onChange={(e) => setStandardTampon(parseInt(e.target.value))} className="mt-2 range-slider" />
    <div className='flex justify-between items-center'>
      <span>0</span>
      <span>60</span>
    </div>
  </div>
)}

{activeTab === 'tampon' && (
  <div className='flex flex-col gap-4'>
    <label htmlFor="rangeSuperTampon" className="block ml-4 text-lg">Süper Tampon</label>
    <input id="rangeSuperTampon" type="range" min="0" max="60" step="10" value={superTampon} onChange={(e) => setSuperTampon(parseInt(e.target.value))} className="mt-2 range-slider" />
    <div className='flex justify-between items-center'>
      <span>0</span>
      <span>60</span>
    </div>
  </div>
)}
            </div>
          </div>
          <div className="md:flex hidden flex-col bg-white basis-1/2 rounded-2xl gap-6 p-8">
            <span className="text-3xl font-medium">Özel Paketin</span>
            <div className="flex flex-row items-center py-3 px-4 rounded-lg shadow-lg gap-4">
              <Image src={Recycle} width={18} alt="Recycle"/>
              <span>2 ayda 1 gönderim</span>
            </div>
            <Image src={Packet} className="min-w-[402px]" alt="Packet"/>
            { (standardPed > 0 || superPed > 0 || superPlusPed > 0) && (
              <div className="flex flex-col items-start py-3 px-4 rounded-lg shadow-lg gap-2">
                <span className="font-medium text-lg">Ped Paketleri</span>
                <span className="text-[#00000099] font-medium">
                  {getPedDescription()}
                </span>
                <span className="font-medium mb-5">
                  Paketten Çıkar
                </span>
              </div>
            )}
            {(dailyPad > 0 || superDailyPad > 0) && (
              <div className="flex flex-col items-start py-3 px-4 rounded-lg shadow-lg gap-2">
                <span className="font-medium text-lg">Günlük Ped Paketleri</span>
                <span className="text-[#00000099] font-medium">
                  {getDailyPadDescription()}
                </span>
                <span className="font-medium mb-5">
                  Paketten Çıkar
                </span>
              </div>
            )}
            {(miniTampon > 0 || standardTampon > 0 || superTampon > 0) && (
              <div className="flex flex-col items-start py-3 px-4 rounded-lg shadow-lg gap-2">
                <span className="font-medium text-lg">Tampon Paketleri</span>
                <span className="text-[#00000099] font-medium">
                  {getTamponDescription()}
                </span>
                <span className="font-medium mb-5">
                  Paketten Çıkar
                </span>
              </div>
            )}
            <button className={`w-full ${totalPrice === 0 ? 'text-[#00000042] bg-[#0000001f] pointer-events-none' : 'text-white bg-black'} flex items-center justify-center font-medium py-3 px-5 mt-8 rounded-3xl text-lg`}>
              Sepete Ekle (₺{totalPrice.toFixed(2)})
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
