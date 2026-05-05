const request = require("supertest");
const createServer = require("./server");

describe("GET /", () => {
  it("returns expected message", async () => {
    const app = createServer();
    const res = await request(app).get("/");
    expect(res.text).toBe("Version 3 deployed 🚀");
  });
});
