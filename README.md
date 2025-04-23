📚 School Management API - Node.js + Express + MySQL
A simple backend application built with Node.js, Express.js, and MySQL for managing school data. The system allows users to add new schools and retrieve a list of schools sorted by proximity to a specified location.

🚀 Features
✅ Add School API

POST /addSchool

Adds a new school with name, address, latitude, and longitude.

Includes robust input validation for all fields.

📍 List Schools by Proximity

GET /listSchools

Returns all schools sorted by distance from the user’s current location using the Haversine formula.

🛠️ Tech Stack
Node.js

Express.js

MySQL

dotenv for environment variables

🧪 API Testing
A Postman collection is included with:

Example requests for each endpoint

Response formats

Environment variable usage

📦 Setup Instructions
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/school-management-api.git
cd school-management-api
Install dependencies:

bash
Copy
Edit
npm install
Configure .env with your MySQL credentials:

env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_db
PORT=3000
Run the app:

bash
Copy
Edit
node index.js
Import the Postman collection from /postman/School-API.postman_collection.json.

🏓 Live Demo
Coming soon (once deployed)!
