import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;



//middleware
app.use(cors({
    origin: "http://localhost:5173",}
));
app.use(express.json());//this middleware is used to parse incoming JSON data in the request body, making it available under req.body in route handlers.
app.use(rateLimiter);



//simple logger middleware to log incoming requests, you can uncomment it if you want to see the logs in the console
/*app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
})*/

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});