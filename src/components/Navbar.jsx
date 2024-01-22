import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () =>{
    const [show, setShow] = useState(false);

    console.log(show)
    return(
        <div className="fixed px-12 py-5 bg-slate-400 flex items-center justify-between w-screen">
            <div>logo</div>
            <div className="hidden lg:flex justify-between gap-10">
                <div className="flex gap-8 *:text-white *:font-semibold *:px-2 *:py-0.5">
                <p>About</p>
                <p>Careers</p>
                <p>Contact Us</p>
                </div>
            
            <div className="lex gap-8 items-center *:text-white *:font-semibold *:border *:border-blue-50 *:rounded-lg *:px-2 *:py-1">
                <button>SignUp</button>
                <button>Log In</button>
            </div>
            
            </div>
            <div className="lg:hidden ">
                <GiHamburgerMenu className="cursor-pointer" onClick={() => setShow(prev => !prev)}/>
                {
                    show && (<div className="flex flex-col justify-center items-center py-4 gap-5 absolute right-0 left-0 top-14 w-screen top-[65px] bg-slate-400 h-fit" >
                        <p>About</p>
                <p>Careers</p>
                <p>Contact Us</p>
                <button>SignUp</button>
                <button>Log In</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar