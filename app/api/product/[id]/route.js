// app/api/product/[id]/route.js
import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Product from "@/lib/model/product";


export const GET = async (req, { params }) => {
  // Check if params are defined and log them for debugging
  

  const { id } = params; // Access the `id` parameter from the URL

  try {
    // Connect to the database
    await connect();

    // Find the product by its `id`
    const product = await Product.findById(id);

    if (!product) {
      return new NextResponse(
        JSON.stringify({ message: "Product not found" }),
        { status: 404 }
      );
    }

    // Return the product data as JSON
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    // Handle errors, e.g., database connection failure
    return new NextResponse(
      JSON.stringify({ message: "Error fetching product: " + error.message }),
      { status: 500 }
    );
  }
};
