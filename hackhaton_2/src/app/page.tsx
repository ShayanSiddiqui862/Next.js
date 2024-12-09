import BlueHeader from "./components/blue-header";
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
      <GreenDiv/>
      <Whitediv/>
      <Lastdiv/>
      <Footer/>
           
    </div>
  )
}