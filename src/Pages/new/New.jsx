import "./new.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from "../../components/Navbar/Navbar";
const New = () => {
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar></Navbar>
        <div className="top">
          <h1>Add New User</h1></div>
        <div className="botto">
          <div className="left">
            <img src="https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
          </div>
          <div className="right">
          <form>
          <div className="formInput">
          <label>User Name</label>
           <input type="text" placeholder="User Name"></input>
          </div>
          <div className="formInput">
            <label>Email</label>
             <input type="email" placeholder="Enter Your Email id"></input>
          </div>
          <div className="formInput">
            <label>Phone</label>
             <input type="text" placeholder="Enter Your Phone Number"></input>
          </div>
          <div className="formInput">
            <label>Password</label>
             <input type="password" placeholder="Enter Your Password"></input>
          </div>
          <div className="formInput">
            <label>Country</label>
             <input type="password" placeholder="USA"></input>
          </div>
          <button>Send</button>
          </form>
          </div>
          </div>
        </div>
      </div>
  )
}

export default New;
