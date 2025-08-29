import bgService from "@/assets/bgService.png";
import Image from "next/image";
import logoService from "@/assets/logoService.png";
import iconLogoService from "@/assets/iconLogoService.png";
import chargeLine2 from "@/assets/chargeLine2.png";
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
    </div>
  );
}

// <section className="py-16 px-6 bg-gray-50 text-center">
//   <h2 className="text-3xl font-bold mb-8">Dịch vụ nổi bật</h2>
//   <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//     <div className="p-6 bg-white shadow rounded-xl">
//       <h3 className="text-xl font-semibold mb-3">01. Tư vấn & Thiết kế</h3>
//       <p>Đội ngũ kỹ sư nhiều năm kinh nghiệm tư vấn giải pháp tối ưu.</p>
//     </div>
//     <div className="p-6 bg-white shadow rounded-xl">
//       <h3 className="text-xl font-semibold mb-3">02. Lắp đặt & Thi công</h3>
//       <p>Đảm bảo tiến độ, chất lượng và an toàn trong mọi dự án.</p>
//     </div>
//     <div className="p-6 bg-white shadow rounded-xl">
//       <h3 className="text-xl font-semibold mb-3">03. Vận hành & Bảo trì</h3>
//       <p>Dịch vụ hậu mãi trọn gói, đồng hành lâu dài cùng khách hàng.</p>
//     </div>
//   </div>
// </section>
