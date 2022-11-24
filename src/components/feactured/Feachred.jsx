import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './feachred.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Feachred = () => {
  const percentage = 66;

  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>
        Total Revenu
        </h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className='bottom'>
          <div className='featuredChart'>
           <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={1}/>
          </div>
          <p className='title'>Total Sales Made Today</p>
          <p className='amount'>$420</p>
          <p className='desc'>Privious transictions processing. Last Payment May Not include</p>
          <div className='summary'>
              <div className='item'>
               <div className='itemTitle'>Target</div>
               <div className='itemResult'>
                 <KeyboardArrowDownIcon fontSize='small'/>
                <div className='resultAmount'>$12.4k</div>
               </div>
              </div>
              <div className='item'>
               <div className='itemTitle'>Last WEEK</div>
               <div className='itemResult positive'>
                 <KeyboardArrowUpIcon fontSize='small'/>
                <div className='resultAmount'>$12.4k</div>
               </div>
              </div>
              <div className='item'>
               <div className='itemTitle'>Last Month</div>
               <div className='itemResult'>
                 <KeyboardArrowUpIcon fontSize='small'/>
                <div className='resultAmount'>$12.4k</div>
               </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Feachred;
