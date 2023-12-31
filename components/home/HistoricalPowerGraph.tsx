'use client';

import React from 'react';

import { Chart as ChartJS, ChartOptions, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend, ScriptableContext, } from "chart.js";
import { Chart as ReactChart, Line } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Filler, Legend, CategoryScale, LinearScale, PointElement, LineElement);


const HistoricalPowerGraph = () => {
    const data = {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
        datasets: [
            {
                data: [0, 1, 3, 6, 10, 14, 20],
                pointRadius: 2,
                pointHoverRadius: 4,
                backgroundColor: (context: ScriptableContext<"line">) => {
                    const { ctx, data, chartArea } = context.chart;

                    const gradient = ctx.createLinearGradient(0, chartArea?.top || 0, 0, chartArea?.bottom || 250);
                    gradient.addColorStop(0, "rgba(21, 112, 239, 0.6)");
                    gradient.addColorStop(1, "rgba(115, 169, 243, 0.1)");
                    return gradient;
                },
                borderColor: "rgba(21, 112, 239, 1)",
                fill: true,
            }
        ],
    };

    const options = {
        scales: {
            x: {
                display: true,
                grid: {
                    display: false,
                },
            },
            y: {
                display: true,
                grid: {
                    display: false,
                },
                position: "right",
            },
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false, // Disable tooltips
            },
        }
    };


    return (
        <div className='xl:w-1/2 w-full p-10 drop-shadow-2xl bg-white space-y-5 flex flex-col justify-between'>
            <h1 className='text-xl font-monument tracking-wider text-primary'>Historical Power Graph (per kwh)</h1>
            {/* @ts-ignore */}
            <Line id="myChart" data={data} options={options} />
        </div>
    );
};

export default HistoricalPowerGraph;