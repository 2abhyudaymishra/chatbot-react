import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit';

import Button from '../components/Button';
import Inputdetails from '../components/Inputdetails';

window.addEventListener('load',()=>{
    let header = document.getElementsByClassName("react-chatbot-kit-chat-header")[0];
    header.innerHTML="Student Enrollment System"
})

const config = {
    initialMessages: [
        createChatBotMessage("Enter into Student Info System"),
        createCustomMessage('Enroll', 'Enroll'),
    ],
    customMessages: {
        Enroll: (props) => <Button {...props} name={"Enroll now!"} />,
        Gotit : (props) => <Button {...props} name={"Got it!"} />,
        Inputname : (props) => <Inputdetails {...props} name={"name"} />,
        Inputage: (props) => <Inputdetails {...props} name={"age"} />
    }
};

export default config;