import React from 'react'
import './Single.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Cht from '../../components/Kam/Ct';
import BasicTable from '../../components/table/BasicTable';
const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar></Navbar>
        <div className='top'>
         <div className='left'>
         <div className='editButton'>Edit</div>
         <h1 className='title'>Information</h1>
          <div className='item'>
            <img src="https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
             alt='' 
             className='itemImg'
            ></img>
            <div className='details'>
              <h1 className='itemTiltle'>Jane Doe</h1>
              <div className='deatailItem'>
                <span className='itemKey'>Email:</span>
                <span className='itemValue'>show@gmail.com</span>
              </div>
              <div className='deatailItem'>
                <span className='itemKey'>Phone:</span>
                <span className='itemValue'>123456789</span>
              </div>
              <div className='deatailItem'>
                <span className='itemKey'>Address:</span>
                <span className='itemValue'>Noida</span>
              </div>
              <div className='deatailItem'>
                <span className='itemKey'>Country:</span>
                <span className='itemValue'>USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
           <Cht/>
        </div>
         </div>          
        <div className='bottom'>
        <h1 className='title'>Last Transctions</h1>
         <BasicTable/>
        </div>
      </div>
    </div>
  )
}
export default Single;
