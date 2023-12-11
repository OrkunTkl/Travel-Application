
const Booking = () => {
  return (
    <div id="deals" className="max-w-[1320px] m-auto w-full p-4">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="text-lg flex flex-col my-2 py-2">
            <label>Destination</label>
            <select className="lg:w-[300px] md:w-full border rounded-md p-2">
                <option >Grande Antigua</option>
                <option >Key Weys</option>
                <option >Maldives</option>
                <option >Cozumel</option>
            </select>
        </div>
        <div className="flex w-full">
            <div className="text-lg flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                <label >Check-In</label>
                <input className="border rounded-md p-2" type="date" />
            </div>
            <div className="text-lg flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                <label >Check-Out</label>
                <input className="border rounded-md p-2" type="date" />
            </div>
        </div>
        <div className="text-lg flex flex-col my-2 p-2 w-full">
            <label >Search</label>
            <button className="border py-2 px-5 bg-gradient-to-r from-blue-800 to-blue-300 text-white rounded-lg text-lg w-full">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  )
}

export default Booking
