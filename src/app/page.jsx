import Image from "next/image";
// import Navbar from "@/components/Navbar";
import HeroSectiossn from "@/components/mainhero"
import HeroSection from "@/components/Hero"
// import Footer from "@/components/Footer"
import Aboutcompany from "@/components/aboutcompany"
import Productcategory from "@/components/productcatee"
import Productlist from "@/components/Productlist"
import Stats from "@/components/stats"
import Newabout from "@/components/nextabout"
import CarRentalCTA from "@/components/Cta"
import Testimonial from "@/components/testimonials"
export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <HeroSectiossn />
    {/* <HeroSection /> */}
    {/* <Footer /> */}
    <Productcategory />
    <Aboutcompany />
    <Productlist />
    <Stats />
        <Newabout />
     <CarRentalCTA /> 
    <Testimonial />
     
    
    </>
  );
}
