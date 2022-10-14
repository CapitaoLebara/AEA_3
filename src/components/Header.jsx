import React from 'react'


//IMAGE-LOGO
import ma from './img/aea.jpg'

//ICONS
import { FaBars } from "react-icons/fa";
const Home = () => {

    const altura = window.screen.height
    const altura2 = document.documentElement.clientHeight
    const altura3 = document.body.clientHeight
    console.log(altura)
    console.log(altura2)
    console.log(altura3)
    function event(){
        console.log("index")
    }
  return (
        <header className=' bg-zinc-800 px-20 py-2 w-full fixed text-white '>
            <nav className='  flex items-center justify-between'>
                <img src={ma}  className=' border-2 cursor-pointer border-white rounded-[200px] w-14 h-14'  alt="" />
                <div className='hidden sm:block'>
                <ul className=' flex gap-8 text-xl'>
                    <li className=' cursor-pointer'>Home</li>
                    <li className=' cursor-pointer'>Ficha</li>
                </ul> 

                </div>
                
                 <FaBars className='sm:hidden' onClick={event}/>
            </nav>
           
        </header>    
  )
}


export default Home