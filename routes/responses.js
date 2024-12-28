import express from "express";
import { dbService } from "../db/db.js";

const router = express.Router();

// POST route to save responses
router.post("/responses", async (req, res) => {
  const answers = req.body; // Only expect `answers` field

  try {
    const collection = await dbService.getCollection("responses");

    // Insert the new response document
    await collection.insertOne({ answers, createdAt: new Date() });

    res.status(201).json({ message: "Response saved successfully" });
  } catch (error) {
    console.error("Error saving response:", error);
    res.status(500).json({ message: "Failed to save response" });
  }
});

// GET route to fetch all responses
router.get("/responses", async (req, res) => {
  try {
    const collection = await dbService.getCollection("responses");

    // Fetch all responses
    const responses = await collection.find({}).toArray();

    res.status(200).json(responses);
  } catch (error) {
    console.error("Error fetching responses:", error);
    res.status(500).json({ message: "Failed to fetch responses" });
  }
});

// Get aggregated data for occupation and favorite artist
router.get("/results/occupation-artist", async (req, res) => {
  try {
    const collection = await dbService.getCollection("responses");

    const aggregatedData = await collection
      .aggregate([
        {
          $project: {
            occupation: { $arrayElemAt: ["$answers", 0] }, // Q1: Occupation
            artist: { $arrayElemAt: ["$answers", 4] },     // Q5: Favorite Artist
          },
        },
        {
          $group: {
            _id: { occupation: "$occupation", artist: "$artist" },
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            occupation: "$_id.occupation",
            artist: "$_id.artist",
            count: 1,
            _id: 0,
          },
        },
      ])
      .toArray();

    res.status(200).json(aggregatedData);
  } catch (error) {
    console.error("Error fetching occupation-artist results:", error);
    res.status(500).json({ message: "Failed to fetch occupation-artist results" });
  }
});

// Get aggregated data for occupation and age
router.get("/results/occupation-age", async (req, res) => {
  try {
    const collection = await dbService.getCollection("responses");

    const aggregatedData = await collection
      .aggregate([
        {
          $project: {
            occupation: { $arrayElemAt: ["$answers", 0] },
            age: { $arrayElemAt: ["$answers", 1] },
          },
        },
        {
          $group: {
            _id: { occupation: "$occupation", age: "$age" },
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            occupation: "$_id.occupation",
            age: "$_id.age",
            count: 1,
            _id: 0,
          },
        },
      ])
      .toArray();

    res.status(200).json(aggregatedData);
  } catch (error) {
    console.error("Error fetching results:", error);
    res.status(500).json({ message: "Failed to fetch results" });
  }
});

// Get aggregated data for age and genre
router.get("/results/age-genre", async (req, res) => {
  try {
    const collection = await dbService.getCollection("responses");

    const aggregatedData = await collection
      .aggregate([
        {
          $project: {
            age: { $arrayElemAt: ["$answers", 1] },
            genre: { $arrayElemAt: ["$answers", 3] },
          },
        },
        {
          $group: {
            _id: { age: "$age", genre: "$genre" },
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            age: "$_id.age",
            genre: "$_id.genre",
            count: 1,
            _id: 0,
          },
        },
      ])
      .toArray();

    res.status(200).json(aggregatedData);
  } catch (error) {
    console.error("Error fetching age-genre results:", error);
    res.status(500).json({ message: "Failed to fetch age-genre results" });
  }
});

// New route: Get aggregated data for occupation, genre, and count
router.get("/results/occupation-genre", async (req, res) => {
  try {
    const collection = await dbService.getCollection("responses");

    const aggregatedData = await collection
      .aggregate([
        {
          $project: {
            occupation: { $arrayElemAt: ["$answers", 0] }, // Q1: Occupation
            genre: { $arrayElemAt: ["$answers", 3] },      // Q4: Genre
          },
        },
        {
          $group: {
            _id: { occupation: "$occupation", genre: "$genre" },
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            occupation: "$_id.occupation",
            genre: "$_id.genre",
            count: 1,
            _id: 0,
          },
        },
      ])
      .toArray();

    res.status(200).json(aggregatedData);
  } catch (error) {
    console.error("Error fetching occupation-genre results:", error);
    res.status(500).json({ message: "Failed to fetch occupation-genre results" });
  }
});

export default router;
