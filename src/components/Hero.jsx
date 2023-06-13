import React from 'react'
import {logo} from '../assets'
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col"> 
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <div className='flex'>
        <img src={logo} alt='logo' className='w-6 object-contain'/>
        <h1 className='text-xl font-bold ml-1 blue_gradient'>SumZ</h1>
        </div>
        <button
        type="button"
        onClick={()=> {window.open("https://github.com/endr1thashani/SumZ")}}
        className='link_btn'
        >
          GitHub
        </button>
      </nav>
      <h1 className='head_text'>
      Përmbledhja e artikujve me 
      <br className='max-md:hidden'/>
      <span className='blue_gradient'>
        OpenAI GPT-4
      </span>
      </h1>
      <h2 className='desc'>
      Thjeshtoni leximin tuaj me SumZ, një përmbledhës i artikujve me burim të hapur që i shndërron artikujt e gjatë në përmbledhje të qarta
      </h2>
    </header>
  )
}

export default Hero
