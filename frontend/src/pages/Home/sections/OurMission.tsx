

const OurMission = () => {
  return (
    <section className="bg-black text-white md:h-screen relative overflow-hidden">
      <img className="md:absolute" src="./img/mission-img.png" alt="Mission Img" />
      <div className="container md:flex md:justify-end">
        <div className="flex flex-col gap-7 items-center text-center py-16 md:items-start md:pt-36 md:text-left md:max-w-lg">
          <h1>Our mission</h1>
          <p>
            We have invested 6 year of our lifes to invent a new technology of production a 3D dials with quality of wristwatch industry.
            All what we need to turn on our imagination on maximum.<br/><br/>
            We love Out-of-the-box designs and believe there are many people who thinks the same.
          </p>
          <button className='btn-primary bg-blue'>Design your watch</button>
        </div>
        <svg className="hidden md:block md:absolute rotate-360 -top-1 -right-32 w-64 h-20" viewBox="0 0 78 43" fill="" xmlns="http://www.w3.org/2000/svg">
          <path id="Polygon 2" d="M39 43L0.894886 0.25L77.1051 0.249993L39 43Z" fill="#735CFF"/>
        </svg>

        <svg className="hidden md:block md:absolute left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" width="820" height="110" viewBox="0 0 820 110" fill="none">
          <path d="M694.166 0H-157V110H820L694.166 0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default OurMission