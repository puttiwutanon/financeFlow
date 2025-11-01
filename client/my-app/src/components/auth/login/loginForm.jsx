import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <>
        <div className='authform'>
            <h1>เข้าสู่ระบบ financeFlow</h1>
            <form action="" className="authform-email">
                <div className="text-input">
                    <label htmlFor="">อีเมล</label>
                    <input type="text" placeholder='กรุณาใส่อีเมล'/>
                </div>
                <div className="text-input">
                    <label htmlFor="">รหัสผ่าน</label>
                    <input type="text" placeholder='กรุณาใส่รหัสผ่าน'/>
                </div>
                <button>เข้าสู่ระบบ</button>
            </form>
            <div className="authform-google">
                <button>เข้าสู่ระบบโดยgoogle</button>
            </div>
            <Link to="/signup"><a>ยังไม่เคยสมัครเข้าใช้งาน? สมัครเลยสิ!!!</a></Link>
        </div>    
    </>
  )
}

export default LoginForm