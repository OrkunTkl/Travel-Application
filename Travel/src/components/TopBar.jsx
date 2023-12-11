import { AiFillPhone } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <BsChatSquareDots size={30} className="text-blue-700 mr-2" />
        <h1 className="text-xl font-bold">WEEKAWAY</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle size={20} className="text-blue-700 mr-2"/>
          <p className="text-lg font-semibold">Orkun - Takıl</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="text-blue-800 mr-2"/>
          <p className="text-lg font-semibold">05394061900</p>
        </div>
        <button className="border py-2 px-5 bg-gradient-to-r from-blue-800 to-blue-300 text-white rounded-lg text-xl">
            Get a Free Quate
            </button>
      </div>
    </div>
  );
};

export default TopBar;
