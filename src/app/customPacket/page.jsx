"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveTab,
  setStandardPed,
  setSuperPed,
  setSuperPlusPed,
  setDailyPad,
  setSuperDailyPad,
  setMiniTampon,
  setStandardTampon,
  setSuperTampon,
  setTotalPrice,
} from "../redux/productSlice";
import Recycle from "../../../public/recycle.svg";
import Packet from "../../../public/packet.webp";
import ArrowUp from "../../../public/arrow-up.svg";
import ArrowDown from "../../../public/arrow-down.svg";
import { useMediaQuery } from "react-responsive";

export default function Page() {
  const dispatch = useDispatch();
  const {
    activeTab,
    standardPed,
    superPed,
    superPlusPed,
    dailyPad,
    superDailyPad,
    miniTampon,
    standardTampon,
    superTampon,
    totalPrice,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setTotalPrice());
  }, [
    standardPed,
    superPed,
    superPlusPed,
    dailyPad,
    superDailyPad,
    miniTampon,
    standardTampon,
    superTampon,
    dispatch,
  ]);

  const getPedDescription = () => {
    const descriptions = [];
    if (standardPed > 0) descriptions.push(`${standardPed} Standart Ped`);
    if (superPed > 0) descriptions.push(`${superPed} Süper Ped`);
    if (superPlusPed > 0) descriptions.push(`${superPlusPed} Süper+ Ped`);
    return descriptions.join(" ve ");
  };

  const getDailyPadDescription = () => {
    const descriptions = [];
    if (dailyPad > 0) descriptions.push(`${dailyPad} Günlük Ped`);
    if (superDailyPad > 0)
      descriptions.push(`${superDailyPad} Süper Günlük Ped`);
    return descriptions.join(" ve ");
  };

  const getTamponDescription = () => {
    const descriptions = [];
    if (miniTampon > 0) descriptions.push(`${miniTampon} Mini Tampon`);
    if (standardTampon > 0)
      descriptions.push(`${standardTampon} Standart Tampon`);
    if (superTampon > 0) descriptions.push(`${superTampon} Süper Tampon`);
    return descriptions.join(" ve ");
  };

  const removeFromPedPackage = () => {
    dispatch(setStandardPed(0));
    dispatch(setSuperPed(0));
    dispatch(setSuperPlusPed(0));
  };

  const removeFromDailyPadPackage = () => {
    dispatch(setDailyPad(0));
    dispatch(setSuperDailyPad(0));
  };

  const removeFromTamponPackage = () => {
    dispatch(setMiniTampon(0));
    dispatch(setStandardTampon(0));
    dispatch(setSuperTampon(0));
  };

  const [showDetails, setShowDetails] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 852px)" });

  const handleArrowUpClick = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (
    <main className="flex flex-col w-full flex-grow shrink-0 bg-[#f9f5f2] h-full pt-8">
      <div className="w-full mx-auto block pt-24 lg:max-w-[1152px]">
        <div className="flex md:flex-row flex-col items-start justify-between gap-[7.625rem]">
          <div className="flex flex-col basis-1/2 px-4 items-start gap-[1.5rem]">
            <div className="flex flex-row justify-between w-full items-center">
              <span className="font-medium leading-[130%] text-3xl">
                Kendi Paketini Oluştur
              </span>
              <a href="/" className="leading-[120%]">
                Nasıl Çalışır?
              </a>
            </div>
            <span className="leading-7">
              Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
              miktarlardan, sana özel bir paket oluşturalım.
            </span>
            <div className="flex flex-row items-start justify-between w-full mt-16">
              <button
                onClick={() => dispatch(setActiveTab("ped"))}
                className={`flex items-start basis-1/3 justify-center font-medium pb-2 ${
                  activeTab === "ped"
                    ? "border-b-2 border-black text-black"
                    : "text-[#00000099]"
                }`}
              >
                beije Ped
              </button>
              <button
                onClick={() => dispatch(setActiveTab("dailyPad"))}
                className={`flex items-start basis-1/3 justify-center font-medium pb-2 ${
                  activeTab === "dailyPad"
                    ? "border-b-2 border-black text-black"
                    : "text-[#00000099]"
                }`}
              >
                beije Günlük Ped
              </button>
              <button
                onClick={() => dispatch(setActiveTab("tampon"))}
                className={`flex items-start basis-1/3 justify-center font-medium pb-2 ${
                  activeTab === "tampon"
                    ? "border-b-2 border-black text-black"
                    : "text-[#00000099]"
                }`}
              >
                beije Tampon
              </button>
            </div>
            <div className="flex flex-col w-full mt-8 gap-4">
              {activeTab === "dailyPad" && (
                <div className="flex flex-col gap-4">
                  <label htmlFor="rangeDailyPad" className="block ml-4 text-lg">
                    Günlük Ped
                  </label>
                  <input
                    id="rangeDailyPad"
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    value={dailyPad}
                    onChange={(e) =>
                      dispatch(setDailyPad(parseInt(e.target.value)))
                    }
                    className="mt-2 range-slider range-slider-100"
                  />
                  <div className="flex justify-between items-center">
                    <span>0</span>
                    <span>100</span>
                  </div>
                </div>
              )}

              {activeTab === "ped" && (
                <div className="flex flex-col gap-4">
                  <label htmlFor="rangeStandard" className="block ml-4 text-lg">
                    Standart Ped
                  </label>
                  <input
                    id="rangeStandard"
                    type="range"
                    min="0"
                    max="60"
                    step="10"
                    value={standardPed}
                    onChange={(e) =>
                      dispatch(setStandardPed(parseInt(e.target.value)))
                    }
                    className="mt-2 range-slider"
                  />
                  <div className="flex justify-between items-center">
                    <span>0</span>
                    <span>60</span>
                  </div>
                </div>
              )}

              {activeTab === "tampon" && (
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="rangeMiniTampon"
                    className="block ml-4 text-lg"
                  >
                    Mini Tampon
                  </label>
                  <input
                    id="rangeMiniTampon"
                    type="range"
                    min="0"
                    max="60"
                    step="10"
                    value={miniTampon}
                    onChange={(e) =>
                      dispatch(setMiniTampon(parseInt(e.target.value)))
                    }
                    className="mt-2 range-slider"
                  />
                  <div className="flex justify-between items-center">
                    <span>0</span>
                    <span>60</span>
                  </div>
                </div>
              )}

              {activeTab === "ped" && (
                <div className="flex flex-col gap-4">
                  <label htmlFor="rangeSuper" className="block ml-4 text-lg">
                    Süper Ped
                  </label>
                  <input
                    id="rangeSuper"
                    type="range"
                    min="0"
                    max="60"
                    step="10"
                    value={superPed}
                    onChange={(e) =>
                      dispatch(setSuperPed(parseInt(e.target.value)))
                    }
                    className="mt-2 range-slider"
                  />
                  <div className="flex justify-between items-center">
                    <span>0</span>
                    <span>60</span>
                  </div>
                </div>
              )}

              {activeTab === "dailyPad" && (
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="rangeSuperDailyPad"
                    className="block ml-4 text-lg"
                  >
                    Süper Günlük Ped
                  </label>
                  <input
                    id="rangeSuperDailyPad"
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    value={superDailyPad}
                    onChange={(e) =>
                      dispatch(setSuperDailyPad(parseInt(e.target.value)))
                    }
                    className="mt-2 range-slider range-slider-100"
                  />
                  <div className="flex justify-between items-center">
                    <span>0</span>
                    <span>100</span>
                  </div>
                </div>
              )}

              {activeTab === "tampon" && (
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="rangeStandardTampon"
                    className="block ml-4 text-lg"
                  >
                    Standart Tampon
                  </label>
                  <input
                    id="rangeStandardTampon"
                    type="range"
                    min="0"
                    max="60"
                    step="10"
                    value={standardTampon}
                    onChange={(e) =>
                      dispatch(setStandardTampon(parseInt(e.target.value)))
                    }
                    className="mt-2 range-slider"
                  />
                  <div className="flex justify-between items-center">
                    <span>0</span>
                    <span>60</span>
                  </div>
                </div>
              )}

              {activeTab === "tampon" && (
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="rangeSuperTampon"
                    className="block ml-4 text-lg"
                  >
                    Süper Tampon
                  </label>
                  <input
                    id="rangeSuperTampon"
                    type="range"
                    min="0"
                    max="60"
                    step="10"
                    value={superTampon}
                    onChange={(e) =>
                      dispatch(setSuperTampon(parseInt(e.target.value)))
                    }
                    className="mt-2 range-slider"
                  />
                  <div className="flex justify-between items-center">
                    <span>0</span>
                    <span>60</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:flex md:static sticky w-full bottom-0 left-0 right-0 flex-col bg-white md:basis-1/2 md:rounded-2xl rounded-t-xl gap-6 p-8 px-4 md:shadow-none shadow-xl">
            <span className="text-3xl font-medium md:static hidden">
              Özel Paketin
            </span>
            {!isMobile || showDetails ? (
              <div className="flex flex-row items-center py-3 px-4 rounded-lg shadow-lg gap-4">
                <Image src={Recycle} width={18} alt="Recycle" />
                <span>2 ayda 1 gönderim</span>
              </div>
            ) : null}
            <Image
              src={Packet}
              className="min-w-[402px] md:static hidden md:block"
              alt="Packet"
            />
            {(standardPed > 0 || superPed > 0 || superPlusPed > 0) && (
              <div
                className={`flex flex-col items-start py-3 px-4 rounded-lg shadow-lg gap-2 ${
                  isMobile ? (showDetails ? "block" : "hidden") : "block"
                }`}
              >
                <span className="font-medium text-lg">Ped Paketleri</span>
                <span className="text-[#00000099] font-medium">
                  {getPedDescription()}
                </span>
                <button
                  onClick={removeFromPedPackage}
                  className="font-medium mb-5"
                >
                  Paketten Çıkar
                </button>
              </div>
            )}
            {(dailyPad > 0 || superDailyPad > 0) && (
              <div
                className={`flex flex-col items-start py-3 px-4 rounded-lg shadow-lg gap-2 ${
                  isMobile ? (showDetails ? "block" : "hidden") : "block"
                }`}
              >
                <span className="font-medium text-lg">
                  Günlük Ped Paketleri
                </span>
                <span className="text-[#00000099] font-medium">
                  {getDailyPadDescription()}
                </span>
                <button
                  onClick={removeFromDailyPadPackage}
                  className="font-medium mb-5"
                >
                  Paketten Çıkar
                </button>
              </div>
            )}
            {(miniTampon > 0 || standardTampon > 0 || superTampon > 0) && (
              <div
                className={`flex flex-col items-start py-3 px-4 rounded-lg shadow-lg gap-2 ${
                  isMobile ? (showDetails ? "block" : "hidden") : "block"
                }`}
              >
                <span className="font-medium text-lg">Tampon Paketleri</span>
                <span className="text-[#00000099] font-medium">
                  {getTamponDescription()}
                </span>
                <button
                  onClick={removeFromTamponPackage}
                  className="font-medium mb-5"
                >
                  Paketten Çıkar
                </button>
              </div>
            )}

            <div className="flex md:hidden static flex-row items-center justify-between pt-4">
              <div className="flex flex-row items-center gap-3">
                <span>Toplam</span>
                <button onClick={handleArrowUpClick}>
                    {showDetails ? <Image src={ArrowDown} /> : <Image src={ArrowUp} />}
                </button>
              </div>
              <div>{(totalPrice ?? 0).toFixed(2)}</div>
            </div>
            <button
              className={`w-full ${
                totalPrice === 0
                  ? "text-[#00000042] bg-[#0000001f] pointer-events-none"
                  : "text-white bg-black"
              } flex items-center justify-center font-medium py-3 px-5 mt-8 rounded-3xl text-lg`}
            >
              Sepete Ekle {(totalPrice ?? 0).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
