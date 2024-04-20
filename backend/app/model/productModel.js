const mongoose = require("mongoose");
const { Schema } = mongoose;

const productScheme = new mongoose.Schema({
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
{
  timestamps: true, 
}
);

module.exports = mongoose.model("Product", productScheme);