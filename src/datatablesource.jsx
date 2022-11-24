export const userColums = [ 
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field:"user",headerName: 'User',width:230,renderCell:(params)=>{
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt=""></img>
            {params.row.username}
          </div>
        );
    },
  },
  {
    field:"email",
     headerName: 'Email',
     width:"230"
  },
  {
    field:"age",
     headerName: 'AGE',
     width:"100"
  },
  {
     field:"status",
     headerName: 'Status',
     width:"160",
     renderCell:(params)=>{
          return(
            <div className={`cellWithStatus ${params.row.status} `}>
              {params.row.status}
            </div>
          )
     }
  }
]

export const rows = [
    { 
       id: 1,
       username: 'Snow', 
       img: 'https://api.multiavatar.com/Binx Bond.svg', 
       status:"active",
       email:"1snow@gmail.com",
       age:35
    },
    {  
      id: 2,
      username: 'jaimeLannister', 
      img: 'https://api.multiavatar.com/Binx Bond.svg', 
      status:"active",
      email:"1snow@gmail.com",
      age:35
     },
    {
      id: 3,
      username: 'Melisandre', 
      img: 'https://api.multiavatar.com/Binx Bond.svg', 
      status:"active",
      email:"1snow@gmail.com",
      age:35 
      },
    { 
      id: 4,
      username: 'Clifford', 
      img: 'https://api.multiavatar.com/Binx Bond.svg', 
      status:"active",
      email:"1snow@gmail.com",
      age:35 
      },
    {  
      id: 5,
      username: 'Lannister', 
      img: 'https://api.multiavatar.com/Binx Bond.svg', 
      status:"active",
      email:"1snow@gmail.com",
      age:35 
      },
    { 
      id: 6,
      username: 'Snow', 
      img: 'https://api.multiavatar.com/Binx Bond.svg', 
      status:"active",
      email:"1snow@gmail.com",
      age:35 
      },
    { 
      id: 7,
      username: 'Snow', 
      img: 'https://api.multiavatar.com/Binx Bond.svg', 
      status:"active",
      email:"1snow@gmail.com",
      age:35 
    },
    { 
      id: 8,
      username: 'Snow', 
      img: 'https://api.multiavatar.com/Binx Bond.svg', 
      status:"active",
      email:"1snow@gmail.com",
      age:35 
      },
    { 
      id: 9,
      username: 'Snow', 
      img: 'https://api.multiavatar.com/Binx Bond.svg', 
      status:"active",
      email:"1snow@gmail.com",
      age:35 
      },
      { 
        id: 10,
        username: 'Snow', 
        img: 'https://api.multiavatar.com/Binx Bond.svg', 
        status:"active",
        email:"1snow@gmail.com",
        age:35 
        },
  ];
  