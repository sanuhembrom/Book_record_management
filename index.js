const express = require("express");
const { users, admin } = require("./data/users.json");
const { books } = require("./data/books.json");

const app = express();
app.use(express.json());

const PORT = 8081;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Server is running",
        data: "hey",
    });
});

/* 
* Rotue: /users
* Method: GET
* Description: Get all users
* Access: Public
* Parameters: None
*/

app.get("/users/:id", (req, res) => {
    res.status(200).json({
        success: true,
        data: users,
    });
});

//http://localhost:8081/users/4
/**
 * Route: users
 * Method: GET
 * Description: Get single user by their id
 * Access: Public
 * Parameters: id
 */
app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
    return res.status(200).json({
        success: true,
        message: "User found",
        data: user,
    });
});

/**
 * Route: /users
 * Method: POST
 * Description: create a new user
 * Access: Public
 * Parameters: None
 */
app.post("/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({ 
        success: true,
        message: "User created successfully",
        data: newUser
    });
});

/**
 * Route: /users/:id
 * Method: POST
 * Description: Update a user by their id
 * Access: Public
 * Parameters: ID
 */
app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    
    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
    }
    const updateUserData = users.map((each) => {
        if (each.id === id) {
            return { 
                ...each,
                ...data,

            };
        }
        return each;
    });
    return res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: updateUserData,
    }); 
});
  

app.get("/", (req, res) => {
    res.status(404).json({
        message: "This Route doesn't exist",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});