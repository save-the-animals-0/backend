const request = require("supertest");
const app = require("./server");

describe("GET [/]", () => {
  it("should return a 200 status code", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });

  it("should return JSON response", async () => {
    const res = await request(app).get("/");
    expect(res.type).toEqual("application/json");
  });
});

