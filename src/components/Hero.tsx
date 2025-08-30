import Image from "next/image";
import bgHero from "@/assets/bgHero.png";
import background from "@/assets/background.png";
import logo from "@/assets/logo.png";
import chargeIcon from "@/assets/charge-icon.png";
import bgButtonHero from "@/assets/bgButtonHero.png";
import iconButtonHero from "@/assets/iconButtonHero.png";

export default function Hero() {
  return (
    <header className="relative w-full overflow-hidden">
      {/* Background */}
      <Image
        src={background}
        alt="Background Extra"
        className="object-cover w-full h-auto"
        priority
      />

      <div className="absolute right-0 top-60 flex items-center justify-end  md:w-1/2">
        <div className="w-full h-[480px] rounded-l-[60px] bg-gradient-to-r from-[#F6FAE9]/90 to-[#F0F5D5]/90 flex flex-col justify-around pl-[10px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[#084a0a] text-sm sm:text-base md:text-lg ">
              <Image src={logo} alt="Logo" height={20} />
              <span>Giải pháp trạm sạc xe điện</span>
            </div>

            <div className="mt-4 pl-2.5 sm:mt-6 text-2xl sm:text-3xl md:text-5xl font-extrabold text-green-900 leading-snug sm:leading-tight uppercase max-w-xl">
              toàn diện cho đô thị thông minh
            </div>

            <div className="max-w-3xl mt-4 sm:mt-6">
              <div className="flex items-start">
                <Image
                  src={chargeIcon}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-1 shrink-0"
                />
                <p className="ml-3 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Từ những trạm sạc đầu tiên đến mô hình hợp tác trên toàn quốc,
                  <span className="font-semibold"> SAVICO </span>
                  cam kết mang đến giải pháp hạ tầng sạc điện chuyên nghiệp, dễ
                  triển khai và dễ mở rộng. Chúng tôi không chỉ thi công – chúng
                  tôi cùng bạn kiến tạo hệ sinh thái xe điện tương lai.
                </p>
              </div>
            </div>
          </div>

          <div className="flex mt-6 sm:mt-8 bg-[#1E5026] text-[#BFD42F]">
            <div className="text-base sm:text-xl md:text-2xl ">
              LIÊN HỆ NGAY
            </div>
            <Image
              src={iconButtonHero}
              alt=""
              width={25}
              className="sm:w-[30px]"
              style={{ color: "#BFD42F" }}
            />
          </div>
        </div>
      </div>

      {/* Nội dung */}
      <div className=" inset-0 flex items-center left-[900px]"></div>
    </header>
  );
}
