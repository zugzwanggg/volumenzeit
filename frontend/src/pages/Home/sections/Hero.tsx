

const Hero = () => {
  return (
 
    <section className="pt-14 md:pt-40 overflow-hidden">
      <div className="container">
        <div className="flex md:items-start md:text-left gap-6 md:max-w-xl flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl">Find your dream watch</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Enim facilisi elementum commodo ipsum. Aenean aenean adipiscing lect
          </p>
          <button className="btn-primary bg-blue mt-4">Design Your Watch</button>
        </div>
      </div>

      <div className="text-center flex flex-col gap-5 p-8">
        <h3 className="text-sm leading-3">follow us</h3>
        
        <ul className="flex items-center justify-center gap-4">
          <li className="shadow-md w-6 h-6 bg-white rounded-full grid place-items-center">
            <img className="w-4" src="./img/pinterest.svg" alt="" />
          </li>
          <li className="shadow-md w-6 h-6 bg-white rounded-full grid place-items-center">
            <img className="w-4" src="./img/facebook.svg" alt="" />
          </li>
          <li className="shadow-md w-6 h-6 bg-white rounded-full grid place-items-center">
            <img className="w-4" src="./img/twitter.svg" alt="" />
          </li>
          <li className="shadow-md w-6 h-6 bg-white rounded-full grid place-items-center">
            <img className="w-4" src="./img/instagram.svg" alt="" />
          </li>
        </ul>
      </div>

      <img className="w-full" src="./img/hero-img.png" alt="" />
    </section>

    
  )
}

export default Hero