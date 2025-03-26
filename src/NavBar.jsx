import { Link } from 'react-router-dom';

import Logo from './assets/logo.svg'


function NavBar(){

    return (<nav className="bg-gray-100 p-4 ">
        <div className="container mx-auto flex justify-between  items-center ">
            <a href="#" ><img src={Logo} alt='image'/> </a>
            <div className="hidden md:flex space-x-2">
            <a className="text-black hover:text-red-400 pr-6"><Link to="/home">Home</Link></a>
            <a className="text-black hover:text-red-400 pr-6"><Link to="/about">About</Link></a>
            <a className="text-black hover:text-red-400 pr-6"><Link to="/contact">Contact</Link></a>
            <a className="text-black hover:text-red-400 pr-6"><Link to="/blog">Blog</Link></a>
            <a className="text-black hover:text-red-400 pr-6"><Link to="/careers">Careers</Link></a>
            {/* <a className='mr-6'><Link to="/about">About</Link></a> */}



            </div>
            <button className='bg-brightcyan rounded-full py-3 px-4 cursor pointer text-white'>request invite</button>

            <div className="md:hidden">
                <button id="nav-toggle" className="text-gray-300 focus:outline-none"> 
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                </button>
            </div>
        </div>
        <div id="nav-menu" className="md:hidden">
            <a className="text-black hover:text-red-400 pr-6"><Link to="/home">Home</Link></a>
            <a className="text-black hover:text-red-400 pr-6"><Link to="/about">About</Link></a>
            <a className="text-black hover:text-red-400 pr-6"><Link to="/contact">Contact</Link></a>
            <a className="text-black hover:text-red-400 pr-6"><Link to="/careers">Careers</Link></a>
        </div>
    </nav>
)

}

export default NavBar;