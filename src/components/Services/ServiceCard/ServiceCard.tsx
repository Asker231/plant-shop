import { IServicesCard } from '../../../interfaces/ServiceCard'

function ServiceCard({icon,title,text}:IServicesCard) {
  return (
    <div className="vstack items-start z-[10] gap-4">
        <div className="hstack z-[10] gap-2 items-center justify-center">
             <img className="w-12 z-[10] h-12" src={icon} alt="" />   
             <span className="text-base z-[10] text-primary font-bold max-w-[137px]">{title}</span>
        </div>
        <p className="text-xs z-[10] montserrat font-normal max-w-[236px] text-primary2">{text}</p>
    </div>
  )
}

export default ServiceCard