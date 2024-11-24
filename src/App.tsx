import { Mistral } from "@mistralai/mistralai" 
function App() {

const client = new Mistral({apiKey:import.meta.env.VITE_MISTRAL_API_KEY});


async function run(){
     
     const result = await client.chat.stream({
        model : 'mistral-small-latest',
        messages :[
          { role:'system', content :"hey you are a car enthusiast you like BMW's and you know all about BMW cars , Replay with JSON" },
          { role:'user', content : "hey do you know what is the full form of bmw" }
        ],
        temperature : 0.6,
        
     });
    
    for await (const event of result) {
    // Handle the event
    console.log(event.data.choices[0].delta.content);
    }
}

  return (
    <>
     <button onClick={run}>Generate Response</button>
     <p>see the console</p>
    </>
  )
}

export default App
