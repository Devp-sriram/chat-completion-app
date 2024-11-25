import { Mistral } from "@mistralai/mistralai" 
function App() {

const client = new Mistral({apiKey:import.meta.env.VITE_MISTRAL_API_KEY});


async function run(){
     
     const result = await client.chat.complete({
        model : 'mistral-small-latest',
        messages :[
          { role:'system', content :" you are programing trends analizer you analize various tech stacks and programing way to build app" },
          { role:'user', content : "what's good for entreprice apps" }
        ],
        temperature : 0.6,  
     });
    
    console.log(result.choices[0].message.content);
}

  return (
    <>
     <button onClick={run}>Generate Response</button>
     <p>see the console</p>
    </>
  )
}

export default App
