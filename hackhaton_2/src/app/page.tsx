import BlueHeader from "./components/header-1";
import Carausel from "./components/carousel";
import Editors from "./components/editors-pick";
import Footer from "./components/footer";
import GreenDiv from "./components/green-man";
import Lastdiv from "./components/end";
import Navbar from "./components/navbar";
import ProductCard from "./components/card-2";
import Whitediv from "./components/white";

export default function Home(){
  return(
    <div>
      <BlueHeader/>
      <Navbar/>
      <Carausel/>
      <Editors/>
      <ProductCard/>
      <div className="mt-5 pb-[200px]" >
      <GreenDiv/>
      </div>
      <div className="pb-[50px] ">
      <Whitediv/>
      </div>
      <Lastdiv/>
      <Footer/>
           
    </div>
  )
}