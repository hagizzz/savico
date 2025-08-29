import Image from "next/image";
import headerBg from "@/assets/header.png";
import phone from "@/assets/phone.png";
import mail from "@/assets/mail.png";
import logo from "@/assets/logo.png";
import Link from "next/link";
import bgButtonHeader from "@/assets/bgButtonHeader.png";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Hình nền */}
      <div className="relative w-full h-[160px]">
        <Image
          src={headerBg}
          alt="header-bg"
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      {/* Menu điều hướng */}
      <div className="absolute right-0 top-[100px] w-3/5 flex items-center justify-center gap-10 text-sm font-bold">
        <Link
          href="/"
          className="uppercase text-green-300 hover:text-green-500"
        >
          Trang chủ
        </Link>
        <Link
          href="/gioi-thieu"
          className="uppercase text-green-700 hover:text-green-500"
        >
          Giới thiệu
        </Link>
        <Link
          href="/dich-vu"
          className="uppercase text-green-700 hover:text-green-500"
        >
          Dịch vụ
        </Link>
        <Link
          href="/san-pham"
          className="uppercase text-green-700 hover:text-green-500"
        >
          Sản phẩm
        </Link>
        <Link
          href="/du-an"
          className="uppercase text-green-700 hover:text-green-500"
        >
          Dự án
        </Link>
        <Link
          href="/blog"
          className="uppercase text-green-700 hover:text-green-500"
        >
          Blog
        </Link>

        <div className="uppercase px-6 py-2 rounded-full z-10">
          <Link href="/lien-he">Liên hệ</Link>
        </div>
      </div>

      <div className="absolute right-25 top-[88px]  flex items-center justify-center ">
        <Image src={bgButtonHeader} alt="" width={200} />
      </div>

      {/* Thông tin liên hệ */}
      <div className="absolute -left-40 top-3 w-2/3 flex gap-[15px] items-center justify-center">
        <div className="flex items-center gap-3">
          <Image src={phone} alt="phone" width={30} />
          <div className="text-black text-sm">
            <p>Gọi cho chúng tôi để được tư vấn</p>
            <p>0934 888 881</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Image src={mail} alt="mail" width={30} />
          <div className="text-black text-sm">
            <p>Gửi mail cho chúng tôi để được tư vấn</p>
            <p>savico.co@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute -left-[295px] top-[100px] w-2/3 flex items-center justify-center">
        <Image src={logo} alt="logo" width={140} />
      </div>
    </div>
  );
}
