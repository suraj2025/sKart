import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Product from "@/lib/model/product";
// import { Types } from "mongoose";

// const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {
    
  try {
    await connect();
    const products = await Product.find({});
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching products" + error, { status: 500 });
  }
    
};

export const POST = async (request) => {
    try {
      const body = await request.json();
      console.log("Parsed body:", body);
  
      await connect();
      const newProduct = new Product(body);
      await newProduct.save();
  
      return new NextResponse(
        JSON.stringify({ message: "Product is created", Product: newProduct }),
        { status: 201 }
      );
    } catch (error) {
      console.error("Error details:", error);
      return new NextResponse(
        JSON.stringify({
          message: "Error in creating Product",
          error: error.message || error.toString(),
        }),
        {
          status: 500,
        }
      );
    }
  };
  

// export const PATCH = async (request) => {
//   try {
//     const body = await request.json();
//     const { ProductId, newProductname } = body;

//     await connect();

//     if (!ProductId || !newProductname) {
//       return new NextResponse(
//         JSON.stringify({ message: "ID or new Productname are required" }),
//         {
//           status: 400,
//         }
//       );
//     }

//     if (!Types.ObjectId.isValid(ProductId)) {
//       return new NextResponse(JSON.stringify({ message: "Invalid ProductId" }), {
//         status: 400,
//       });
//     }

//     const updatedProduct = await Product.findOneAndUpdate(
//       { _id: new ObjectId(ProductId) },
//       { Productname: newProductname },
//       { new: true }
//     );

//     if (!updatedProduct) {
//       return new NextResponse(
//         JSON.stringify({
//           message: "Product not found or didn't update Product successfully.",
//         }),
//         {
//           status: 400,
//         }
//       );
//     }

//     // Return a success response
//     return new NextResponse(
//       JSON.stringify({
//         message: "Productname updated successfully",
//         Product: updatedProduct,
//       }),
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {
//     return new NextResponse(
//       JSON.stringify({
//         message: "Error updating Productname",
//         error,
//       }),
//       {
//         status: 500,
//       }
//     );
//   }
// };

// export const DELETE = async (request) => {
//   try {
//     const { searchParams } = new URL(request.url);
//     const ProductId = searchParams.get("ProductId");

//     // Validate the ProductId
//     if (!ProductId) {
//       return new NextResponse(
//         JSON.stringify({ message: "ProductId is required" }),
//         {
//           status: 400,
//         }
//       );
//     }

//     // Validate if ProductId is a valid ObjectId
//     if (!Types.ObjectId.isValid(ProductId)) {
//       return new NextResponse(JSON.stringify({ message: "Invalid ProductId" }), {
//         status: 400,
//       });
//     }

//     await connect();

//     // TODO

//     const deletedProduct = await Product.findByIdAndDelete(
//       new Types.ObjectId(ProductId)
//     );

//     // Check if the Product was found and deleted
//     if (!deletedProduct) {
//       return new NextResponse(JSON.stringify({ message: "Product not found" }), {
//         status: 404,
//       });
//     }

//     // Return a success response
//     return new NextResponse(
//       JSON.stringify({
//         message: "Product deleted successfully",
//       }),
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {
//     return new NextResponse(
//       JSON.stringify({
//         message: "Error deleting Product",
//         error, // Send a Product-friendly error message
//       }),
//       {
//         status: 500,
//       }
//     );
//   }
// };
