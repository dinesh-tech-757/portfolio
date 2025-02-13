import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  return (
    <div className="px-[80px] space-y-10 pb-[80px]">
      <p className="bg-gray-400 h-1"></p>

      <div className="flex items-center space-x-3 text-gray-400 text-xl">
        <div className="flex items-center space-x-2">
        <FaRegCopyright />
        <p>{date.getFullYear()}</p>
        <BsFillLightningChargeFill />
        </div>
        <p className="flex items-center gap-2 ">by<a href="https://superlabs.co/" className="text-blue-600">SuperLabs</a>
          
        </p>
      </div>
    </div>
  );
};

export default Footer;
