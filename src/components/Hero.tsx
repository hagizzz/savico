import Image from "next/image";
import bgHero from "@/assets/bgHero.png";
import background from "@/assets/background.png";
import logo from "@/assets/logo.png";
import chargeIcon from "@/assets/charge-icon.png";
import bgButtonHero from "@/assets/bgButtonHero.png";
import iconButtonHero from "@/assets/iconButtonHero.png";

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
            <div className="flex items-center gap-2 text-gray-700 text-lg">
              <Image src={logo} alt="" height={20} />
              <span>Giải pháp trạm sạc xe điện</span>
            </div>

            <span className="mt-6 text-5xl font-extrabold text-green-900 leading-tight uppercase">
              toàn diện cho đô thị thông minh
            </span>

            <div className="max-w-3xl mt-6">
              <div className="flex items-start">
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

            <div className="relative inline-block">
              <Image src={bgButtonHero} alt="" width={200} />

              <div className="absolute inset-0 items-center justify-evenly flex ">
                <div className="text-2xl text-white">LIÊN HỆ NGAY</div>
                <Image src={iconButtonHero} alt="" width={30} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
