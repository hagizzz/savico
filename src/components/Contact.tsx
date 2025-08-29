export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Kết nối với chúng tôi</h2>
      <form className="max-w-3xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Họ và tên"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Nội dung"
          rows={4}
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
        >
          Gửi thông tin
        </button>
      </form>
    </section>
  );
}
