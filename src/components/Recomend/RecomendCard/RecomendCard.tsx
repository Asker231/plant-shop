
import { IRecomendCArd } from '../../../interfaces/RecomendCard'

function RecomendCard({photo,title,price}:IRecomendCArd){
  return (
    <div className=" vstack max-w-[217px] gap-4 h-[281px] cursor-pointer">
        <div className="w-full max-h-[217px] bg-[#F3F4F6]">
                <img className="w-full h-full" src={photo} alt=""/>
        </div>
        <div className="vstack w-full items-center justify-center">
            <span className="montserrat font-normal text-xs">{title}</span>
            <span className="montserrat font-semibold text-xs">{price}</span>
        </div>
    </div>
  )
}

export default RecomendCard