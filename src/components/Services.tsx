import bgService from "@/assets/bgService.png";
import Image from "next/image";
import logoService from "@/assets/logoService.png";
import iconLogoService from "@/assets/iconLogoService.png";
import chargeLine2 from "@/assets/chargeLine2.png";
import imageCard1 from "@/assets/imageCard1.png";
import bgIconCard1 from "@/assets/bgIconCard1.png";
import bgBottom from "@/assets/bgBottom.png";

export default function Services() {
  return (
    <div className="relative w-full h-[500px]">
      <Image
        src={bgService}
        alt="Background service"
        fill
        className="object-cover"
      />

      <div className="absolute top-15 left-1/2 -translate-x-1/2 text-white text-center">
        <div className="text-5xl font-bold uppercase whitespace-nowrap">
          lắp đặt trạm sạc điện đạt chuẩn
        </div>

        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="text-4xl uppercase">lý do nhà đầu tư chọn</div>
          <Image src={iconLogoService} alt="" height={20} />
          <Image src={logoService} alt="" height={28} />
        </div>

        <br />

        <div className="mt-4 min-w-260 text-lg leading-relaxed text-center top-10">
          SAVICO là đơn vị tiên phong trong lĩnh vực lắp đặt trạm sạc điện tại
          Việt Nam, cung cấp giải pháp thiết kế và thi công trọn gói. Giải pháp
          của chúng tôi giúp doanh nghiệp và nhà đầu tư tối ưu chi phí, rút ngắn
          thời gian triển khai và đảm bảo vận hành bền vững.
        </div>

        <div className="flex items-center justify-center mt-2">
          <Image src={chargeLine2} alt="" width={400} />
        </div>
      </div>

      {/* <div className="w-[300px]">
        <div className="relative flex flex-col">
          <Image src={imageCard1} alt="Service" className="rounded-t-lg" />

          <Image
            src={bgBottom}
            alt="Bottom Background"
            width={320}
            className="  "
          />

          <div className="absolute left-6 top-[130px] z-10">
            <Image src={bgIconCard1} alt="Icon" width={70} height={70} />
          </div>

          <div className="absolute top-[170px] px-6 pb-6 w-full">
            <div className="text-lg font-bold text-green-800 leading-snug">
              Tối ưu hiệu quả đầu tư - thi công trạm sạc từ A đến Z
            </div>
            <div className="text-gray-600 mt-2 text-sm leading-relaxed">
              Từ khảo sát, thiết kế kỹ thuật, đấu nối EVN, đến lắp đặt và bàn
              giao vận hành.
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
