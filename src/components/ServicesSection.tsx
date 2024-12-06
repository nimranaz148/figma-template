import { Truck, Headphones, Shield,  ArrowLeft } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: Shield,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 mt-[140px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-[#2F2E30] bg-opacity-30" />
              <div className="w-14 h-14 rounded-full bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <service.icon className="w-10 h-10 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-xl">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[100px] relative flex items-center justify-center w-[46px] h-[46px] rounded-full border-2 border-black bg-[#F5F5F5] ml-[1000px] hover:bg-slate-300 ">
      <div className="relative w-[24px] h-[24px] flex items-center justify-center rotate-90">
        <div >
        <ArrowLeft />
        </div>
      </div>
    </div>

    </div>
  )

}