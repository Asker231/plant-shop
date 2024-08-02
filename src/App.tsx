import Header from "./components/Header/Header"
import InfoSection from "./components/InfoSection/InfoSection"
import Recomend from "./components/Recomend/Recomend"
import Services from "./components/Services/Services"
import Slider from "./components/Slider/Slider"

function App() {


  return (
    <div className="flex max-w-[1280px] flex-col gap-8 margin-center ">
      <Header/>
      <Slider/>
      <div className="flex flex-col  margin-center max-w-[1168px] pt-4">
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
      <div className="w-full h-[1px] bg-primary m-1"></div>

      <div className="w-full hstack gap-2 justify-around items-center h-[268px]">
      <div className=" vstack justify-center max-w-[282px] gap-4">
          <span className="uppercase text-primary poppins text-base font-medium" >plantku</span>
          <span className= "worksans font-medium">Plantku House</span>
          <p className="text-[#4F4F4F] text-[13px] worksans">Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55282</p>
        </div>
        <div className="vstack items-start  justify-center gap-4 ">
          <span className="worksans font-medium text-base">Perusahaan</span>
          <span className="worksans font-medium text-[14px]">Tentang Kami</span>
          <span className="worksans font-medium text-[14px]">Hubungi Kami</span>
        </div>
        <div className="vstack items-start  justify-center gap-4 ">
        <span className="worksans font-medium text-base">Perusahaan</span>
          <span className="worksans font-medium text-[14px]">Tentang Kami</span>
          <span className="worksans font-medium text-[14px]">Hubungi Kami</span>
        </div>
        <div className="vstack items-start  justify-center gap-4 ">
          <span className="text-base font-medium worksans">Berlangganan Email Kami</span>
          <div className="w-[234px] rounded-[1px] border-solid border-[1px] border-gray-200">
            <input placeholder="Email"  className="w-full pl-1 outline-none" type="text" />
          </div>
          <button className="bg-primary itio font-medium text-white text-[13px] p-2 rounded-md">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default App
