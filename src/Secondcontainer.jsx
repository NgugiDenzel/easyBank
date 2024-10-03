import OnlineBanking from './assets/icon-online.svg'
import Budgeting from './assets/icon-budgeting.svg'
import Onboarding from './assets/icon-onboarding.svg'
import api from './assets/icon-api.svg'

function Secondcontainer(){

    return(<div className='bg-gray-100 p-3'>
        <h1 className="text-4xl text-start">Why choose EasyBank?</h1>
        <br></br>
        <p className="text-start mb-3">We leverage open banking to turn your bank account
         into your financial Hub,<br /> Control your finances like never before</p>
         <br />
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
                <image className='flex justify-center'><img src={OnlineBanking} /></image>
                <h2 className="text-3xl mb-3">Online banking</h2>
                <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world
                     </p>

            </div>
            <div>
                <image className='flex justify-center'><img src={Budgeting}/></image>
                <h2 className="text-3xl mb-3">Simple Budgeting</h2>
                <p>See exactly where your money goes each month. Recieve notifications when you are cose to hitting your limit
                   </p>
                     
            </div>
            <div>
                <image className='flex justify-center'><img src={Onboarding} /></image>
                <h2 className="text-3xl mb-3">Fast Onboarding</h2>
                <p>We dont do branches. open your account in minutes online and start taking control of your finances right away</p>
                     
            </div>
            <div>
                <image className='flex justify-center'><img src={api}/></image>
                <h2 className="text-3xl mb-3">Open API</h2>
                <p>Manage your savings, investments and much more from one account. Tracking your money has never been easier</p>
                     
            </div>
         </div>



    </div>)
}
export default Secondcontainer;