import React from 'react';
import { Bar } from 'react-chartjs-2';

function ExpensesChart({ receipts }) {
    const data = {
        labels: receipts.map(receipt => receipt.vendor),
        datasets: [{
            label: 'Expenses',
            data: receipts.map(receipt => receipt.total),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }],
    };

    return (
        <div>
            <h2>Expenses Chart</h2>
            <Bar data={data} options={{ scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }} />
        </div>
    );
}

export default ExpensesChart;
