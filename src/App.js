import { useState, useTransition } from "react";
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
  const [isPending, startTransition] = useTransition();
  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          startTransition(() =>
            setActiveScreen((state) => (state === "bar" ? "line" : "bar"))
          );
        }}
      >
        togglescreen
      </button>

      {activeScreen === "bar" ? (
        !isPending ? (
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
        ) : (
          <div>Loading....</div>
        )
      ) : null}
      {activeScreen === "line" ? (
        !isPending ? (
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
        ) : (
          <div>Loading....</div>
        )
      ) : null}
    </div>
  );
}
