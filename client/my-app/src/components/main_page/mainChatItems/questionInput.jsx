import {useState} from 'react'

function QuestionInput() {
  const [input, setInput] = useState("");

  async function sendMessage(e) {
    e.preventDefault();                 

    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input }),   
    });

    const data = await res.json();
    console.log("Gemini answer:", data.answer);    

    return data.answer;
  }

  return (
    <>
        <div className="questionInput">
            <form onSubmit={sendMessage}>
                <input 
                  placeholder="ตั้งคำถามมาได้เลยครับ ^W^"
                  value={input}
                  onChange={(e)=>setInput(e.target.value)}
                />
                <button type="submit"><i class="fa-solid fa-arrow-up"></i></button>
            </form>            
        </div>
    </>
  )
}

export default QuestionInput