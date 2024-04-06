const ApiError = require("../api-error");
const MongoDB = require("mongoose");
const Cart = require("../model/cartModel.js");


// Create and Save a new Contact
exports.create = async (req, res, next) => {
    if (!req.body?.productName) {
        return next(new ApiError(400, "Name can not be empty"));
    }
    try {
        const document = await Cart.create(req.body);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
};

exports.findAll = async(req, res, next) => {
    let documents = [];
    
    try{
        const{name} = req.query;
        if(name){
            documents = await Cart.findByName(name);
        }
        else {
            documents = await Cart.find({})
        }
    } catch(error){
        return next(
            new ApiError(500, "An error occurred while retrieving contacts")
        );
    }
    return res.send(documents);
};

exports.findOne = async (req, res, next) => {
    try {
        const document = await Cart.findById(req.params.id);
        if (!document) {
            return next(new ApiError(404, "Contact not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.id}`
            )
        );
    }
};
exports.updateCart = async(req, res, next) => {
    if (Object.keys(req.body).length == 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }

    try {
        //const Product = new Product(MongoDB.client);
        const document = await Cart.findByIdAndUpdate(req.params.id, req.body);
        if (!document) {
            return next(new ApiError(404, "Contact not found"));
        }
        return res.send(document);
        
    } catch (error) {
        return next(
            new ApiError(500, `Error updating contact with id=${req.params.id}`)
        );
    }
};  

exports.delete = async(req, res, next) => {
    try {
        //const Product = new Product(MongoDB.client);
        const document = await Cart.delete(req.params.id);
        if (!document) {
            return next(new ApiError(404, "Contact not found"));
        }
        return res.send({ message: "Contact was deleted successully" });
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete contact with id=${req.params.id}`
            )
        );
    }
};