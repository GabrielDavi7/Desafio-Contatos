import { describe, it, expect } from "vitest";
import request from "supertest";
import express from "express";

const app = express();
app.get("/contacts", (req, res) => {
  res.status(200).json([]);
});

describe("GET /contacts", () => {
  it(async () => {
    const response = await request(app).get("/contacts");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
