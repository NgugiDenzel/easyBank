import IntroDesktop from "./assets/bg-intro-desktop.svg"
import ImageMockups from './assets/image-mockups.png'
import ContactForm from "./ContactForm";
import Modal from './Modal';
import { useState } from "react";

function FirstContainer(){
    const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

    return (<div className="md: columns-2 relative ">
        <div className="md:relative">
            <h1 className="text-bold xs:text-5xl sm:text-6xl mb-3">Next generation digital banking</h1>
            <p className="mb-2">Take your financial life online. Your easy bank account will be a one stop shop for spending, saving
                , investing, budgeting and much more
            </p>
            <button className="bg-green-500 rounded-full py-3 px-4 cursor pointer text-white" onClick={openModal}>Request Invite</button>
      
        <Modal isVisible={isModalVisible} onClose={closeModal}>
            <ContactForm />
        </Modal>
        </div>
        <div className="xs:relative top-1 md:relative">
            <img className='' src={IntroDesktop} alt='intro desktop'/>
            <img className="xs:absolute md:absolute top-1 left-14 w-100" src={ImageMockups} alt='image mockups'/>
        </div>


    
    </div>)


}
export default FirstContainer;