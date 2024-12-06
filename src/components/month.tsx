import React from 'react'
import Redheading from './redheading'
import Productcard from './productcard'
import { bestsellingcard } from '@/constant/bestsellingcard'
import Image from 'next/image'

function Month() {
  return (
    <>

    <section className='mt-[70px]'>
        <Redheading text='This Month' textColor='red'/>

           {/* best selling */}
        <div className="flex justify-between">
          <div className="mt-[24px] flex items-center">
            <h2 className="inline-block text-[36px] leading-[48px] font-semibold">
            Best Selling Products
            </h2>

            
          </div>
          <button className='bg-[#DB4444] py-[16px] px-[48px] text-white hover:bg-slate-400 '>View All</button>

         
        </div>



         {/* card div */}
         <div className='w-full h-[350px] flex gap-[30px] mt-[60px]'>
        <Productcard loop ={bestsellingcard}/>

         </div>


         {/* picturee */}

         <div className='w-[1150px] h-[500px] mt-[140px] relative'>
            <Image src="/category.png" alt='speaker' layout='fill' objectFit='cover' ></Image>
         </div>
    </section>
      
    </>
  )
}

export default Month
