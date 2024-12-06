import { ShoppingCart, Star, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
  isNew?: boolean;
  rating?: number;
  reviews?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    image: "guccibag.png",
    discount: 35,
    rating: 5,
    reviews: 65
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    price: 1960,
    image: "/cpucooler.png",
    rating: 5,
    reviews: 65
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    image: "/usbgamepad.png",
    rating: 5,
    reviews: 65
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: 750,
    image: "/satinjacket.png",
    rating: 5,
    reviews: 65
  },
];

export default function Wishlist() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-[#DB4444] rounded" />
          <h2 className="text-xl">Wishlist (4)</h2>
        </div>
        <Button variant="outline" className="border-black/50">
          Move All To Bag
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="relative border-none">
            <CardContent className="p-0">
              <div className="relative bg-[#F5F5F5] p-4 rounded-t-lg aspect-square">
                {product.discount && (
                  <span className="absolute left-3 top-3 bg-[#DB4444] text-white px-3 py-1 rounded text-xs">
                    -{product.discount}%
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute left-3 top-3 bg-[#00FF66] text-white px-3 py-1 rounded text-xs">
                    NEW
                  </span>
                )}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute right-3  bg-white hover:bg-white/90 "
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                {/* Always visible "Add To Cart" button */}
                <div className="absolute inset-x-0 bottom-0 bg-black text-white py-2 flex items-center justify-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="text-sm">Add To Cart</span>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-medium">{product.name}</h3>
                <div className="flex gap-3">
                  <span className="text-[#DB4444]">${product.price}</span>
                  {product.originalPrice && (
                    <span className="line-through opacity-50">${product.originalPrice}</span>
                  )}
                </div>
                {product.rating && (
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#FFAD33] text-[#FFAD33]" />
                      ))}
                    </div>
                    <span className="text-sm opacity-50">({product.reviews})</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
