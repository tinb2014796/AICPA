const mongoose = require("mongoose");
const product = new mongoose.Schema({
    productName: {
      type: String,
      required: [true, "Hãy nhập tên sản phẩm"],
    },
    productType: {
      type: String,
      required: [true, "Nhập loại sản phẩm"],
    },
    Price: {
      type: String,
      required: [true, "Nhập giá sản phẩm"],
    },
    mota: {
      type: String,
      required: [true, "Nhập mô tả sản phẩm"],
      set: (value) => value.replace(/\n/g, '<br>'), // Convert new line characters to <br> tags
    },
    Quantity: {
      type: String,
      required: [true, "Số lượng sản phẩm"],
    },
    Images: {
      type: String,
      required: [true, "Thêm hình ảnh"],
    },
  },
)
const userScheme =  mongoose.Schema({
    firstname: {
        type: String,
        require: [true, "Plase add your first name"]
    },
    lastname: {
        type: String,
        require: [true, "Please add your last name"]
    },
    username: {
        type: String,
        require: [true, "Please add the user name"],
    },
    password: {
        type: String,
        require: [true, "Please add the password"],
    },
    address:{
        type: String,
        require: [true, "Please add your address"],
    },
    phone: {
        type: String,
        require: [true, "Please add your phone"],
    },
    cart:{
        type:[product],
        require: [true, "Please add your product"],
    },
    
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userScheme);