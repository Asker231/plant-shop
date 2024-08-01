import { IServiceWrap } from "../../../interfaces/service.wrap"


function ServicesWrap({children}:IServiceWrap) {
  return (
    <div className=" services  w-[268px] h-[165px] relative">
        {children}
    </div>  
  )
}

export default ServicesWrap