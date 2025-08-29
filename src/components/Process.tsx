export default function Process() {
  const steps = [
    "Khảo sát mặt bằng",
    "Tư vấn giải pháp",
    "Thiết kế kỹ thuật",
    "Thi công lắp đặt",
    "Kiểm tra & nghiệm thu",
    "Bàn giao & đào tạo",
    "Vận hành & bảo trì",
  ];
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Quy trình thiết kế & thi công
      </h2>
      <div className="grid md:grid-cols-7 gap-4 text-center max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="p-4 bg-green-50 rounded-xl shadow">
            <div className="text-2xl font-bold mb-2">{i + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
