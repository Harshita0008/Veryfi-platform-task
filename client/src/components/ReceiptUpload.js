import React, { useState } from 'react';
import axios from 'axios';

function ReceiptUpload({ onReceiptProcessed }) {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            alert('Please select a file before submitting!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        const headers = {
            'Authorization': `apikey ${process.env.REACT_APP_VERYFI_USERNAME}:${process.env.REACT_APP_VERYFI_API_KEY}`,
            'Client-Id': process.env.REACT_APP_VERYFI_CLIENT_ID,
            'Client-Secret': process.env.REACT_APP_VERYFI_CLIENT_SECRET
        };

        try {
            const response = await axios.post('http://localhost:3001/upload-receipt', formData, { headers });
            console.log('Success:', response.data);
            onReceiptProcessed(response.data);
        } catch (error) {
            console.error('Error uploading and processing receipt:', error.response ? error.response.data : error);
            alert('Failed to upload and process receipt. Please check the console for more details.');
        }
    };

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '600px',
            margin: 'auto',
            backgroundColor: '#f7f7f7',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        input: {
            margin: '10px 0',
            padding: '10px',
            width: '95%'
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
        }
    };

    return (
        <div style={styles.container}>
            <h2>Upload Your Receipt</h2>
            <form onSubmit={handleFormSubmit} style={styles.form}>
                <input type="file" onChange={handleFileChange} accept="image/*,.pdf" style={styles.input} />
                <button type="submit" style={styles.button}>Upload and Process</button>
            </form>
        </div>
    );
}

export default ReceiptUpload;
