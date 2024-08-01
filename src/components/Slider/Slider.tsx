function Slider() {
  return (
    <div className="flex wrap z-[5] items-start">
    <img src="/public/preview.png" className="w-[608px] z-[10] h-[740px]" alt="" />
    <div className="flex w-[672px] z-[10] h-[740px] justify-end flex-col items-center gap-48">
      <div className="flex z-[10] flex-col max-w-[519px] items-center  px-11  justify-center"> 
          <span className="max-w-[523px] z-[10] text-[68px] text-primary ">Kembang Flower Mantap</span>
          <p className="text-[18px] z-[10] montserrat font-normal max-w-[493px] text-[#2C1500]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
      </div>
      <div className="flex z-[10] items-center justify-center">
          <button className="flex z-[10] w-[320px] h-[160px] text-[#999999]  items-center justify-center"><img src="/public/arrow-left.svg" alt="" /> <span className="text-[24px]">Previous</span> </button>
          <button className=" w-[320px] z-[10] h-[160px] flex items-center justify-center text-[#999999] bg-primary"> <span className="text-[24px]">Next</span> <img src="/public/arrow-back-outline.svg" alt="" /></button>
      </div>
    </div>
    </div>  
  )
}

export default Slider