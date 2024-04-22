# Veryfi API Data Extraction and Visualization Application
This application provides a streamlined solution for extracting and visualizing data from receipts using the Veryfi OCR API. It is built using the MERN stack (MongoDB, Express.js, React, and Node.js), allowing users to upload receipt images via a React frontend. The images are then sent to a backend built with Express.js, which handles communication with the Veryfi API to process the images and extract data. The extracted data is then displayed back on the frontend in an easy-to-read format.

### Features
- Upload receipt images.
- Extract data from receipt images using the Veryfi OCR API.
- Display extracted data in an easy-to-read format on the frontend.
- Efficient backend processing using Express.js.
- Modern and user-friendly interface built with React.


### Prerequisites
- Node.js and npm installed.
- MongoDB installed and running.
- Veryfi API credentials (API Key, Client ID, Client Secret).

### Setup
1. Clone this repository to your local machine:
```
git clone https://github.com/Harshita0008/Veryfi-platform-task
```

3. Navigate to the project directory:

```
cd veryfi-receipt-app
```

3. Install dependencies for both frontend and backend:

```
cd root
npm install
cd client
npm install
```
4. Configure MongoDB connection and Veryfi API credentials:
- Set up a MongoDB database and update the connection string in backend/config/db.js.
- Obtain Veryfi API credentials (API Key, Client ID, Client Secret) and update them in backend/config/veryfi.js.
5. Start the backend server:

```
cd client
npm start
```
6. Start the frontend server:

```
cd root
node server.js
```
7. Access the application in your web browser at http://localhost:3000.

### Usage
1. Upload a receipt image using the provided interface.
2. The backend will send the image to the Veryfi API for data extraction.
3. Once the data extraction is complete, the extracted data will be displayed on the frontend in an easy-to-read format.
### Future Enhancements
1. Implement user authentication and authorization.
2. Allow users to edit and annotate extracted data.
3. Add support for exporting extracted data to different formats (e.g., CSV, PDF).
4. Improve error handling and validation.
