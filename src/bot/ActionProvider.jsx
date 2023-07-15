import React, { useState } from 'react';
import { createCustomMessage, createClientMessage } from 'react-chatbot-kit';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
	const [details,setDetails] = useState('')
	
	const handleenrollnow = () => {
		const botMessage = createChatBotMessage('Hello, Welcome to student info system');
		const gotit = createCustomMessage('Gotit', 'Gotit');

		setState((prev) => {
			const newMessages = [...prev.messages];
			newMessages.splice(0, 2);
			return {
				...prev,
				messages: [...newMessages, botMessage, gotit],
			}

		});
	}

	const handlegotit = () => {
		const botMessage = createChatBotMessage('Enter your Name');
		const inputname = createCustomMessage("Inputname","Inputname") 
		const message = createClientMessage('Got it!');
		setState((prev) => {
			const newMessages = [...prev.messages];
			newMessages.splice(1, 1);
			return {
				...prev,
				messages: [...newMessages, message, botMessage,inputname],
			};
		});
	};

	const handlenamesubmit = (name) => {
		let updatedname  = name[0].toUpperCase()+ name.substr(1).toLowerCase();
		const botMessage = createClientMessage(`${updatedname}`);
		const botMessage1 = createChatBotMessage(`Enter your Age`);
		const inputage = createCustomMessage("Inputage","Inputage");
		setDetails(updatedname);
		setState((prev) => {
			const newMessages = [...prev.messages];
			newMessages.splice(3)
			return {
				...prev,
				messages: [...newMessages, botMessage, botMessage1,inputage],
			};
		});
	}

	const handleageSubmit = (age) => {
		const clientMessage = createClientMessage(`${age}`);
		const botMessage = createChatBotMessage(`Thank you. In 5 seconds, bot will exit`);
		const exitMessage = createChatBotMessage(`Your name ${details} aged ${age} has been added to student system. You may now exit.`);
		setState((prev) => {
			const newMessages = [...prev.messages];
			newMessages.splice(4, 2);
			return {
				...prev,
				messages: [...newMessages, clientMessage,botMessage],
			};
		});


		let count = 6;
		const countdown = setInterval(() => {

			if (count <= 0) {
				setState((prev) => {
					const newMessages = [...prev.messages,exitMessage];
					newMessages.splice(0,6)
					return {
						...prev,
						messages: [...newMessages]
					};
				});
				clearInterval(countdown);
			}
			else{
				setState((prev) => {
	
					const newMessages = [...prev.messages];
					const message = newMessages[5].message;
					let uddatedmessage= message.slice(0,14) + count + message.substr(15)
					newMessages[5].message = uddatedmessage;
					return {
						...prev,
						messages: [...newMessages],
					};
				});
			}
			count=count-1;
		}, 1000)	
	}



return (
	<div>
		{React.Children.map(children, (child) => {
			return React.cloneElement(child, {
				actions: { handlegotit, handleenrollnow, handlenamesubmit, handleageSubmit },
			});
		})}
	</div>
);
};

export default ActionProvider;