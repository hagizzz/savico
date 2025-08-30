import Image from "next/image";
import headerBg from "@/assets/header.png";
import phone from "@/assets/phone.png";
import mail from "@/assets/mail.png";
import logo from "@/assets/logo.png";
import Link from "next/link";

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
      <div className="absolute right-0 top-[90px] w-3/5 flex items-center justify-center gap-10 text-sm font-bold">
        <div className="text-[#084a0a] hover:text-[#7fbf2f] hover:underline underline-offset-4 uppercase">
          <Link href="/">Trang chủ</Link>
        </div>

        <div className=" text-[#084a0a] hover:text-[#7fbf2f] hover:underline underline-offset-4 uppercase">
          <Link href="/gioi-thieu" className="uppercase ">
            Giới thiệu
          </Link>
        </div>

        <div className="text-[#084a0a] hover:text-[#7fbf2f] hover:underline underline-offset-4 uppercase">
          <Link href="/dich-vu">Dịch vụ</Link>
        </div>

        <div className="text-[#084a0a] hover:text-[#7fbf2f] hover:underline underline-offset-4 uppercase">
          <Link href="/san-pham">Sản phẩm</Link>
        </div>

        <div className="text-[#084a0a] hover:text-[#7fbf2f] hover:underline underline-offset-4 uppercase">
          <Link href="/du-an">Dự án</Link>
        </div>

        <div className="text-[#084a0a] hover:text-[#7fbf2f] hover:underline underline-offset-4 uppercase">
          <Link
            href="/blog"
            className="uppercase text-green-700 hover:text-green-500"
          >
            Blog
          </Link>
        </div>

        <div className="uppercase flex rounded-full z-10 bg-[#1E5026] text-[#BFD42F] w-40 h-12 items-center left-10 justify-around">
          <Link href="/lien-he">Liên hệ</Link>
        </div>
      </div>

      {/* <div className="absolute right-25 top-[88px] flex items-center justify-center ">
        <Image src={bgButtonHeader} alt="" width={200} />
      </div> */}

      <div className="absolute left-[11.5em] top-[6em] w-2/3 flex">
        <Image src={logo} alt="logo" width={140} />
      </div>

      {/* Thông tin liên hệ */}
      <div className="absolute left-30 top-3 w-2/3 flex gap-[15px] items-center justify-left">
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
        {/* Logo */}
      </div>
    </div>
  );
}
