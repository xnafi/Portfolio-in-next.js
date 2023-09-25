import React from 'react';
import { FaFacebookSquare, FaGitSquare, FaLinkedin } from 'react-icons/fa';


function Footer() {
    return (
        <>
            <section className='w-100 justify-center h-100 flex flex-col text-center lg:mt-40 mt-5   bg-slate-900' id='footer'>
                <div className='mt-10'>
                    <a href='#' className='text-2xl font-extrabold text-zinc-100'>FORHAD KHAN</a>
                </div>
                <div className='justify-center items-center mt-8 lg:mt-10'>
                    <ul className='grid text-xl xl:text-lg gap-2 lg:flex lg:flex-row lg:justify-center lg:items-center lg:space-x-5'>
                        <li className='hover:scale-110 transition-all hover:underline underline-offset-4'>
                            <a href="#" className=' cursor-pointer font-bold'>Home</a>
                        </li>

                        <li className='hover:scale-110 transition-all hover:underline underline-offset-4'>
                            <a href="#about" className=' cursor-pointer font-bold'>About</a>
                        </li>

                        <li className='hover:scale-110 transition-all hover:underline underline-offset-4'>
                            <a href="#experiance" className=' cursor-pointer font-bold'>Experiance</a>
                        </li>

                        <li className='hover:scale-110 transition-all hover:underline underline-offset-4'>
                            <a href="#portfolio" className=' cursor-pointer font-bold'>Portfolio</a>
                        </li>

                        <li className='hover:scale-110 transition-all hover:underline underline-offset-4'>
                            <a href="#services" className=' cursor-pointer font-bold'>Services</a>
                        </li>

                        <li className='hover:scale-110 transition-all hover:underline underline-offset-4'>
                            <a href="#testimonial" className=' cursor-pointer font-bold'>Testimonial</a>
                        </li>

                        <li className='hover:scale-110 transition-all hover:underline underline-offset-4'>
                            <a href="#contact" className=' cursor-pointer font-bold'>Contact</a>
                        </li>


                    </ul>

                </div>

                <div className='flex flex-row justify-center items-center text-2xl mt-10 space-x-4'>
                    <a href="https://www.facebook.com/Fk.nafi" target='_blank'  className='hover:text-red-900 hover:scale-110'><FaFacebookSquare /> </a>
                    <a href="https://www.linkedin.com/in/forhadkhandev" className='hover:text-red-900 hover:scale-110' target='_blank'><FaLinkedin /> </a>
                    <a href="https://github.com/xnafi" className='hover:text-red-900 hover:scale-110' target='_blank'><FaGitSquare /> </a>
                </div>
                 <span className='mt-10'> &copy; All Rights Reserved</span>
            </section>
        </>
    )

}

export default Footer;

