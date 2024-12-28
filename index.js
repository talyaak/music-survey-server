  import dotenv from "dotenv";
  import express from "express";
  import cors from "cors";
  import responsesRoute from "./routes/responses.js";
  import "./db/db.js"; // Ensure db connection is initialized

  dotenv.config();

  const app = express();
  app.use(express.json());
  app.use(cors());

  // Use the responses route
  app.use("/api", responsesRoute);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


  /*import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import responsesRoute from "./routes/responses.js";
import "./db/db.js"; // Ensure the database connection is initialized

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// Configure CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "https://final-project-survey-new.onrender.com", // Allow all origins by default; replace with specific URL for security
  methods: ["GET"], // Only allow GET requests
  credentials: false, // Disallow cookies
};
app.use(cors(corsOptions));

// Use the responses route
app.use("/api", responsesRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/
