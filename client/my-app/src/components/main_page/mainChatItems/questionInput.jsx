import React from 'react'

function QuestionInput() {
  return (
    <>
        <div className="questionInput">
            <form>
                <input placeholder="ตั้งคำถามมาได้เลยครับ ^W^"/>
                <button type="submit"><i class="fa-solid fa-arrow-up"></i></button>
            </form>            
        </div>
    </>
  )
}

export default QuestionInput