import RecomendCard from "./RecomendCard/RecomendCard"
import { recomendCards } from "./RecomendCard/recomendcard.prop"

function Recomend() {

  return (
    <div className="w-full vstack gap-4 p-4 ">
        <div className="hstack justify-between">
              <span className="montserrat text-black text-sm font-medium">Featured Plants</span>
              <div className="hstack w-3"></div>  
        </div>
        <div className="w-full h-[1px] bg-[#F3F4F6]"></div> 
        <div className="hstack gap-4">
            {
                recomendCards.map((el,ind)=>{
                    return <RecomendCard key={ind} photo={el.photo} title={el.title} price={el.price}/>
                })
            }
        </div>
    </div>
  )
}

export default Recomend