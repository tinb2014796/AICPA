const ApiError = require("../api-error");
const MongoDB = require("mongoose");
const Product = require("../model/productModel.js");


// Create and Save a new Contact
exports.create = async (req, res, next) => {
    if (!req.body?.productName) {
        return next(new ApiError(400, "Name can not be empty"));
    }
    try {
        //const Product = new Product(MongoDB.client);
        const document = await Product.create(req.body);
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
        //const Product = new Product();
        const{name} = req.query;
        if(name){
            documents = await Product.findByName(name);
        }
        else {
            documents = await Product.find({})
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
        //const Product = new Product(MongoDB.client);
        const document = await Product.findById(req.params.id);
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
exports.updateProduct = async(req, res, next) => {
    if (Object.keys(req.body).length == 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }

    try {
        //const Product = new Product(MongoDB.client);
        const document = await Product.findByIdAndUpdate(req.params.id, req.body);
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
        const document = await Product.delete(req.params.id);
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

exports.deleteAll = async(req, res, next) => {
    try {
        //const Product = new Product(MongoDB.client);
        const deletedCount = await Product.deleteAll();
        return res.send({
            message: `${deletedCount} contacts were deleted successfully`,
        });
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while removing all contacts")
        );
    }
};

exports.findAllFavorite = async(req, res, next) => {
    try {
        //const Product = new Product(MongoDB.client);
        const documents = await Product.findFavorite();
        return res.send(documents);
    } catch (error) {
        return next(
            new ApiError(
                500,
                "An error occurred while retrieving favorite contacts"
            )
        );
    }
};

// exports.menuAll = async(req, res, next) => {
//     try{
//         const documents = await Product.menuAll();
//         return res.send(documents);
//     } catch (error) {
//         return next (
//             new ApiError(
//                 500, 
//                 "Khong hien thi"
//             )
//         );
//     }
// };