import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";



// export default checkAuth = async (req: Request, res: Response, next: NextFunction) => {
//   try {

//     const token = req.cookies.token

//     if (!token) {
//       return res.status(401).send({
//         message: "User anauthorized"
//       })
//     };

//     const verified = jwt.verify(token, process.env.JWT_KEY) || "";

//     req.id = verified.id


//     next()

//   } catch (error) {
//     res.status(401).json({
//       message: "User anauthorized"
//     })
//   }
// }