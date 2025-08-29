import Image from "next/image";
import bgHero from "@/assets/bgHero.png";
import background from "@/assets/background.png";
import logo from "@/assets/logo.png";
import chargeIcon from "@/assets/charge-icon.png";

export default function Hero() {
  return (
    <div>
      <header className="relative w-full overflow-hidden">
        <Image
          src={background}
          alt="Background Extra"
          className="object-cover w-full h-auto"
          priority
        />

        <div className="absolute inset-y-0 right-[-10px] top-10 flex items-center">
          <Image
            src={bgHero}
            alt="Background Hero"
            className="w-[850px] h-auto object-contain"
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-center left-[900px]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 relative z-10">
            <div className="flex items-center space-x-2 text-gray-700 text-lg md:text-xl">
              <Image src={logo} alt="" height={20} />
              <span>Giải pháp trạm sạc xe điện</span>
            </div>

            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-green-900 leading-tight">
              TOÀN DIỆN CHO <br /> ĐÔ THỊ THÔNG MINH
            </h1>

            <div className="max-w-3xl mt-6">
              <div className="flex items-start">
                {/* Icon bên trái */}
                <Image
                  src={chargeIcon}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-1 shrink-0"
                />
                {/* Nội dung đoạn văn */}
                <p className="ml-3 text-base md:text-lg text-gray-700 leading-relaxed">
                  Từ những trạm sạc đầu tiên đến mô hình hợp tác trên toàn quốc,
                  <span className="font-semibold"> SAVICO </span>
                  cam kết mang đến giải pháp hạ tầng sạc điện chuyên nghiệp, dễ
                  triển khai và dễ mở rộng. Chúng tôi không chỉ thi công – chúng
                  tôi cùng bạn kiến tạo hệ sinh thái xe điện tương lai.
                </p>
              </div>
            </div>

            <button className="mt-8 inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition">
              <span>LIÊN HỆ NGAY</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
