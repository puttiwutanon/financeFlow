import {useState} from 'react'
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
        const userCredential = await doCreateUserWithEmailAndPassword(email, password);
        console.log('User signed up:', userCredential.user);
        navigate('/main_page');
    } catch (err) {
        console.error(err);
        setError(err.message);
    }   finally {
        setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError('');
    setLoading(true);

    try {
      const result = await doSignInWithGoogle();
      console.log('Google user:', result.user);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
        <div className='authform'>
            <h1>สมัครเข้าใช้ financeFlow</h1>
            <form action="" className="authform-email" onSubmit={handleSignup}>
                <div className="text-input">
                    <label htmlFor="">อีเมล</label>
                    <input type="text" placeholder='กรุณาใส่อีเมล'value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="text-input">
                    <label htmlFor="">รหัสผ่าน</label>
                    <input type="password" placeholder='กรุณาใส่รหัสผ่าน' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'กำลังสมัคร...' : 'สมัคร'}
                </button>
            </form>
            <div className="authform-google" onSubmit={handleGoogleSignup}>
                <button onClick={handleGoogleSignup} disabled={loading}>
                สมัครโดย Google
                </button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    </>
  )
}

export default SignupForm