import imageCard1 from "@/assets/imageCard1.png";
import bgIconCard1 from "@/assets/bgIconCard1.png";
import bgBottom from "@/assets/bgBottom.png";
import Image from "next/image";

function CardService() {
  return (
    <div className="w-[300px] relative">
      {/* Ảnh trên */}
      <Image src={imageCard1} alt="Service" className="w-full block" />

      {/* Ảnh nền trắng dưới (dính sát ảnh trên) */}
      <Image
        src={bgBottom}
        alt="Bottom Background"
        className="w-full absolute bottom-0 left-0"
      />

      {/* Icon */}
      <div className="absolute left-6 top-[120px] z-10">
        <Image src={bgIconCard1} alt="Icon" width={70} height={70} />
      </div>

      {/* Text */}
      <div className="absolute bottom-6 px-6 w-full">
        <div className="text-lg font-bold text-green-800 leading-snug">
          Tối ưu hiệu quả đầu tư - thi công trạm sạc từ A đến Z
        </div>
        <div className="text-gray-600 mt-2 text-sm leading-relaxed">
          Từ khảo sát, thiết kế kỹ thuật, đấu nối EVN, đến lắp đặt và bàn giao
          vận hành.
        </div>
      </div>
    </div>
  );
}

export default CardService;
