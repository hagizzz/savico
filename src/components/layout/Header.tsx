import Image from "next/image";
import headerBg from "@/assets/header.png"; // background header
import phone from "@/assets/phone.png";
import mail from "@/assets/mail.png";
import logo from "@/assets/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Hình nền */}
      <div className="relative w-full h-[160px] left-0">
        <Image
          src={headerBg}
          alt="header-bg"
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      <div className="absolute right-0 top-[100px] w-2/3 flex items-center justify-center">
        <nav className="flex text-black font-bold text-sm space-x-[10px]">
          <Link href={"/"} className="uppercase">
            trang chủ
          </Link>
          <Link href={"/"} className="uppercase">
            giới thiệu
          </Link>
          <Link href={"/"} className="uppercase">
            dịch vụ
          </Link>
          <Link href={"/"} className="uppercase">
            sản phẩm
          </Link>
          <Link href={"/"} className="uppercase">
            dự án
          </Link>
          <Link href={"/"} className="uppercase">
            blog
          </Link>
          <Link href={"/"} className="uppercase">
            Liên hệ
          </Link>
        </nav>
      </div>

      <div className="absolute left-[-80px] top-3 w-2/3 flex gap-15 items-center justify-center">
        <div className="flex items-center gap-3">
          <span>
            <Image src={phone} alt={"phone"} width={30} />
          </span>
          <span className="text-black font-bold">
            <p>Gọi cho chúng tôi để được tư vấn</p>
            <p>0934 888 881</p>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span>
            <Image src={mail} alt={"mail"} width={30} />
          </span>
          <span className="text-black font-bold">
            <p>Gửi mail cho chúng tôi để được tư vấn</p>
            <p>savico.co@gmail.com</p>
          </span>
        </div>
      </div>

      <div className="absolute left-[-295px] top-[100px] w-2/3 flex items-center justify-center">
        <Image src={logo} alt="" width={140} />
      </div>
    </div>
  );
}
