"use client"
import React, { useState } from "react";

const RelatedItemCard = ({ image, title, price, oldPrice, rating, discount }:any) => {
  return (
    <div className="relative border rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-200 bg-white">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{discount}%
        </div>
      )}

      {/* Product Image */}
      <div className="flex justify-center items-center mb-4">
        <img
          src={image}
          alt={title}
          className="h-32 w-32 object-contain rounded-md"
        />
      </div>

      {/* Product Details */}
      <h4 className="text-sm font-semibold text-gray-800 truncate">{title}</h4>
      <div className="flex items-center text-yellow-400 text-xs my-1">
        {"⭐".repeat(5)}
        <span className="text-gray-500 ml-2">({rating})</span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <p className="text-red-500 text-sm font-bold">${price}</p>
        {oldPrice && (
          <p className="text-gray-500 text-xs line-through">${oldPrice}</p>
        )}
      </div>

      {/* Add to Cart Button */}
      <button className="w-full mt-4 py-2 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800">
        Add To Cart
      </button>
    </div>
  );
};

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

  const relatedItems = [
    {
      image: "/gamepad.png",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 88,
      discount: 40,
    },
    {
      image: "/keyboard.png",
      title: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      rating: 75,
      discount: 35,
    },
    {
      image: "/monitor.png",
      title: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      rating: 99,
      discount: 30,
    },
    {
      image: "/cpucooler.png",
      title: "RGB Liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 85,
      discount: 30,
    },
  ];

  return (
    <div className="bg-gray-50 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Account / Gaming / <span className="font-semibold">Havic HV G-92 Gamepad</span>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Images */}
        <div>
          <img
            src="https://via.placeholder.com/300"
            alt="Product"
            className="w-full rounded-md shadow-md"
          />
          <div className="flex mt-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={`https://via.placeholder.com/80?text=Thumb+${i + 1}`}
                alt={`Thumbnail ${i + 1}`}
                className="w-16 h-16 rounded-md border cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold">Havic HV G-92 Gamepad</h1>
          <div className="flex items-center text-yellow-400 my-2">
            ⭐⭐⭐⭐⭐ <span className="text-sm text-gray-500 ml-2">(150 Reviews)</span>
          </div>
          <p className="text-green-600 font-semibold mb-4">In Stock</p>
          <p className="text-2xl font-semibold text-red-500">$192.00</p>
          <p className="text-gray-600 my-4">
            Playstation 5 Controller Skin High-quality vinyl with air channel adhesive for
            easy bubble-free install & mess-free removal. Pressure-sensitive.
          </p>

          {/* Colours */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold">Colours:</h4>
            <div className="flex gap-3 mt-2">
              <div className="w-6 h-6 rounded-full bg-red-500 cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-gray-800 cursor-pointer"></div>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold">Size:</h4>
            <div className="flex gap-2 mt-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Buttons */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={handleDecrease}
                className="px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              Buy Now
            </button>
            <button className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
              ♥
            </button>
          </div>

          {/* Delivery Information */}
          <div className="mt-6 text-gray-600 text-sm">
            <p>🚚 Free Delivery - Enter your postal code for delivery availability.</p>
            <p className="mt-2">↩️ Free 30-day delivery returns. <a href="#" className="text-blue-500">Details</a></p>
          </div>
        </div>
      </div>

      {/* Related Items Section */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4">Related Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedItems.map((item, index) => (
            <RelatedItemCard
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
              rating={item.rating}
              discount={item.discount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;































































































































































// 'use client'

// import Image from "next/image"
// import { useState } from "react"
// import { Star, Heart, Search, ShoppingCart, User, ChevronDown, Send, Minus, Plus } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Input } from "@/components/ui/input"

// export default function ProductDetails() {
//   const [quantity, setQuantity] = useState(1)

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Top Banner */}
//       <div className="bg-black text-white py-3 px-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <p className="text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
//             <Button variant="link" className="text-white text-sm underline">ShopNow</Button>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="text-sm">English</span>
//             <ChevronDown className="h-4 w-4" />
//           </div>
//         </div>
//       </div>

//       {/* Header */}
//       <header className="border-b py-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex items-center gap-12">
//             <h1 className="text-2xl font-bold">Exclusive</h1>
//             <nav className="hidden md:flex items-center gap-12">
//               <a href="#" className="text-sm">Home</a>
//               <a href="#" className="text-sm">Contact</a>
//               <a href="#" className="text-sm">About</a>
//               <a href="#" className="text-sm">Sign Up</a>
//             </nav>
//           </div>
//           <div className="flex items-center gap-6">
//             <div className="relative hidden md:flex items-center">
//               <Input 
//                 type="search" 
//                 placeholder="What are you looking for?"
//                 className="w-[300px] bg-gray-100"
//               />
//               <Search className="absolute right-3 h-4 w-4 text-gray-400" />
//             </div>
//             <div className="flex items-center gap-4">
//               <Heart className="h-6 w-6" />
//               <ShoppingCart className="h-6 w-6" />
//               <User className="h-6 w-6" />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Breadcrumb */}
//       <div className="container mx-auto py-6">
//         <div className="flex items-center gap-2 text-sm text-gray-500">
//           <span>Account</span>
//           <span>/</span>
//           <span>Gaming</span>
//           <span>/</span>
//           <span className="text-black">Havic HV G-92 Gamepad</span>
//         </div>
//       </div>

//       {/* Product Section */}
//       <main className="container mx-auto py-8">
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Image Gallery */}
//           <div className="space-y-4">
//             <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
//               <Image 
//                 src="/placeholder.svg" 
//                 alt="Product" 
//                 width={600} 
//                 height={600}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="grid grid-cols-4 gap-4">
//               {[1,2,3,4].map((i) => (
//                 <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
//                   <Image 
//                     src="/placeholder.svg" 
//                     alt="Thumbnail" 
//                     width={150} 
//                     height={150}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="space-y-6">
//             <h1 className="text-3xl font-semibold">Havic HV G-92 Gamepad</h1>
            
//             <div className="flex items-center gap-4">
//               <div className="flex">
//                 {[1,2,3,4].map((i) => (
//                   <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                 ))}
//                 <Star className="h-5 w-5 text-gray-300" />
//               </div>
//               <span className="text-sm text-gray-500">(150 Reviews)</span>
//               <span className="text-sm text-green-500">In Stock</span>
//             </div>

//             <div className="text-3xl font-semibold">$192.00</div>

//             <p className="text-gray-600">
//               PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
//             </p>

//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-medium mb-2">Colors:</h3>
//                 <RadioGroup defaultValue="white" className="flex gap-2">
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="white" id="white" className="bg-white border-2" />
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="red" id="red" className="bg-red-500" />
//                   </div>
//                 </RadioGroup>
//               </div>

//               <div>
//                 <h3 className="font-medium mb-2">Size:</h3>
//                 <div className="flex gap-2">
//                   {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
//                     <Button
//                       key={size}
//                       variant="outline"
//                       className="w-12 h-12"
//                     >
//                       {size}
//                     </Button>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="flex items-center border rounded-md">
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   >
//                     <Minus className="h-4 w-4" />
//                   </Button>
//                   <span className="w-12 text-center">{quantity}</span>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() => setQuantity(quantity + 1)}
//                   >
//                     <Plus className="h-4 w-4" />
//                   </Button>
//                 </div>
//                 <Button className="bg-red-500 hover:bg-red-600">Add To Cart</Button>
//                 <Button variant="outline">
//                   <Heart className="h-4 w-4 mr-2" />
//                   Add to Wishlist
//                 </Button>
//               </div>
//             </div>

//             {/* Delivery Info */}
//             <Card className="p-4 space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="p-2 bg-gray-100 rounded-full">
//                   <Send className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium">Free Delivery</h3>
//                   <p className="text-sm text-gray-500">Enter your postal code for Delivery Availability</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="p-2 bg-gray-100 rounded-full">
//                   <ShoppingCart className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium">Return Delivery</h3>
//                   <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

