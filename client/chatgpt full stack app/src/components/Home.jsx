import { useState } from "react";

function Home() {
    const [Prompt, setPrompt] = useState("");
    const [ans, setAnswer] = useState("");
    const getChat = async () => {
        try {
       
            const postResponse = await fetch('http://localhost:3000/chat', {
                method: 'POST',
                body: JSON.stringify({
                    message: Prompt 
                }),
                headers: {
                    "Content-type": "application/json"
                }
            });
    
            if (!postResponse.ok) {
                throw new Error('Error sending prompt.');
            }

    
            const data = await postResponse.json();
            console.log(data);
            setAnswer(data.answer);


        } catch (error) {
            console.error('Error fetching chat:', error);
        }
    }
    

    return (
        <div className="">
            <div className="border-2 border-black w-4/12 p-5 m-auto mt-8">
                <input type="text" name="" id="" placeholder="Enter Prompt" onChange={
                    (e) => {
                        setPrompt(e.target.value);
                    }
                } className="border-2 border-black p-4 mr-2"/>
                <button onClick={getChat}  className = "border-2 border-black p-4 ml-2">Click to get answer</button>
            </div>
            <div className="border-2 border-black w-4/12 p-5 m-auto mt-8">
            <p>Answer:  {ans}</p>
            </div>
                
        </div>
        
    )
}

export default Home;