import React, { useState } from 'react';
import ReceiptUpload from './components/ReceiptUpload';
import ReceiptDataDisplay from './components/ReceiptDataDisplay';

function App() {
    const [receiptData, setReceiptData] = useState(null);

    return (
        <div className="App">
            <ReceiptUpload onReceiptProcessed={setReceiptData} />
            <ReceiptDataDisplay data={receiptData} />
        </div>
    );
}

export default App;
