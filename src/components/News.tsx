export default function News() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Tin nổi bật</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white shadow rounded-xl p-4">Bài viết 1</div>
        <div className="bg-white shadow rounded-xl p-4">Bài viết 2</div>
        <div className="bg-white shadow rounded-xl p-4">Bài viết 3</div>
      </div>
    </section>
  );
}
