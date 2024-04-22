import React from 'react';

function ReceiptDataDisplay({ data }) {
    if (!data) {
        return <p>No data to display. Please upload a receipt to process.</p>;
    }

    const renderVendor = (vendor) => {
        return Object.entries(vendor).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '10px' }}>
                <strong>{key}:</strong> {value || 'N/A'}
            </div>
        ));
    };

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '600px',
            margin: 'auto',
            backgroundColor: '#f7f7f7',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            marginTop: '20px'
        },
        header: {
            marginBottom: '20px'
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Extracted Receipt Data</h2>
            {data.vendor ? renderVendor(data.vendor) : <p>Vendor: N/A</p>}
            <p><strong>Date:</strong> {data.date || 'N/A'}</p>
            <p><strong>Total:</strong> ${data.total ? data.total.toFixed(2) : '0.00'}</p>
            <p><strong>Currency:</strong> {data.currency || 'N/A'}</p>
            {data.line_items && (
                <div>
                    <h3>Items</h3>
                    {data.line_items.map((item, index) => (
                        <div key={index}>
                            <p>{item.description}: ${item.total.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ReceiptDataDisplay;
