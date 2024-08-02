import Header from "./components/Header/Header"
import InfoSection from "./components/InfoSection/InfoSection"
import Recomend from "./components/Recomend/Recomend"
import Services from "./components/Services/Services"
import Slider from "./components/Slider/Slider"

function App() {


  return (
    <div className="flex max-w-[1280px] flex-col margin-center ">
      <Header/>
      <Slider/>
      <div className="flex flex-col  margin-center max-w-[1168px] pt-4 h-screen">
          <Services/>
          <Recomend/> 
          <InfoSection/>
          <div className="hstack w-full justify-between bg-[#F3F4F6] p-4">
            <div className="vstack items-start pl-9 justify-center gap-8 ">  
              <span className="montserrat font-bold text-4xl">Get your favourites plant on<br/> our shop now</span>
              <a href="#"  className=" font-bold w-[152px] p-2 bg-primary text-white itio text-center">Visit Shop</a>
            </div>
            <img src="/public/banner.png" alt="" />
          </div>
      </div>
    </div>
  )
}

export default App
