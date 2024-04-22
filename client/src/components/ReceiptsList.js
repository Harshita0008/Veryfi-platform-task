import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReceiptsList() {
    const [receipts, setReceipts] = useState([]);

    useEffect(() => {
        const fetchReceipts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/receipts');
                setReceipts(response.data);
            } catch (error) {
                console.error('Failed to fetch receipts:', error);
            }
        };

        fetchReceipts();
    }, []);

    return (
        <div>
            <h2>Processed Receipts</h2>
            {receipts.map((receipt, index) => (
                <div key={index}>
                    <p>Vendor: {receipt.vendor}</p>
                    <p>Total: ${receipt.total.toFixed(2)}</p>
                    <p>Date: {new Date(receipt.date).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
}

export default ReceiptsList;
