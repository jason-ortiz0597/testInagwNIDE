import { v2 as cloudinary } from 'cloudinary'
import { config } from "dotenv";
config();

cloudinary.config({ 
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    secure: true
  });

export async function uploadImage(filePath) {
    return await cloudinary.uploader.upload(filePath , {
        folder: 'product-siipi2022'
    })
}

export async function deleteImage(publicId) {
    return await cloudinary.uploader.destroy(publicId)
}
