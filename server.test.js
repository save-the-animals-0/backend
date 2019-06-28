const request = require("supertest");
const app = require("./server");

describe("server.js", () => {
  describe("index route", () => {
    it("test env production port", async () => {
      expect(process.env.NODE_ENV).toEqual("production");
    });

    it("test env local port", async () => {
      expect(process.env.PORT).toEqual("80 : 8000");
    });

    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;
      const response = await request(app).get("/");
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON object from the index route", async () => {
      const expectedBody = { api: "api is running" };
      const response = await request(app).get("/");
      expect(response.body).toEqual(expectedBody);
    });

    it("should return a JSON object from the index route", async () => {
      const response = await request(app).get("/");
      expect(response.type).toEqual("application/json");
    });
  });
});
