import React from 'react';
import Plot from 'react-plotly.js';


export function MyChart(props) {
  var abc=props.ar.map((item) => item[0])
  console.log(abc);
  console.log(props.ar.map((item) => item[1]));

 
  const trace1 = {
    x: props.ar.map((item) => item[0]),
    y: props.ar.map((item) => item[1]),
    type: 'scatter',
    mode: 'lines+markers',
    name: props.ar[0][1],
    line: {
      shape: 'spline',
      color: '#1f77b4',
      width: 2,
    },
  };

  const trace2 = {
    x: props.ar.map((item) => item[0]),
    y: props.ar.map((item) => item[2]),
    type: 'scatter',
    mode: 'lines+markers',
    name: props.ar[0][2],
    line: {
      shape: 'spline',
      color: '#ff7f0e',
      width: 2,
      
     
    },
  };
  const trace3 = {
    x: props.ar.map((item) => item[0]),
    y: props.ar.map((item) => item[3]),
    type: 'scatter',
    mode: 'lines+markers',
    name: props.ar[0][2],
    line: {
      shape: 'spline',
      color: '#2ca02c',
      width: 2,
      
     
    },
  };
  const data = [trace1, trace2,trace3];

  if(props.ar[1][4]>0){
    const trace4 = {
      x: props.ar.map((item) => item[0]),
      y: props.ar.map((item) => item[4]),
      type: 'scatter',
      mode: 'lines+markers',
      name: props.ar[0][1],
      line: {
        shape: 'spline',
        color: 'red',
        width: 2,
      },
    };
   data.push(trace4)
  }
  
  

  const layout = {
   
    xaxis: {
      title: `${props.ar[0][0]} (%)`,
      tickmode: 'linear',
      dtick: 1,
    },
    yaxis: {
      title: 'Density (g/cm3)',
     
    },
  };

  return (
    <div>
      <Plot data={data} layout={layout} style={{ width: "90%", height: "600px",display: 'flex', justifyContent: 'center', margin: 'auto' }} />
    </div>
  );
}







export function MyChart1(props) {
  var a = props.a || []; // add a check to assign an empty array if 'a' is undefined or null
  var ar = [["Water Content (%)","Angle of Internal Friction"]];
  for(let i = 0; i < a.length; i++){ // use '<' instead of '<=' to avoid accessing undefined index
    ar.push([a[i], props.b[i]]);
  }
  const data = [{    x: a,    y: props.b,   
     type: 'scatter', 
     mode: 'lines+markers',line: {
    shape: 'spline',
    color: 'rgb(82, 179, 201)',
    smoothing: 1.3,
    width: 3,
  },  }];
  const layout = {
    
    xaxis: {
      title: ar[0][0],
      tickmode: 'linear',
      dtick: 2,
    
    },
    yaxis: {
      title: ar[0][1],
      tickmode: 'linear',
      dtick: 2,
    },
    //plot_bgcolor: 'white',
  //paper_bgcolor: 'green',
  };

  return (
    <Plot
      data={data}
      layout={layout}
      style={{ width: "90%", height: "600px",display: 'flex', justifyContent: 'center', margin: 'auto' }}
    />
  );
}




export function MyChart2  (props) {
  console.log(props.sieve_size)
  const data = [    {      x:props.sieve_size,
    y: props.cumulative_percent_passing,
    type: 'scatter',
    mode: 'markers+lines',
    marker: {
      color: '#1f77b4',
      size: 5
    },
    line: {
      shape: 'spline'
    }
  },
];

const layout = {
 
  xaxis: {
    title: {
      text: 'Particle Size (mm)',
      font: {
        size: 12
      }
    },
    type: 'log',
    autorange: 'reversed'
  },
  yaxis: {
    title: {
      text: 'Cumulative Percentage Passing (%)',
      font: {
        size: 12
      }
    },
    tickfont: {
      size: 14
    }
  },
  plot_bgcolor: '#f8f8f8',
  margin: {
    l: 60,
    r: 20,
    t: 80,
    b: 60
  },
   // increase width to 800 pixels
  animate: {
    duration: 1000,
    easing: 'cubic-in-out'
  }
};

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto', width: '100%',paddingBottom:'40px' }} className="container">
      <Plot data={data} layout={layout} />
    </div>
    
  );
};


export function MyChart3(props) {
   
  if (props.b && props.b.length > 0) {
    const data = [{    x: [1.44,3.13,5.48,6.53,7.56,10.43,12.2,15.04],   
      y: [1.84,1.90,1.77,1.72,1.831,1.89,1.94,1.93],   
      type: 'scatter',
      mode: 'lines+markers',
      name: "hello",
      line: {
        shape: 'spline',
        color: 'rgb(82, 179, 201)',
        width: 2,
        
       
      }, }];
  
       const layout = {
   
        xaxis: {
          title: `Water Content (%)`,
          tickmode: 'linear',
          dtick: 1,
        },
        yaxis: {
          title: 'Density (g/cm3)',
         
        },
      };
  
    return (
      <Plot
        data={data}
        layout={layout}
        style={{ width: '90%', height: '600px', display: 'flex', justifyContent: 'center', margin: 'auto' }}
      />
    );
  } else {
    return <div>No data to display.</div>;
  }
}  


export default (MyChart,MyChart1,MyChart2);
