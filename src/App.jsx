import { Mistral } from "@mistralai/mistralai"
import { useState } from "react";

function App() {

const client = new Mistral({apiKey:import.meta.env.VITE_MISTRAL_API_KEY});
const [res,setRes] = useState([]);

async function run(){

     
     const result = await client.chat.stream({
        model : 'mistral-small-latest',
        messages :[
          { role:'system', content :" you are programing trends analizer you analize various tech stacks and programing way to build app" },
          { role:'user', content : "what's good for entreprice apps" }
        ],
        temperature : 0.6,  
     });
    
    for await (const event of result) {
    //console.log(event.data.choices[0].delta.content)
    setRes(res => [...res,event.data.choices[0].delta.content]);
    };
}

  return (
    <>
     <button onClick={run}>Generate Response</button>
     <p>{res.join(',')}</p>
    </>
  )
}

export default App
