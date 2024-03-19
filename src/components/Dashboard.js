import { useState, useRef } from 'react';
import { CustomPieChart } from './CustomPieChart';
import { CustomBarChart } from './CustomBarChart';
import { CustomStackedBarChart } from './CustomStackedBarChart';

function Dashboard() {
  const [charts, setCharts] = useState([]);
  const title = useRef();
  const description = useRef();

  function addChart(type) {
    const allCharts = JSON.parse(JSON.stringify(charts));
    allCharts.push({ type, title:title.current.textContent, description:description.current.textContent });
    title.current.textContent = "Title";
    description.current.textContent = "Description";
    setCharts(allCharts);
  }

  return (
    <div className="row">
        <div className="card m-3" style={{ width: 30 + "%" }}>
          <div className="card-body">
            <h5 className="card-title" name="title" contentEditable="true" ref={title}>Title</h5>
            <h6 className="card-subtitle mb-2 text-muted" name="description" contentEditable="true" ref={description}>Description</h6>
            <p className="card-text">Please select a chart from below to create</p>
            <a onClick={(e)=> addChart("pie")} className="card-link create-chart">Pie Chart</a><br/>
            <a onClick={(e)=> addChart("bar")} className="card-link create-chart">Single Stacked Bar Chart</a><br/>
            <a onClick={(e)=> addChart("stackedBar")} className="card-link create-chart">Multi Stacked Bar Chart</a><br/>
          </div>
        </div>
        {charts.map(chart => {
           return <div className="card m-3" style={{ width: 30 + "%" }}>
            <div className="card-body">
              <h5 className="card-title">{chart.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{chart.description}</h6>
             {chart.type === "pie" && <CustomPieChart></CustomPieChart>}
             {chart.type === "bar" && <CustomBarChart></CustomBarChart>}
             {chart.type === "stackedBar" && <CustomStackedBarChart></CustomStackedBarChart>}
              </div>
        </div>
          })}
    </div>
  )
}

export default Dashboard