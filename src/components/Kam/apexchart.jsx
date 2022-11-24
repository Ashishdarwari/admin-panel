import React,{useState} from "react";
import Chart from "react-apexcharts";
import axios from "axios";


const Cht = ()=>{

  var url = 'http://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly';

  axios({
    method: 'GET',
    url: url,
  }).then(function(response) {
    setSeries([{
      name: 'Sales',
      data: response.data
    }])
  })
  
    const [Options, setOptions] = useState(
        {
            chart: {
                    id: "basic-bar"
                    },
                    noData: {
                      text: 'Loading...'
                    },
                    
                
            xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000]
        }
    });
        const [Series, setSeries] = useState(
            [{
                name: "series-1",
                data: []
            }]);
    return(
        <div>
              <Chart
    options={Options}
    series={Series}
    type="line"
    width="500"
  />
    </div>
    );
}

export default Cht;
