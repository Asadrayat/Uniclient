import { useState } from 'react';
import Button from './Button';
import logo from '../assets/logo.svg'
const Nav = () => {
	let Links = [
		{ name: "HOME", link: "/" },
		{ name: "SERVICE", link: "/" },
		{ name: "ABOUT", link: "/" },
		{ name: "BLOG'S", link: "/" },
		{ name: "CONTACT", link: "/" },
	];
	let [open, setOpen] = useState(false);
	return (
		<div className=' w-full flex justify-between '>
			<div className='md:flex items-center justify-start
 py-4 md:px-10 px-7'>
				<div className='font-bold text-2xl ml-28 text-purple-800 cursor-pointer flex items-center font-[Poppins] '>
					<span className='text-3xl text-color mr-1 pt-2'>
						<img className='w-57 h-10 top-1 left-25' src={logo} alt="icon" />
					</span>
					<div>
						<p className='mt-2'>UNICLIENT</p>
						<p className='text-sm -mt-1 text-gray-700'>
							<span className='ms-1.5'>T</span>
							<span className='ms-1.5'>e</span>
							<span className='ms-1.5'>c</span>
							<span className='ms-1.5'>h</span>
							<span className='ms-1.5'>n</span>
							<span className='ms-1.5'>o</span>
							<span className='ms-1.5'>l</span>
							<span className='ms-1.5'>o</span>
							<span className='ms-1.5'>g</span>
							<span className='ms-1.5'>y</span>
						</p>

					</div>

				</div>

				<div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
					<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
				</div>

				<ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
					{
						Links.map((link) => (
							<li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
								<a href={link.link} className='text-gray-50 hover:text-gray-400 duration-500'>{link.name}</a>
							</li>
						))
					}

				</ul>
			</div>

			<div className='mt-5 mr-36 flex flex-row-reverse'>
				<Button>
					Get Started Free
				</Button>
				<button className='py-2 px-6 btn outline rounded-lg outline-1 outline-slate-400  text-gray-50'>Sign in</button>

			</div>
		</div>
	)
}

export default Nav