import User from "../models/userModels.js"

import asyncHandler from 'express-async-handler'

//Get all users
export const getUsers = asyncHandler( async(req, res) => {
    const users = await User.find({})
    return res.status(200).json(users)
});

//create a User
export const createUser = asyncHandler( async(req, res) => {
    const {name, email, phoneNumber, address} = req.body

    if(!name || !email || !phoneNumber || !address){
        res.status(401)
        throw new Error('please enter all fields')
    }

    const user = await User.create({
        name,
        email,
        phoneNumber,
        address
    });

    return res.status(201).json(user)
})

//Get single user
export const getUser = asyncHandler( async(req, res) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(404)
        throw new Error('user not found')
    }

    return res.status(200).json(user)
});

//Update a user
export const updateUser = asyncHandler( async(req, res) => {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new : true})
    res.status(201).json(updateUser);
});

//Delete a User
export const deleteUser = asyncHandler( async(req, res) => {
    await User.findByIdAndRemove(req.params.id)
    res.status(200).json({
        success : true
    })
})