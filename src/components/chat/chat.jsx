import { useEffect, useState } from "react"; //anything that dont want to clog up first render

export const Chat =() => {
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const[messages, setMessages] = useState([]);

    function getChats(){
    
        fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
        .then((response) => response.json())
        .then((data) => {
            console.log("chats: ");
            console.log(data);

            setChats(data.Items);
        });
        
     
    }

    function getMessages(chatId){
        fetch(`https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`)
    .then((response) => response.json())
    .then((data) => {
        console.log("Messages: ");
        console.log(data);

        setMessages(data.Items);
    });
    }


    function setChat(chat){
        setCurrentChat(chat);
        getMessages(chat.id);
    }


    useEffect(() => {
        getChats();
   }, []) //pass in function and parameters  
    
   
   return (
        <div>
        <h1>Chat</h1>
        <div style={{display: "flex" /*making 2 columns*/}}> 
            <div >
                <h3>Chat</h3>
                {
                    chats.map((chat) => (
                        <div key={chat.id}/*parent div to stack the buttons*/> 
                            <button onClick={() => setChat(chat)}>{chat.name}</button>
                        </div>
                    ))
                }
            </div>
            <div>
            <h3>{/*only display if not null*/currentChat && currentChat.name} Messages</h3>
            {
                messages.map((message) => (
                    <div key={message.id}>{message.username}: {message.text} </div>

                ))
            }
            </div>
        </div>
        </div>
    )

    
};