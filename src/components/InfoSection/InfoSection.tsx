import info2 from "../../assets/info2.png"
import info1 from "../../assets/info1.png"

function InfoSection() {
  return (
    <div className="hstack w-full justify-between p-4">
        <div className="vstack  justify-between">
        <div className="vstack  pt-9 gap-4">
            <span className="montserrat text-4xl max-w-[522px] font-bold">Buy more plants, it<br/> helps you to be relaxed </span> 
          <p className="montserrat text-primary2 max-w-[506px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.</p>

        </div>
        <img className="w-[568px] h-[250px]" src={info1} alt="" />
        </div>
        <img src={info2} className="w-[513px] h-[769px]" alt="" />
    </div>
  )
}

export default InfoSection