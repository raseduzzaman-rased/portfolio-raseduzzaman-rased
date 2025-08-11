import React from 'react';
import { LuArrowDownRight } from "react-icons/lu";


const Navbar = () => {
    return (
        <div className='max-w-[1380px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] mt-6 gap-4 flex'>
            {/* nav container  */}
            <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-5 rounded-r-full rounded-l-full border-[0.5px] border-[#fb9718]'>
                
                {/* logo section  */}
          <div>
  <h1 className="text-white text-2xl josefin-sans">
    Raseduzzaman Rased
  </h1>
</div>

            {/* menu section  */}
            <div></div>
            
            {/* hire me section  */}
            <div>
                <button className='px-4 rounded-full text-xl font-bold text-white border border-cyan-400 flex items-center gap-1 bg-gradient-to-r from-cyan-400 to-[#fb9718] hover:border-[#fb9718] hover:shadow-[0_0_20px_rgba(94,206,220,0.5)] hover:scale-110 transition-all duration-500'>
  Hire Me <LuArrowDownRight />
</button>

            </div>
            </div>
        </div>
    );
};

export default Navbar;