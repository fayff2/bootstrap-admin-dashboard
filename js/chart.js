// Order Line Chart 

let ordersChart = document.getElementById("mylineChart");

let myOrdersChart = new Chart(ordersChart, {
    type: 'line',
    data: {
      labels: ["Aug 1", "Aug 2", "Aug 3", "Aug 4", "Aug 5", "Aug 6", "Aug 7", "Aug 8", "Aug 9", "Aug 10", "Aug 11", "Aug 12", "Aug 13"],
      datasets: [{
        label: "Orders",
        data: [7559, 30201, 24201, 20012, 19501, 26011, 32420, 35012, 30087, 29515, 20215, 35785, 39741],
        lineTension: 0.3,
        backgroundColor: "rgb(55, 50, 100, 0.5)",
        borderColor: "rgba(218,65,103,0.8)",
        borderWidth:3,
        hoverColor:'#777',
        hoverBorderWidth:3,
        hoverBorderColor:'#000',
        lineTension: 0.3,
        backgroundColor: "rgb(55, 49, 94, 0.5)",
        borderColor: "rgba(218,65,103,0.8)",
        
      }],
    },
    options:{
        legend: {
            display: false
          },
          
    }

});


//  Visitor Bar Chart

let VisitorChart = document.getElementById("myBarChart");

let myVisitorChart = new Chart ( VisitorChart, {
    type: 'bar',
    data: {
      labels: ["June", "July", "August", "September ", "October", "November", "December"],
      datasets: [{
          
        label: "man",
        data: [4001, 4510, 13048, 5001, 7085, 9505, 12001],
       
        backgroundColor: "rgb(55, 50, 100, 0.9)",
        
      
        
      },
      {
        label: "women",
  data: [5801, 5910, 15848, 7201, 9785, 13005, 14001],
  backgroundColor: "rgb(220,92,124,0.8)",
          
      },
    
    ],
    }

});

// Cities Liner Chart 

let citiesChart = document.getElementById("myLinerChart");

let myCitiesChart = new Chart ( citiesChart, {
    type: 'pie',
    data: {
        labels: ["Riyadh", "Jaddah", "Sharqia", "Mecca"],
      datasets: [{
          
        data: [40,30.5,20,10.4],
       
        backgroundColor: ["rgb(55, 50, 100, 0.9)","rgb(220,92,124,0.8)","rgb(55, 50, 100, 0.9)","rgb(220,92,124,0.8)"],
        
      
        
      },
     
    
    ],
    }

});


// Customers Rate Liner Chart 


let customersChart = document.getElementById("mylineChartRate");

let myCustomersChart = new Chart( customersChart, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [{
        label: "rate",
        data: [2.2, 3, 1, 4, 5, 3.3, 4.1],
        lineTension: 0.3,
        backgroundColor: "rgb(100, 99, 99 ,0.5)",
        borderColor: "rgba(218,65,103,0.8)",
        
        
      }],
    },
    options:{
        legend: {
            display: false
          },
          
    }

});


