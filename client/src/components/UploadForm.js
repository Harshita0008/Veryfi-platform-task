import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
    const [file, setFile] = useState(null);

    const onFileChange = event => {
        setFile(event.target.files[0]);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('receipt', file);

        try {
            await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Receipt uploaded successfully');
        } catch (error) {
            console.error('Error uploading receipt:', error);
            alert('Failed to upload receipt');
        }
    };

    return (
        <div className="mb-3">
            <h2>Upload Receipt</h2>
            <form onSubmit={onSubmit}>
                <input type="file" onChange={onFileChange} />
                <button type="submit" className="btn btn-primary">Upload</button>
            </form>
        </div>
    );
}

export default UploadForm;
