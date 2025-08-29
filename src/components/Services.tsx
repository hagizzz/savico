export default function Services() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Dịch vụ nổi bật</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-3">01. Tư vấn & Thiết kế</h3>
          <p>Đội ngũ kỹ sư nhiều năm kinh nghiệm tư vấn giải pháp tối ưu.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-3">02. Lắp đặt & Thi công</h3>
          <p>Đảm bảo tiến độ, chất lượng và an toàn trong mọi dự án.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-3">03. Vận hành & Bảo trì</h3>
          <p>Dịch vụ hậu mãi trọn gói, đồng hành lâu dài cùng khách hàng.</p>
        </div>
      </div>
    </section>
  );
}
