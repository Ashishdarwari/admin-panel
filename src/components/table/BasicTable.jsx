import './Table.scss';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';

const BasicTable = () => {
  const rows = [{
  id:1143155,
  Product:"Razer Blade 15",
  custumer:"Ashish",
  img:"https://cdn2.thecatapi.com/images/lm.jpg",
  date:"1 March",
  amount:"785",
  method:"Cash On Delivery",
  status:'Pending'},

  {id:2225252,
  Product:"Razer Blade 15",
  custumer:"Ashish",
  img:"https://cdn2.thecatapi.com/images/lm.jpg",
  custumer:"Hariom",
  date:"1 March",
  amount:"785",
  method:"Cash On Delivery",
  status:'Approve'},
  {id:2225252,
    Product:"Razer Blade 15",
    custumer:"Ashish",
    img:"https://cdn2.thecatapi.com/images/lm.jpg",
    custumer:"Hariom",
    date:"1 March",
    amount:"785",
    method:"Cash On Delivery",
    status:'Approve'},
]
  return (
    <div className='table'>
       <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell className='tabelCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell  className='tableCell'>Custumer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='cellWrapper'>
             <img src={row.img} className="image"></img>
             {row.Product}
            </TableCell>
              <TableCell className='tableCell'>{row.custumer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default BasicTable;
