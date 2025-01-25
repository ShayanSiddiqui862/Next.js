import Header from "./components/header-1"
import Navbar from "./components/navbar"
import Carousel from "./components/carousel"
import Editors from "./components/editors-pick"
import Best from "./components/best-seller"
import Carousel2 from "./components/carousel2"
import White from "./components/white"
import Featured from "./components/featured"
import Footer from "./components/footer"
export default function Home(){
  return(
    <div>
      <Header />
      <Navbar/>
      <Carousel/>
      <Editors/>
      <Best/>
      <Carousel2 />
      <White />
      <Featured />
      <Footer />
    </div>
  )
}