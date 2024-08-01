import React from 'react'
import { serviceCardProp } from './ServiceCard/service.card.prop'
import ServiceCard from './ServiceCard/ServiceCard'
import ServicesWrap from './ServicesWrap/ServicesWrap'

function Services() {
  return (
    <div className="hstack items-center justify-between p-4 w-full gap-16">
        {
            serviceCardProp.map((el,ind)=>{
                return <ServicesWrap><ServiceCard key={ind} icon={el.icon} title={el.title} text={el.text}/></ServicesWrap>
            })
        }
    </div>
  )
}

export default Services