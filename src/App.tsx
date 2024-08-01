import Header from "./components/Header/Header"
import Services from "./components/Services/Services"
import Slider from "./components/Slider/Slider"

function App() {


  return (
    <div className="flex max-w-[1280px] flex-col margin-center ">
      <Header/>
      <Slider/>
      <div className="flex flex-col  margin-center max-w-[1168px] p-4 h-screen">
          <Services/>
      </div>
    </div>
  )
}

export default App
