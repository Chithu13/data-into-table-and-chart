import React from "react";


import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,ArcElement,PointElement, LineElement} from 'chart.js'



import { Pie,Line,Doughnut,Bar } from 'react-chartjs-2';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,ArcElement,PointElement,LineElement)


 function Chart(data){
    const Labels = data.data.map(emp=>emp.sub);
    const dataVal = data.data.map(val=>val.sem);
    console.log(Labels);
    console.log(dataVal);
    const CharData = {
        labels : Labels,
        datasets : [
            {
                label : " Emp Performance",
                backgroundColor : 'rgba(75,192,,192,1)',
                borderColor : 'rgba(0,0,0,1)',
                borderWidth: 1,
                data : dataVal

            }
        ]
    }
    return(
        <div>
            <div style = {{width :'50%',height: "400px" , display:"inline-flex", backgroundColor: "antiquewhite"}}>
               <Bar
               options={{
                maintainAspectRatio : false,
                title:{
                    display: true,
                    text: 'Employee Performance Chart',
                    footSize:25,
                },
                responsive: true,
                scales: {
                    // yAxis: [
                    //   {
                    //     ticks: {
                    //       autoSkip: true,
                    //       maxTicksLimit: 10,
                    //       beginAtZero: true,
                    //       fontsize:15,
                    //       fontcolor:'#000'
                    //     },
                    //     gridLines: {
                    //       display: false
                    //     }
                    //   }
                    // ],
                    // xAxis: [
                      
                    //   {

                    //     ticks: {
                          
                    //       fontsize:15,
                    //       fontcolor:'#000'
                    //     },

                    //     gridLines: {
                    //       display: false
                        
                    //     }
                    //   }
                    // ]

                    
                    yaxes :[{
                        ticks: {
                            beginAtZero : true,
                            fontSize: 15,
                            fontColor: '#000'
                        }
                    }],

                    xaxes:[{
                        ticks:{
                            fontSize: 16,
                            fontColor : '#000'
                        }
                      }],
                    }

                  }}

               
               data={CharData}


               >

               </Bar>

            </div>
            
        </div>
    )
}

export default Chart;