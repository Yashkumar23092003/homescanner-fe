import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";
import mainLogo from "@/public/images/homescanner_footer.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 z-2">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <Image src={mainLogo} alt="CirclePe Logo" width={150} height={50} />
          <p className="mt-4 text-neutral-400">Registered By:</p>
          <p className="text-neutral-400 font-semibold">HOMESCANNER PRIVATE LIMITED</p>
          <p className="mt-4 text-neutral-400">Office Address:</p>
          <p className="text-neutral-400">IIT DELHI, Hauz Khas, 110016</p>
        </div>

        {/* Empty Middle Section for spacing */}
        <div></div>

        {/* Right Section */}
        <div className="flex flex-col items-end">
          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">Download Our App: Coming Soon</p>
          </div>
          
          {/* Social Media Section */}
          <div className="mt-6 text-right">
            <p className="text-lg font-normal">Follow Our Social Media</p>
            <div className="flex gap-4 mt-3 justify-end">
              <Link href="https://www.linkedin.com" passHref>
                <FaLinkedinIn className="text-3xl cursor-pointer text-blue-500" />
              </Link>
              <Link href="https://www.facebook.com" passHref>
                <FaFacebookF className="text-3xl cursor-pointer text-blue-600" />
              </Link>
              <Link href="https://www.twitter.com" passHref>
                <FaTwitter className="text-3xl cursor-pointer text-blue-400" />
              </Link>
              <Link href="https://www.instagram.com" passHref>
                <FaInstagram className="text-3xl cursor-pointer text-pink-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-neutral-400 mt-8">Copyright ©2025, All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;