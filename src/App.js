import { useEffect, useState } from "react";
import "./styles.css";
import Chart from "react-apexcharts";

const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91]
  }
];

export default function App() {
  const [activeScreen, setActiveScreen] = useState("bar");
  const [isMounted, setIsMounted] = useState(false);
  const options = {
    chart: {
      id: "basic-bar",
      events: {
        // beforeMount: function (chartContext, config) {
        //   // ...
        //   setIsMounted(true);
        // }
        mounted: function () {
          setIsMounted(true);
        }
      }
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };

  // useEffect(() => {
  //   const a = () => console.log("loading");
  //   window.addEventListener("load", a);

  //   return () => window.removeEventListener("load", a);
  // }, []);

  console.log({ isMounted });
  return (
    <div className="App">
      <button
        onClick={() => {
          setIsMounted(false);
          setActiveScreen((state) => (state === "bar" ? "line" : "bar"));
          console.log(
            `showing screen ${activeScreen === "bar" ? "line" : "bar"}`
          );
        }}
      >
        togglescreen
      </button>

      {!isMounted && <p>loading...</p>}

      {activeScreen === "bar" && (
        <>
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
          <Chart options={options} series={series} type="bar" width="500" />
        </>
      )}
      {activeScreen === "line" && (
        <>
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
          <Chart options={options} series={series} type="line" width="500" />
        </>
      )}
    </div>
  );
}
