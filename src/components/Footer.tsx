import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  StepForward,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-[80px] pb-[124px] mt-[146px]">
      <div className="container mx-auto px-[135px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h2 className="text-[24px]  leading-[24px] font-bold">Exclusive</h2>
            <h3 className="text-[20px] leading-[28px] font-medium">
              Subscribe
            </h3>
            <p className="text-base">Get 10% off your first order</p>
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-white/40 text-white placeholder:text-white/40 pr-12"
              />
              <StepForward className="absolute right-3 top-2" />
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Support</h3>
            <div className="space-y-4 text-base">
              <p>
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Account</h3>
            <ul className="space-y-4 text-base">
              <li>
                <Link href="#" className="hover:underline">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Quick Link</h3>
            <ul className="space-y-4 text-base">
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Download App</h3>
            <p className="text-sm text-white/70">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-2">
              <div className="border-2 border-white p-0.5 rounded">
                <Image
                  src="/qrcode.png"
                  alt="QR Code"
                  width={76}
                  height={76}
                  className="bg-white"
                />
              </div>
              <div className="space-y-1">
                <Image
                  src="/google.png"
                  alt="Google Play"
                  width={110}
                  height={40}
                  className="border border-white/60 rounded"
                />
                <Image
                  src="/appstore.png"
                  alt="App Store"
                  width={104}
                  height={30}
                  className="border border-white/60 rounded"
                />
              </div>
            </div>
            <div className="flex gap-6 pt-4">
              <Link href="#" className="hover:opacity-80">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-white/40">
          <p className="text-center text-white/60">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
       
    </footer>
  );
}
