import { Request, Response, NextFunction } from "express";
const middleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("middleware");
  next();
};

export default middleware;