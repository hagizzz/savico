export default function Investment() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Xu hướng đầu tư trạm sạc điện
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-green-50 rounded-xl shadow">
          <h3 className="font-semibold text-xl mb-2">Cơ hội đầu tư</h3>
          <p>
            Thị trường xe điện phát triển nhanh chóng tạo cơ hội vàng cho nhà
            đầu tư.
          </p>
        </div>
        <div className="p-6 bg-green-50 rounded-xl shadow">
          <h3 className="font-semibold text-xl mb-2">Lợi nhuận từ trạm sạc</h3>
          <p>Hệ thống trạm sạc mang lại dòng tiền ổn định và lâu dài.</p>
        </div>
      </div>
    </section>
  );
}
