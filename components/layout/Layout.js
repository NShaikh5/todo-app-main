import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Sidebar from '../sidebar';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      {/* <Sidebar/> */}
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
