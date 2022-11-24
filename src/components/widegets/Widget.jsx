import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
const Widget = ({type}) => {
    let data;
    //temprary
    const amunt = 100;
    const diff = 20;
    switch (type){
        case "user":
            data= {
                title:"USER",
                isMoney:false,
                link:"See all User",
                icon:<PersonOutlineIcon className='icon' style={{color:"crimson",
                backgroundColor:"rgba(255,0,0,0.2)"}}/>,  
            }
            break;
            case "order":
            data= {
                title:"Orders",
                isMoney:false,
                link:"View all Orders",
                icon:<ShoppingCartCheckoutOutlinedIcon className='icon'
                    style={{color:"crimson",
                backgroundColor:"rgba(255,0,0,0.2)"}}
                />,  
            }
            break;
            case "earning":
                data= {
                    title:"EARNINGS",
                    isMoney:false,
                    link:"View net earning",
                    icon:<MonetizationOnOutlinedIcon className='icon'
                        style={{color:"green",
                backgroundColor:"rgba(255,0,0,0.2)"}}
                    />,  
                }
                break;
            case "balance":
            data= {
                title:"BALANCE",
                isMoney:true,
                link:"See deatils",
                icon:<AccountBalanceOutlinedIcon className='icon'
                    style={{color:"purple",
                backgroundColor:"rgba(255,0,0,0.2)"}}
                />,  
            }
            break;
            default:
            break;

    }



  return (
    <div className='widgets'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"}{amunt}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon/>
           {diff} %
        </div>
         {/* <PersonOutlineIcon className='icon'/> */}
         {data.icon}
      </div>
      
    </div>
  )
}

export default Widget;
