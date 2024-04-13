const mongoose = require("mongoose");
const cartScheme =  mongoose.Schema({
    idUser: {
        type: String,
        require: [true, "id not the found"],
    },
    productName: {
        type: String,
        require: [true, "Hãy nhập tên sản phẩm"],
    },
    productType: {
        type: String,
        require: [true, "Nhập loại sản phẩm"],
    },
    Price: {
        type: String,
        require: [true, "Nhập giá sản phẩm"],
   },
    Desciption: {
        type: String,
        require: [true, "Nhập mô tả sản phẩm"]
    },
    Images: {
        type: String,
        require: [true, "Thêm hình ảnh"]
    },
    quantity: {
        type: String,
        require: [true, "Số lượng sản phẩm"],
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Cart", cartScheme);