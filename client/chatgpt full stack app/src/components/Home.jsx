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
        <div className="m-auto ">
            <div className="border-2 border-black w-1/2 m-auto p-2 flex rounded-2xl">
                <div className="m-auto p-2">
                <input type="text" name="" id="" placeholder="Enter Prompt" onChange={
                    (e) => {
                        setPrompt(e.target.value);
                    }
                } className="border-2 border-black p-2 rounded-2xl"/>


                <button onClick={getChat}  className = "border-2 border-black p-2 rounded-2xl">Click</button>

            
                </div>
            </div>
            <br />
            <div className="border-2 border-black w-1/2 m-auto p-2 rounded-2xl">
            <p className="p-2">Answer:  {ans}</p>
            </div>
                
        </div>
        
    )
}

export default Home;