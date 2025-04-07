const express = require("express");
const {users} = require("./data/users.json");
const app = express();

const PORT = 8081;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Server is running",
    });
});

/* 
* Rotue: /users
* Method: GET
* Description: Get all users
* Access: Public
* Parameters: None
*/

app.get("/users", (req, res) => {
    res.status(200).json({
        success: "true",
        data: users
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})