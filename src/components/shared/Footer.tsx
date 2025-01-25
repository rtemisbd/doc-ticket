import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaRegCopyright, FaTwitter, FaYoutube } from "react-icons/fa";

import logo from "@/assets/logo/doc_logo.png";
import Image from "next/image";

const Footer = () => {
  const product = [
    { id: 1, text: "Features", path: "#" },
    { id: 2, text: "pricing", path: "#" },
    { id: 3, text: "case studies", path: "#" },
    { id: 4, text: "reviews", path: "#" },
    { id: 5, text: "updates", path: "#" },
  ];

  const company = [
    { id: 1, text: "about", path: "#" },
    { id: 2, text: "contact us", path: "#" },
    { id: 3, text: "careers", path: "#" },
    { id: 4, text: "culture", path: "#" },
    { id: 5, text: "blog", path: "#" },
  ];
  const support = [
    { id: 1, text: "getting started", path: "#" },
    { id: 2, text: "help center", path: "#" },
    { id: 3, text: "server status", path: "#" },
    { id: 4, text: "report a bug", path: "#" },
    { id: 5, text: "chat support", path: "#" },
  ];

  const follow = [
    { id: 1, text: "facebook", path: "#", icon: <FaFacebook /> },
    { id: 2, text: "twitter", path: "#", icon: <FaTwitter /> },
    { id: 3, text: "instagram", path: "#", icon: <FaInstagram /> },
    { id: 4, text: "linkedin", path: "#", icon: <FaLinkedin /> },
    { id: 5, text: "youtube", path: "#", icon: <FaYoutube /> },
  ];

  return (
    <div className="mt-96 bg-[#007E85] text-white">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-12 pl-8 md:py-12  md:pl-16">
        {/* col-1 */}
        <div className="w-full mx-auto flex flex-col items-start justify-center">
 

<div className="  relative w-24 h-24 border rounded-lg">
  <Link href="/" className="text-2xl font-bold  ">
    <Image
      src={logo}
      alt="tts_logo"
      fill
      className="object-contain"
    />
  </Link>
</div>

          <div className="pt-4">
            <p className="text-xl">Doc Ticket</p>
            <div className="flex gap-2 pt-2">
              <FaRegCopyright className="text-white text-lg mt-1" />
              <span className="text-white capitalize">
                {new Date().getFullYear()}, Doc Ticket.
              </span>
            </div>
          </div>
        </div>

        {/* col-2 */}
        <div>
          <h1 className="text-xl capitalize pb-4">product</h1>
          <div>
            {product?.map((item, index) => (
              <div
                key={index}
                className="py-1 text-[16px] capitalize transition hover:text-gray-400"
              >
                <Link href={item.path}>{item.text}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* col-3 */}
        <div>
          <h1 className="text-xl capitalize pb-4">company</h1>
          <div>
            {company?.map((item, index) => (
              <div
                key={index}
                className="py-1 text-[16px] capitalize transition hover:text-gray-400"
              >
                <Link href={item.path}>{item.text}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* col-4 */}
        <div>
          <h1 className="text-xl capitalize pb-4">follow us</h1>
          <div>
            {follow?.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 py-1 text-[16px] capitalize transition hover:text-gray-400"
              >
                <span className="text-lg">{item.icon}</span>
                <Link href={item.path}>{item.text}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
