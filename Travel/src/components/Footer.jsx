import { BsChatSquareDots } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="max-w-[1520px] w-full py-8 m-auto border-t-4 ">
      <div className="flex items-center m-auto justify-center">
        <BsChatSquareDots size={30} className="text-blue-800 mr-2" />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>
    </div>
  )
}

export default Footer