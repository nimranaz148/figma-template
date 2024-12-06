import React from "react";
import Image from "next/image";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Eye, Heart, Star, Trash2 } from "lucide-react";
import { Flashcard } from "@/constant/flashcard";

function Productcard({loop}: {loop: Flashcard[]}) {
  return (
    <>
    {loop.map((item, index) =>{
        return(
            <Card className="w-[270px] h-full overflow-hidden grow-0 shrink-0" key={index}>
            {/* top imge */}
    
            <div className="relative w-full h-[250px] bg-[#F5F5F5] p-3 flex justify-center items-center">
              <Image src={item.src} alt="game" width={172} height={152}></Image>
    
             {/* badge */}
             {item.discountbtn &&  <Badge className="bg-[#DB4444] py-1 px-3 absolute top-3 left-3">
                -{item.discountprice}%
              </Badge>}

              
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                {/* trash */}
              {item.TrashIcon &&   <Button
                  size={"icon"}
                  variant={"outline"}
                  className="rounded-full w-[34px] h-[34px]"
                >
                  <Trash2 size={24} />
                </Button>}

    
                {/* heart */}
              {item.HeaterIcon &&   <Button
                  size={"icon"}
                  variant={"outline"}
                  className="rounded-full w-[34px] h-[34px]"
                >
                  <Heart size={24} />
                </Button>}

    
                {/* eye */}
                {item.EyeIcon && <Button
                  size={"icon"}
                  variant={"outline"}
                  className="rounded-full w-[34px] h-[34px]"
                >
                  <Eye size={24} />
                </Button>}

              </div>
            </div>
    
            {/* bottom content */}
    
            <div className="w-full flex flex-col gap-[6px] text-[16px] leading-[24px] font-medium pl-[3px]">
              {/* 1 */}
              <p className="mt-[10px]">{item.Heading}</p>
    
              {/* 2 */}
              <div className="flex gap-3">
                <span className="text-red-500">${item.price}</span>
                <span className="text-gray-500 line-through">{item.oldprice && "$"}
                    {item.oldprice}</span>
              </div>
    
              {/* 3 */}
              <div className="flex gap-1 items-center">
                {[...Array(item.star)].map(() => {
                  return <Star size={20} fill="#FFAD33" color="#FFAD33" />;
                })}
    
                <p className="text-gray-500">({item.reviews})</p>
              </div>
            </div>
          </Card>
        )
    })}
    </>
  );
}

export default Productcard;
