import { db } from "../Config/db.js";    //"my-sample-db"

export const getUsers = async(req, res) => {
    try {
        const allUsers = await db.collection("users").find({}).toArray();
        res.json(allUsers);
    } catch (err) {
        res.json({error: err.message});
    }
}

export const signup = async(req, res) => {

    try {
        const userData = req.body;
        const newUser = await db.collection("users").insertOne(userData);
        res.json({message: "New user added to database", data: newUser});
    } catch (err) {
        res.json({error: err.message});
    }
}
