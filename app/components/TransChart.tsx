"use client"
import { Chart } from 'react-google-charts';

interface Transaction {
    date: string;
    amount: number;
    type: 'inflow' | 'outflow';
}

interface Props {
    transactions: Transaction[];
}

const TransChart: React.FC<Props> = ({ transactions }) => {
    // options configuration...
    const options = {
        chartArea: { width: "100%", height: "100%" },
        hAxis: { 
            title: "Time", titleTextStyle: { color: "#333333" }, format: "MMM d" 
        },
        legend: { position: "none" },
        line: { color: "#ECF3FD", lineWidth: 0 },
        colors: ['#1A73E8', '#1A73E8', '#1A73E8', '#EBEDED', '#EBEDED'],
        crosshair: { trigger: "both", color: "#EBEDED" },
        vAxis: {
            titleTextStyle: { color: "#333" },
            gridlines: { color: "#EBEDED" },
        },
        series: {
            0: { curveType: "function" },
            1: { curveType: "function" },
        },
        curveType: "function",
        lineWidth: 2,
        dataOpacity: 0.8,
        enableInteractivity: true,
        tooltip: { isHtml: true },
        animation: {
            duration: 1000,
            easing: "out",
            startup: true,
        },
    };

    const groupedTransactions = transactions.reduce((acc, transaction) => {
        const { date, type, amount } = transaction;
        if (!acc.has(date)) {
            acc.set(date, { date, inflow: 0, outflow: 0 });
        }
        const transactionData = acc.get(date);
        if (type === 'inflow') {
            transactionData!.inflow += amount;
        } else if (type === 'outflow') {
            transactionData!.outflow += amount;
        }
        return acc;
    }, new Map<string, { date: string; inflow: number; outflow: number }>());

    const chartData = Array.from(groupedTransactions.values()).map(({ date, inflow, outflow }) => [
        new Date(date), // Convert the date string to a Date object
        inflow,
        outflow,
    ]);

    return (
        <div className="w-full">
            <Chart
                width={'100%'}
                chartType="AreaChart"
                data={[
                    ['Date', 'Inflow', 'Outflow'],
                    ...chartData,
                ]}
                options={{
                    ...options,
                    hAxis: {
                        ...options.hAxis,
                        format: 'MMM d', // Format the x-axis as required
                    },
                }}
            />
        </div>
    );
};

export default TransChart;