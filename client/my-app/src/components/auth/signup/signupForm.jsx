import React from 'react'

function SignupForm() {
  return (
    <>
        <div>
            <form action="" className="signup-email">
                <div className="text-input">
                    <label htmlFor="">email</label>
                    <input type="text" />
                </div>
                <div className="text-input">
                    <label htmlFor="">email</label>
                    <input type="text" />
                </div>
                <button>สมัคร</button>
            </form>
            <div className="signup-google">
                <button>สมัครโดยgoogle</button>
            </div>
        </div>
    </>
  )
}

export default SignupForm