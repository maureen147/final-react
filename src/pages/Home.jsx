import img2 from "../assets/images/watch 1111111111.png"
import Hero from "../components/Hero"
import Loader from "../components/Loader"
import Menu from "../components/Nav"
import ProductCard from "../components/ProductCard"
import "../css/Home.css"

function Home () {


return (
    <>
    {/* <Menu/> */}
    <Hero heading="Welcome to Home Page" image={img2}/>
    {/* <ProductCard/> */}
    {/* <Loader/>     */}
    {/* <h1 className="bg-danger text-light">Welcome to Home page</h1> */}
    <div className="" style={{backgroundColor: "green", height: "300px", borderRadius: "15px"}}>
        <img src={img2} alt="" />
    </div>
    </>

)
}

export default Home