const mongoose = require("mongoose");
const productScheme =  mongoose.Schema({
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
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Product", productScheme);