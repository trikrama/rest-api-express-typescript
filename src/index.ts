import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/tess", (req: Request, res: Response) => {
  const nama = req.query.nama;
  res.status(200).json({ message: `Hello world! ${nama}` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
