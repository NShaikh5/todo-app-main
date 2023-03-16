import Link from 'next/link';
import classes from './MainNavigation.module.css';
import Image from 'next/image';
import { useState,useEffect } from 'react';

function MainNavigation() {
const [isLogin, setIsLogin]=useState(false)

useEffect(() => {
  if(localStorage.getItem("loggedInUser") && localStorage.getItem("loggedInUser")!==''){
    setIsLogin(true)
  }else {
    setIsLogin(false)
  }

	console.log("I run everytime this component rerenders")
});

  return (
    
      
    <header className={classes.header}>
       <Image
        src="/logo.png"
        alt="My Image"
        width={50}
        height={40}
      />
      <div className={classes.logo}>Exercise Tracker</div>
      <nav>
        <ul>
          <li>
            <Link href='/activity'>Activities</Link>
          </li>
          <li>
            <Link href='/new-todo'>Add Activity</Link>
          </li>
          <li>
            <Link href='/register'>Register/SignUp</Link>
          </li>
          <li>
            <Link  href='/login'>Login</Link>
          </li>
          {/* style={{'display': (isLogin)? 'none':'block'}} */}
          {/* style={{'display': (isLogin)? 'block':'none'}} */}
          <li>
            <Link href='/login'  >LogOut</Link>
          </li>
        </ul>
      </nav>
    </header>
    );
}

export default MainNavigation;
