import React from 'react';
import Feachred from '../../components/feactured/Feachred';
import ChAt from '../../components/Kam/Ct';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import BasicTable from '../../components/table/BasicTable';
import Widget from '../../components/widegets/Widget';
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
       <Sidebar/>
       <div className='homecontainer'>
         <Navbar/>
         <div className='widgets'>
           <Widget type="user"/>
           <Widget  type="order"/>
           <Widget type="earning"/>
           <Widget  type="balance"/>
         </div>
         <div className='charts'>
           <Feachred/>
           <ChAt/>
         </div>
         <div className='listContainer'>
            <div className='listTitle'>Latest Transition</div>
            <BasicTable/>
         </div>
       </div>
    </div>
  )
}

export default Home;
