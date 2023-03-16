import Link from "next/link"
import classes from './index.module.css'

export default function Home(){
  
    return(
      <div> 
        <form className={classes.form} action="/api/login" method="post">
          <h1>Login</h1>
          <br />
          <label className={classes.label}>
            Email Address
          </label>
          <br />
          <input className={classes.inputt} type='email' required name='email' placeholder='Type your email'></input>
          <br />
          <label className={classes.label}>
            Pasword
          </label>
          <br/>
          <input className={classes.inputt} type='password' required name='password' placeholder='Type your password'></input>
          <br />
          
          <input className={classes.btn} type='submit' value='Login'></input>
         <br />
        <div className={classes.label}>
          Don't have an Account? <Link href='/register'>  Register/SignUp</Link>
        </div>
          
  
        </form>
  
        {/* <h1> Registraion </h1>
        <form action="/api/register" method="post">
          <label>
            EMail Address
          </label>
          <input type='email' name='email' placeholder='Type your email'></input>
          <label>
            Pasword
          </label>
          <input type='password' name='password' placeholder='Type your password'></input>
          <input type='submit' value='Register'></input>
  
        </form> */}
            </div>
    )
  }