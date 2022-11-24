import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
         <div className='search'>
            <input type='text' placeholder='serach....'></input>
            <SearchIcon/>
         </div>
         <div className='items'>
          <div className='item'>
          <LanguageIcon className='icon'/>
            English
          </div>
          <div className='item'>
          <DarkModeIcon className='icon'/>
          </div>
          <div className='item'>
          <FullscreenExitIcon className='icon'/>
          </div>
          <div className='item'>
          <NotificationsActiveIcon className='icon'/>
          <div className='counter'>1</div>
          </div>
          <div className='item'>
          <ChatBubbleOutlineIcon className='icon'/>
          <div className='counter'>2</div>
          </div>
          <div className='item'>
          <ListIcon className='icon'/>
          </div>
          <div className='item'>
          <img src='https://api.multiavatar.com/Binx Bond.svg' alt=' '
          className='avatar'></img>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Navbar;
