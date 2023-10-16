import {React} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate=useNavigate()
  const handleLogout=async()=>{
    try{
      await logout()
      navigate('/')
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex  justify-between z-[100] w-full p-4 absolute ">
        <Link to="/">
          <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
            NETFLIX
          </h1>
        </Link>
        {
          user?.email?(<div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button></div>):(<div>
          <Link to="/signin">
            <button className="text-white pr-4">SIGN IN</button>
          </Link>

          <Link to="/signup">
            <button className="bg-red-600 px-4 py-2 rounded">SIGN UP</button>
          </Link>
        </div>)
        }
        
      </div>
    </>
  );
}

export default Navbar