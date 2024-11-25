# reciwallet

**reciwallet** is a modern solution for digitizing and managing paper receipts. Using advanced OCR and cloud storage, reciwallet enables businesses and individuals to securely store, analyze, and access receipts anytime, anywhere.

---

## **Features**

- **Receipt Scanning**: Automatically extract text, labels, and logos from printed receipts using Google Cloud Vision API.
- **Digital Receipt Storage**: Store extracted metadata in a secure cloud environment while minimizing storage costs by deleting unnecessary images.
- **Receipt Links**: Generate unique shareable links for each receipt.
- **Seamless Integration**: Use with any receipt printer or upload scanned images directly.
- **User-Friendly Interface**: Intuitive web app built with Angular for easy access and management.

---

## **Technology Stack**

- **Frontend**: Angular with Tailwind CSS for responsive design.
- **Backend**: Node.js (Express) with server-side rendering (SSR).
- **Cloud Services**:
  - Google Cloud Storage for image uploads.
  - Google Cloud Vision API for OCR, label, and logo detection.
  - Google Bucket Storage API for managing receipt storage.
- **Database**: Firebase Firestore or an alternative database for metadata storage.

---

## **Setup Instructions**

### Prerequisites

- Node.js (v18+ recommended)
- Google Cloud SDK
- Access to a Google Cloud Project with the following APIs enabled:
  - Cloud Storage
  - Vision API
- Angular CLI (v15+ recommended)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/reciwallet.git
   cd reciwallet
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following:

   ```env
   GCLOUD_PROJECT=your-google-cloud-project-id
   GCLOUD_BUCKET=your-bucket-name
   GCLOUD_VISION_API_KEY=your-vision-api-key
   PORT=3000
   ```

4. **Setup Angular Frontend**
   Navigate to the `frontend` folder and install dependencies:

   ```bash
   cd frontend
   npm install
   ```

5. **Run the Application**
   Start the backend server:
   ```bash
   npm start
   ```
   Start the Angular frontend:
   ```bash
   cd frontend
   npm start
   ```

---

## **Usage**

1. Upload a receipt or connect to a receipt printer to scan and digitize.
2. View extracted receipt data and metadata in the dashboard.
3. Share receipts via unique links or download as PDFs.

---

## **Contributing**

We welcome contributions! To get started:

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
4. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**

For questions or support, please contact us at **prokopis123@gmail.com**.
