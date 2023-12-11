
const Contact = () => {
  return (
    <div id="contact" className="max-w-[1520px] w-full p-4 py-16">
      <h2 className="text-2xl font-bold text-gray-700 text-center">Send us a message</h2>
      <p className="text-center text-xl text-gray-700 py-2">We're standing by</p>
      <div className="grid md:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" 
        alt="" className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] "/>
        <form >
            <div className="grid grid-cols-2">
                <input className="border m-2 p-2" type="text" placeholder="Firstname" />
                <input className="border m-2 p-2" type="text" placeholder="Lastname" />
                <input className="border m-2 p-2" type="email" placeholder="Email" />
                <input className="border m-2 p-2" type="tel" placeholder="Phone" />
                <input className="border col-span-2 m-2 p-2" type="text" placeholder="Address" />
                <textarea className="border col-span-2 m-2 p-2"  cols="30" rows="10"></textarea>
                <button className="col-span-2 m-2 border py-2 px-5 bg-gradient-to-r from-blue-800 to-blue-300 text-white rounded-lg text-xl">Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
