import BankOffice from './assets/Bank Office Icon 3d Transparent Free Download, 3d Bank, Bank, Bank Icon PNG Transparent Image and Clipart for Free Download.jpeg'
import BlackBlue from './assets/Black And Blue Money Currency Financial Icon, Money 3d, Money Icon, Money PNG Transparent Image and Clipart for Free Download.jpeg'
import Bank from './assets/Download Bank Building on White for free.jpeg'
import wallet from './assets/Wallet Vector Art PNG, Wallet Icon Design Vector, Wallet Icons, Wallet, Icon PNG Image For Free Download.jpeg'
import dollar from './assets/Dollar Signs Money Clipart Transparent PNG Hd, Dollar Sign Money Icon, Money Icons, Dollar Icons, Sign Icons PNG Image For Free Download.jpeg'
import graph from './assets/Download graph icon for free.jpeg'
function About(){

    return(
        <div>

    <header className='mb-12'>
        <h1 className="text-5xl text-black">About Us</h1>
    </header>

    <div >
        <section className="bg-gray-100 p-6">

            <div>
            <h2 className="text-4xl">Our Vision</h2>
            <p>
            We envision a world where financial freedom is
                 accessible to all. By leveraging cutting-edge 
                 technology and open banking systems, we aim to
                  put control of personal finances back in your 
                  hands—allowing you to make smarter, faster, and 
                  more informed financial decisions.We envision a world where financial freedom is
                 accessible to all. By leveraging cutting-edge 
                 technology and open banking systems, we aim to
                  put control of personal finances back in your 
                  hands—allowing you to make smarter, faster, and 
                  more informed financial decisions.</p></div>
                  
        </section>

        <section>

            <div className="grid grid-cols-2">
                <img src={BankOffice} />
                <div className='mt-16'>
                <h2 className="text-4xl ">Why We Exist</h2><br />

               <p> Traditional banking systems are
                 often outdated, inefficient, and 
                 difficult to navigate. We created 
                 EasyBank to provide an alternative—a 
                 seamless and user-friendly digital platform 
                 that empowers you to manage your financial 
                 life from anywhere in the world. Whether 
                 youre looking to save, invest, or budget,
                  our tools make it easier than ever to achieve your goals.</p></div></div>
        </section>

        <section className=" bg-gray-100 px-6 py-4">
            <h2 className="text-4xl ">What Makes Us Different</h2>
            <ul>
                <li><strong>Convenience:</strong> Our 100% digital
                 onboarding process allows you to open an account
                  in just minutes, giving you access to all of our
                   features right away—no need to visit a branch.</li>
                <li><strong>Innovation:</strong> With our Open API  
                and cutting-edge platform, you can integrate 
                third-party financial services directly into 
                your EasyBank account, making it a central hub 
                for all your financial needs.</li>
                <li><strong>Transparency:</strong> We don’t 
                believe in hidden fees or complicated fine print.
                 Our platform is designed to offer clear insights
                  into your spending, savings, and investments so 
                  you always know where your money is going.</li>

            </ul>
        </section>

        <section>
            <div className='grid grid-cols-2'>
            <p className='mt-24'><h2 className="text-4xl ">Our Mission</h2>
            Our mission is to create a smarter banking <br />
                 experience for the modern user—one that 
                 adapts to your lifestyle, no matter where <br />
                  you are in the world. We strive to build
                   products that are secure, reliable, and 
                   designed to help you achieve financial success on your terms.</p>
                   <img src={Bank} className='h-96'/>
                   </div>

        </section><br /><br />

        <section className='bg-gray-100 px-6 py-4'>
            <h2 className="text-4xl">Our Core Values</h2>
            <div className="grid grid-cols-4 gap-4">
                <div>
                <image className='rounded-full flex justify-center '> <img src={wallet} alt="" className='h-16 rounded-full'/></image>

                    <h3 className="text-4xl">Simplicity</h3>
                    <p>Banking shouldn’t be complicated. We make managing your finances straightforward and stress-free.</p>
                </div>
                <div>
               <image className='rounded-full flex justify-center'><img  src={graph} alt="" className='h-16 rounded-full'/></image>

                    <h3 className="text-4xl">Empowerment</h3>
                    <p>We give you the tools and insights you need to make informed financial decisions.</p>
                </div>
                <div>
                <image className='rounded-full flex justify-center'><img src={BlackBlue} alt=""  className='h-16 rounded-full'/></image>

                    <h3 className="text-4xl">Security</h3>
                    <p>Your data and money are always protected with top-tier encryption and security protocols.</p>
                </div>
                <div>
                <image className='rounded-full flex justify-center'><img src={dollar} alt="" className='h-16 rounded-full '/></image>
                    <h3 className="text-4xl">Innovation</h3>
                    <p>We’re constantly evolving to offer new, better ways to manage your financial life.</p>
                </div>
            </div>
        </section>

        
            <h2 className="text-4xl ">Join Us on Our Journey</h2>
            <div ><p className='flex justify-start'>
                 As we continue to expand and innovate, we are 
                committed to delivering the 
                best possible experience for
                 our users. Whether you’re 
                 looking to take control of 
                 your budget, simplify your 
                 investments, or manage your 
                 everyday spending, EasyBank is here to help you on your financial journey.
                 As we continue to expand and innovate, we are 
                committed to delivering the 
                best possible experience for
                 our users. Whether you’re 
                 looking to take control of 
                 your budget, simplify your 
                 investments, or manage your 
                 everyday spending, EasyBank is here to help you on your financial journey.</p></div>
            <div className='section'>
                <p></p>
            </div>
    </div>

    <footer>
        <p>© 2024 EasyBank. All Rights Reserved.</p>
    </footer>

</div>
    )

}

export default About;