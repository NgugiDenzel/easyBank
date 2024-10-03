import Money from "./assets/image-currency.jpg"
import Restuarant from "./assets/image-restaurant.jpg"
import Plane from "./assets/image-plane.jpg"
import confetti from "./assets/image-confetti.jpg"
function ThirdContainer(){

    return(<div className="grid grid-cols-1 md:grid-cols-4">
        <div className=" bg-white mx-4" >
       <div className="">  <img className="w-full p-0 h-44" src={Money} />
       </div>
        <div className="px-4">
        <h1 className="text-xl font-bold mb-3">Recieve money in any currency wih no fees</h1>
        <p>The world is getting smaller and we are becoming mre mobile
            so why should you be forced to recieve money in a single 
        </p>
        </div>
        
        
        </div>
        <div className=" bg-white mx-4 ">

        <img src={Restuarant} />
        <div className="">
        <h1 className="text-xl font-bold mb-3">Treat yourself without worrying about money</h1>
        <p>Our simple budgeting feature allows you to seperate out your
             spending and set reallistic limits each month. That means you..

        </p>

        </div>
         </div>

        <div className=" bg-white mx-4 ">
        <img src={Plane}/>
        <div className="px-4 ">
    <h1 className="text-xl font-bold mb-3">Take your easybank card wherever you go</h1>
        <p>we want you to enjoy your travels. this is why we dont charge fees 
            on purchases while you are abroad We will even show you..
        </p>
        </div>
        
        
        
        </div>

        <div className=" bg-white mx-4 ">
        <img src={confetti}/>
        <div className="px-4 rounded-full">
        <h1 className="text-xl font-bold mb-3">Our invite only Beta accounts are now live</h1>
        <p>After alot of hardwork by the whole team, we are excited to launch our closed beta. its easy to request an invite through the site</p>
        
        
        </div>
        
    </div>
        

        
         </div>)
}
export default ThirdContainer;