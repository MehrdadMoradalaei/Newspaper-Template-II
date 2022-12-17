import './Header.css'
import PrimarySearchAppBar from './NavBar'
function Header(){
    return(
      <div className='HeaderStyle'>
        <div className='TitleHeader'>
          <h1>Independent News Website</h1>
          <h4>News and Lifesyle Magazine Template</h4>
        </div>
        <div className='Links'>
          <PrimarySearchAppBar/>
        </div>
      </div>
    );
}
export default Header;
