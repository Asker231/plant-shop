import Header from "./components/Header/Header"

function App() {


  return (
    <div className="flex max-w-[1280px] flex-col margin-center">
      <Header/>
      
      <div className="flex items-start">
      <img src="/public/preview.png" className="w-[608px] h-[740px]" alt="" />
      <div className="flex w-[672px] h-[740px] justify-end flex-col items-start gap-48">
        <div className="flex flex-col items-start px-16"> 
            <span className="max-w-[523px] text-[68px] text-primary ">Kembang Flower Mantap</span>
            <p className="text-[18px] max-w-[493px] text-[#2C1500]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        </div>

        <div className="flex items-center justify-center">
            <button className="flex w-[320px] h-[160px] text-[#999999]  items-center justify-center"><img src="/public/arrow-left.svg" alt="" /> <span className="text-[24px]">Previous</span> </button>
            <button className=" w-[320px] h-[160px] flex items-center justify-center text-[#999999] bg-primary"> <span className="text-[24px]">Next</span> <img src="/public/arrow-back-outline.svg" alt="" /></button>
        </div>
      </div>
      </div>  
    </div>
  )
}

export default App
