import Category from "@/components/category";
import Feature from "@/components/feature";
import Flashsale from "@/components/Flashsale";
import Hero from "@/components/Hero";
import Month from "@/components/month";
import Ourproduct from "@/components/ourproduct";
import ProductDetails from "@/components/productdetail";
import ServicesSection from "@/components/ServicesSection";
import ShoppingCart from "@/components/ShoppingCart";
import Wishcarts from "@/components/wishcarts";
import Wishlist from "@/components/wishlist";



export default function Home() {
  return (
    <div className="p-[135px] overflow-hidden">
      <Hero/>
      <Flashsale/>
      <Category/>
      <Month/>
      <Ourproduct/>
      <Feature/>
      <ServicesSection/>
      <Wishlist/>
      <Wishcarts/>
      <ShoppingCart/>
      <ProductDetails/>
   
    
    </div>
  
  );
}
