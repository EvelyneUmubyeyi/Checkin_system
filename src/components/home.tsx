import { useState } from "react";
import Profile from "./../assets/profile.jpg";

const Home = () =>{
    const [checkedIn, setCheckedIn] = useState(false);
    return(<>
    <div className="w-[90%] m-auto">
        <div className="flex flex-col mt-10 mb-6 items-center">
            <div className="flex items-center justify-center mb-3">
                <img src={Profile} alt="profile" className="w-24 h-24 rounded-full object-cover" />
            </div>
            <p className="font-bold text-green-700">Uwera Adrine</p>
            <p className="">ID: <span>23456</span></p>
        </div>
        <div className="flex justify-center w-[80%] m-auto my-10 ">
            <div className=" border-[1px] w-[40%] mr-4 flex justify-center items-center font-bold rounded">
                <p>Time</p>
            </div>
            <div className="flex flex-col border-[1px] w-[60%] pl-4 font-bold py-1 rounded">
                <p className="">22/06/2023</p>
                <p>11:32:00</p>
            </div>
        </div>
        <div className="flex justify-center">
            <button className="w-[80%] bg-green-700 m-auto text-white font-bold py-2 rounded">
                {checkedIn ? 'Checkout' : 'Checkin'}
            </button>
        </div>

    </div>
    </>)
}
export default Home;