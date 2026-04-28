import React, { useState } from "react";
import { Page, useNavigate, Modal, Icon } from "zmp-ui";
import { useFormState } from "../hooks/useFormState";
// Lưu ý: Đổi tên file ảnh mascot du học (xách vali) cho đúng với source của bạn
import mascotStudyAbroadImg from "../static/images/Mascot Hito_9 1.png"; 
import bgIndex from "../static/images/bg_home1.png"; 

const Quiz2_3Page = () => {
  const navigate = useNavigate();
  
  // --- States cho Quốc gia ---
  const [country, setCountry] = useFormState("country", "");
  const [isCountryOpen, setIsCountryOpen] = useFormState("isCountryOpen", false);
  const countryOptions = ["Mỹ", "Nhật Bản", "Hàn Quốc", "Úc", "Canada", "Anh", "Singapore", "Khác"];

  // --- States cho Ngành học ---
  const [major, setMajor] = useFormState("major", "");
  const [isMajorOpen, setIsMajorOpen] = useFormState("isMajorOpen", false);
  const majorOptions = ["Kinh tế", "Kỹ thuật", "Công nghệ thông tin (IT)", "Y Dược", "Nghệ thuật - Thiết kế", "Khác"];

  // State Modal xác nhận
  const [isConfirmVisible, setIsConfirmVisible] = useFormState("isConfirmVisible", false);

  // Xử lý Ghi nhận
  const handleRecord = () => {
    if (!country || !major) {
      alert("Vui lòng nhập/chọn đầy đủ Quốc gia và Ngành học!");
      return;
    }
    setIsConfirmVisible(true);
  };

  const handleConfirm = () => {
    setIsConfirmVisible(false);
    navigate("/thanks"); // Đổi thành trang đích tiếp theo (ví dụ trang Cảm ơn)
  };

  // SVG Icon Tam giác Dropdown
  const SolidCaret = ({ isOpen, onClick }) => (
    <div 
      className="absolute right-0 top-0 bottom-0 w-10 flex items-center justify-center cursor-pointer z-20"
      onClick={onClick}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`w-3 h-3 text-[#11397b] transition-transform duration-300 mt-2 ${isOpen ? "rotate-180" : ""}`} 
        viewBox="0 0 320 512" 
        fill="currentColor"
      >
        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
      </svg>
    </div>
  );

  // Xử lý đóng các dropdown khác khi click
  const toggleCountry = () => { setIsCountryOpen(true); setIsMajorOpen(false); };
  const toggleMajor = () => { setIsMajorOpen(true); setIsCountryOpen(false); };

  return (
    <Page className="relative p-0 m-0 overflow-hidden font-['Be_Vietnam_Pro'] min-h-screen flex flex-col">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img src={bgIndex} alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* ================= NÚT ĐIỀU HƯỚNG NỔI ================= */}
      <div className="absolute top-[42px] left-0 w-full px-4 flex justify-between z-[100]">
        {/* Nút Trở về */}
        <div 
          onClick={() => navigate(-1)} 
          className="w-10 h-10 bg-white/70 backdrop-blur-md shadow-sm border border-white/50 rounded-full flex items-center justify-center cursor-pointer active:scale-90 transition-transform"
        >
          <Icon icon="zi-chevron-left" className="text-[#11397b] text-xl font-black pr-0.5" />
        </div>

        {/* Nút Tiếp theo (Gọi hàm handleRecord để validate trước khi đi tiếp) */}
        <div 
          onClick={handleRecord} 
          className="w-10 h-10 bg-white/70 backdrop-blur-md shadow-sm border border-white/50 rounded-full flex items-center justify-center cursor-pointer active:scale-90 transition-transform"
        >
          <Icon icon="zi-chevron-right" className="text-[#11397b] text-xl font-black pl-0.5" />
        </div>
      </div>

      <div className="flex flex-col h-screen w-full">
        
        {/* Header Progress Bar - Sáng 4 thanh (bước cuối nhánh du học) */}
        <div className="flex justify-around px-16 pt-[50px] gap-2 shrink-0 relative z-0">
          <div className="h-2 flex-1 bg-[#003570] rounded-full shadow-sm"></div>
          <div className="h-2 flex-1 bg-[#003570] rounded-full shadow-sm"></div>
          <div className="h-2 flex-1 bg-[#003570] rounded-full shadow-sm"></div>
          <div className="h-2 flex-1 bg-[#003570] rounded-full shadow-sm"></div>
        </div>

        {/* Mascot Area - Mascot Xách Vali Du Học */}
        <div className="flex justify-center items-end pt-12 -mb-8 relative z-0 pointer-events-none">
          <div className="w-56 md:w-64">
             <img src={mascotStudyAbroadImg} className="w-full h-auto object-contain drop-shadow-lg" alt="mascot du học" />
          </div>
        </div>

        {/* Form Container */}
        <div className="flex-1 px-4 pb-12 relative z-10 flex flex-col justify-start">
          <div className="bg-white/95 backdrop-blur-md rounded-[35px] shadow-2xl p-6 pb-8 flex flex-col border border-white">
            
            {/* Box Câu hỏi (Glassmorphism) */}
            <div className="bg-gradient-to-b from-[#e2ebf5]/80 to-[#ffffff]/90 backdrop-blur-sm border border-white rounded-3xl p-6 shadow-inner mb-8 flex items-center justify-center min-h-[110px]">
              <h2 className="text-[22px] md:text-[26px] font-black text-[#11397b] text-center leading-tight tracking-tighter px-2 drop-shadow-sm">
                Quốc gia và ngành học<br/>bạn quan tâm là gì?
              </h2>
            </div>

            {/* Form Fields Area */}
            <div className="flex flex-col gap-5 overflow-visible">
              
              {/* Dropdown 1: Quốc Gia (Cho phép nhập hoặc chọn) */}
              <fieldset className="border-2 border-[#11397b] rounded-xl px-3 pb-1 relative bg-white z-50">
                <legend className="text-[#11397b] font-bold px-2 ml-2 text-xs">Quốc Gia</legend>
                <input 
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  onClick={toggleCountry}
                  placeholder="Mỹ, Nhật Bản,..." 
                  className="w-full bg-transparent outline-none text-[#11397b] font-medium py-1 pr-8 relative z-10" 
                />
                <SolidCaret isOpen={isCountryOpen} onClick={() => setIsCountryOpen(!isCountryOpen)} />
                
                {isCountryOpen && (
                  <ul className="absolute left-0 right-0 top-[110%] bg-white border-2 border-[#11397b] rounded-xl shadow-xl max-h-48 overflow-y-auto z-[99]">
                    {countryOptions.map((opt, idx) => (
                      <li 
                        key={idx} 
                        onClick={() => { setCountry(opt); setIsCountryOpen(false); }}
                        className="px-4 py-2 text-[#11397b] font-medium hover:bg-slate-100 cursor-pointer border-b border-gray-100 last:border-none"
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
              </fieldset>

              {/* Dropdown 2: Ngành học (Cho phép nhập hoặc chọn) */}
              <fieldset className="border-2 border-[#11397b] rounded-xl px-3 pb-1 relative bg-white z-40">
                <legend className="text-[#11397b] font-bold px-2 ml-2 text-xs">Ngành học</legend>
                <input 
                  type="text"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  onClick={toggleMajor}
                  placeholder="Kinh tế, Kĩ thuật" 
                  className="w-full bg-transparent outline-none text-[#11397b] font-medium py-1 pr-8 relative z-10" 
                />
                <SolidCaret isOpen={isMajorOpen} onClick={() => setIsMajorOpen(!isMajorOpen)} />
                
                {isMajorOpen && (
                  <ul className="absolute left-0 right-0 top-[110%] bg-white border-2 border-[#11397b] rounded-xl shadow-xl max-h-48 overflow-y-auto z-[99]">
                    {majorOptions.map((opt, idx) => (
                      <li 
                        key={idx} 
                        onClick={() => { setMajor(opt); setIsMajorOpen(false); }}
                        className="px-4 py-2 text-[#11397b] font-medium hover:bg-slate-100 cursor-pointer border-b border-gray-100 last:border-none"
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
              </fieldset>

              {/* Nút Ghi nhận */}
              <button 
                onClick={handleRecord}
                className="w-full py-4 bg-[#003570] text-white text-lg font-bold rounded-2xl shadow-xl active:scale-95 transition-all mt-4 relative z-10"
              >
                Ghi nhận
              </button>

            </div>
          </div>
        </div>

      </div>

      {/* Hộp thoại xác nhận */}
      <Modal
        visible={isConfirmVisible}
        title="Xác nhận"
        onClose={() => setIsConfirmVisible(false)}
        verticalActions
      >
        <div className="text-center mb-6 text-[#11397b] font-medium text-base">
          Bạn chắc chắn muốn du học tại <br/>
          <span className="font-bold text-lg text-[#ff4d4f]">{country}</span> <br/>
          ngành <span className="font-bold text-lg text-[#ff4d4f]">{major}</span> chứ?
        </div>
        <div className="flex gap-3">
          <button 
            className="flex-1 py-3 bg-gray-200 text-gray-700 font-bold rounded-xl active:scale-95 transition-transform"
            onClick={() => setIsConfirmVisible(false)}
          >
            Hủy
          </button>
          <button 
            className="flex-1 py-3 bg-[#003570] text-white font-bold rounded-xl active:scale-95 transition-transform"
            onClick={handleConfirm}
          >
            Xác nhận
          </button>
        </div>
      </Modal>

    </Page>
  );
};

export default Quiz2_3Page;