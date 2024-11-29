const express= require("express");
const cors = require("cors");
const mongoose = require("mongoose")

const app= express();
const PORT= 5000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@cluster0.esy2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {}
)
.then(()=>{
    console.log("Connected to database")
});



//routes
const userRoute = require("./routes/user.routes");
app.use("/user",userRoute);


app.get("/", (req,res)=>{
    res.send("hello World");
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}/`);
});
