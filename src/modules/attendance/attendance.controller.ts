import { Request, Response } from "express";
import * as service from "./attendance.service";

export async function checkIn(req: Request, res: Response) {
  const { latitude, longitude } = req.body;
  const result = await service.checkIn(latitude, longitude);
  res.json(result);
}
