import React from "react";
import Redheading from "./redheading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Image from "next/image"
import { categorycard } from "@/constant/categorycard";

function Category() {
  return (
    <>
      <section className="mt-[80px] pb-[70px] border-[1px] border-slate-400">
        <Redheading text="categories" textColor="red" />

        {/* category */}

        <div className="flex justify-between">
          <div className="mt-[24px] flex items-center">
            <h2 className="inline-block text-[36px] leading-[48px] font-semibold">
            Browse By Category
            </h2>

            
          </div>

          <div className="flex gap-2">
            <Button size={"icon"} variant={"outline"} className="rounded-full">
              <ChevronLeft size={24} />
            </Button>

            <Button size={"icon"} variant={"outline"} className="rounded-full">
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>


        {/* card div */}

        <div className="w-full flex gap-[30px] mt-[60px]">
          {categorycard.map((item, index) => {
            return(
                <Card
                 className={`w-[170px] h-[145px] flex gap-[16px] flex-col items-center justify-center ${item.isActive ? 'bg-red-500' : 'bg-white' } 
                    ${item.isActive ? 'text-white' : 'text-black'} 
                    hover:bg-red-500`} 
                 key={index}>

                <Image src={item.src} alt="mob" width={56} height={56}></Image>

                <p className="text-[16px] leading-[24px]">{item.name}</p>
                
            </Card>

        )})}

        </div>

     
      </section>
    </>
  );
}

export default Category;
