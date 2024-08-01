
import { useState } from "react"
import { sliderProp } from "./slider.props"

function Slider() {
  const [count,setCount] = useState<number>(0)
  function nextSlide(){
    setCount((count)=>count+=1)
    console.log(count);
    if(count >= sliderProp.length-1){
      setCount(0)
    }
  }
  function prevSlide(){
    setCount((count)=>count-=1)
    console.log(count);
    if(count <= 0){
      setCount(sliderProp.length-1)
    }
  }
  
  return (
    <div className="flex wrap z-[5] items-start">
    <img src={sliderProp[count].photo} className="w-[608px]  transition duration-300 z-[10] h-[740px]" alt="" />
    <div className="flex w-[672px] z-[10] h-[740px] justify-end flex-col items-center gap-48">
      <div className="flex z-[10] flex-col max-w-[519px] items-center  px-11 gap-4  justify-center"> 
          <span className="max-w-[523px] transition-all  z-[10] text-[48px] text-primary ">{sliderProp[count].title}</span>
          <p className="text-[18px] z-[10] montserrat font-normal max-w-[493px] text-[#2C1500]">{sliderProp[count].text} </p>
      </div>
      <div className="flex z-[10] items-center justify-center">
          <button disabled = { count < 1 ? true : false} onClick={()=>prevSlide()} 
          className="flex hovbtn z-[10] hover:bg-primary flex-col hover:text-white w-[320px] h-[160px] text-[#999999] px-6  items-start justify-center  transition ease-in-out duration-500">
          <div className="hstack gap-2">
          <img src="/public/arrow-left.svg" alt="" /> 
          <span className="text-[24px]">Previous</span> 
          </div>
          <span className="btn transition duration-300">{ count == 0 ? sliderProp[count].title : sliderProp[count-1].title}</span>
          </button>
          <button  onClick={()=>nextSlide()} 
          className=" hovbtn w-[320px] hover:bg-primary px-6  hover:text-white  z-[10] h-[160px] flex flex-col items-start justify-center text-[#999999] transition ease-in-out duration-500">
            <div className="hstack gap-2">
            <span className="text-[24px]">Next</span> 
            <img src="/public/arrow-back-outline.svg" alt="" />
            </div>
            <span className="btn  transition duration-300">{ count == sliderProp.length-1  ?  sliderProp[count].title : sliderProp[count+1].title}</span>
            </button>
      </div>
    </div>
    </div>  
  )
}

export default Slider