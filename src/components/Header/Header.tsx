import { useEffect, useRef } from "react"

function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    document.addEventListener('scroll',()=>{
        if(window.scrollY > 20){
          if(headerRef.current){
            headerRef.current.style.display = "none" 
          }
        }else{
          if(headerRef.current){
            headerRef.current.style.display = "flex" 
          }
        }
    })
  },[])
  return (
    <div ref={headerRef} className=" fixed p-4 z-10 flex margin-center left-[14.4%] min-w-[1168px] justify-between items-center ">
       <img src="/public/logo.svg" className="w-9 h-9" alt="" />
       <div className="flex items-center gap-3 ">
         <button className="border-none">
                    <img src="/public/search-icon.svg" className="w-5 h-5"  alt="" />
         </button>
         <button>
            <img src="/public/shopping-cart-icon.svg" className="w-5 h-5" alt="" />
         </button>
         <a href="#" className="w-28 px-3 py-2 flex items-center justify-center text-primary itio font-bold">SignUp</a>
         <a href="#"  className="bg-primary w-28 flex items-center justify-center px-3 py-2 text-white itio font-bold">SignIn</a>
       </div>
    </div>
  )
}

export default Header