import React from "react";
import { Page, useNavigate, Icon } from "zmp-ui";

import mascotImg from "../static/images/Mascot Hito_9 1.png"; 
import bgIndex from "../static/images/bg_home1.png"; 
import iconLink from "../static/icons/chain.png"; 
import iconWeb from "../static/icons/world.png"; 
import iconUser from "../static/icons/brain.png"; 

const HomePage = () => {
  const navigate = useNavigate();

  const menuLinks = [
    { label: "Thông tin thêm", img: iconLink, reverse: false, path: "/about" },
    { label: "Website chính thức", img: iconWeb, reverse: true, path: "/web" },
    { label: "Kiểm tra thần số học", img: iconUser, reverse: false, path: "/numerology" },
  ];

  return (
    <Page className="relative p-0 m-0 overflow-hidden font-['Be_Vietnam_Pro'] min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10">
        <img src={bgIndex} alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Nút điều hướng nổi - Chỉ có nút Tiếp theo */}
      <div className="absolute top-[42px] right-4 z-[100]">
        <div onClick={() => navigate("/quiz1")} className="w-10 h-10 bg-white/70 backdrop-blur-md shadow-sm border border-white/50 rounded-full flex items-center justify-center cursor-pointer active:scale-90 transition-transform">
          <Icon icon="zi-chevron-right" className="text-[#11397b] text-xl font-black pl-0.5" />
        </div>
      </div>

      <div className="flex flex-col h-screen w-full">
        <div className="flex justify-around px-16 pt-[50px] gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-2 flex-1 bg-white rounded-full shadow-sm opacity-80"></div>
          ))}
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-8">
          <div className="w-[70%] max-w-[260px] aspect-square flex items-center justify-center">
             <img src={mascotImg} alt="Mascot" className="w-full h-full object-contain" />
          </div>

          <h1 className="mt-6 text-[34px] md:text-[40px] font-black text-[#11397b] text-center leading-tight tracking-tighter drop-shadow-sm">
            Khảo Sát Cùng Hito
          </h1>

          <button onClick={() => navigate("/quiz1")} className="mt-8 w-full max-w-[320px] py-4 bg-[#003570] text-white text-lg font-bold rounded-2xl shadow-xl active:scale-95 transition-all">
            Bắt đầu ngay
          </button>
        </div>

        <div className="px-8 pb-10 flex flex-col gap-3">
          {menuLinks.map((item, index) => (
            <div key={index} onClick={() => navigate(item.path)} className={`flex items-center ${item.reverse ? "flex-row-reverse" : ""} group cursor-pointer`}>
              <div className={`bg-[#ffadad] w-12 h-12 flex items-center justify-center shadow-sm z-10 ${item.reverse ? "rounded-r-2xl rounded-l-none" : "rounded-l-2xl rounded-r-none"}`}>
                <img src={item.img} alt={item.label} className="w-6 h-6 object-contain" />
              </div>
              <div className={`flex-1 bg-white/30 backdrop-blur-lg py-3 px-4 rounded-2xl border border-white/40 text-white font-semibold text-sm ${item.reverse ? "rounded-r-none text-right mr-[-4px]" : "rounded-l-none ml-[-4px]"}`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default HomePage;