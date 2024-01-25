import {useState} from 'react'
import {Link} from 'react-router-dom'


const Header = () => {

  const [nav,setNav] = useState<boolean>(false)
  const [isAuth,setIsAuth] = useState<boolean>(false)
  
  if (isAuth) {
    window.onclick = (e: MouseEvent) => {
      
      if(!(e.target instanceof HTMLImageElement && e.target.alt=='Auth')) {
        setIsAuth(false)
      }
      
    }
  }


  return (
    <header className="container flex items-center justify-between py-4 relative">

      <Link to='/'>
        <img className="md:w-64 w-40" src="./img/logo.svg" alt="Logo" />
      </Link>


      
      <div className="hidden md:flex items-center md:gap-11 sm:gap-6">
        <nav>
          <ul className='text-gray flex items-center gap-8 text-sm'>
            <li className='hover:text-black'>
              <Link to='/'>Home</Link>
            </li>
            <li className='hover:text-black'>
              <Link to='/features'>Features</Link>
            </li>
            <li className='hover:text-black'>
              <Link to='/about'>About Us</Link>
            </li>
            <li className='hover:text-black'>
              <Link to='/products'>Watches</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <button className='btn-primary bg-blue'>Design your watch</button>
          
          <div className="flex items-center gap-6">
            <img onMouseOver={()=>setIsAuth(true)}  className='hover:opacity-80' src="./img/authicon.svg" alt="Auth"  />
            <div className="relative">
              <img className='hover:opacity-80' src="./img/cart.svg" alt="Cart" />
              <span className='absolute -top-3 -right-3 bg-red rounded-full text-xs w-4 h-4 text-white flex items-center justify-center'>
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    
      {
        isAuth
        &&
        <div onMouseOver={()=>setIsAuth(true)} 
        className='shadow-shadowBox w-60 absolute right-10 top-20 rounded-xl flex flex-col gap-2 bg-white px-8 py-6'>
            <button className='btn-primary bg-black border-2 border-solid border-black'>
              Login
            </button>
            <button className='btn-primary bg-white hover:bg-slate-100 text-black border-2 border-solid border-black'>
              Sign Up
            </button>
        </div>
      }


      {/* Burger */}
      <div onClick={()=>setNav(prev=>!prev)} className={`md:hidden`}>
        <span className={`bg-blue w-7 block h-1 duration-500  ${nav ? 'rotate-45 translate-y-0.5' : 'translate-y-3'}`}></span>
        <span className={`bg-blue block h-1 ${nav && ' hidden'}`}></span>
        <span className={`bg-blue w-7 block h-1 duration-500 ${nav ? '-rotate-45 -translate-y-0.5': '-translate-y-3'}`}></span>
      </div>
    </header>
  )
}

export default Header