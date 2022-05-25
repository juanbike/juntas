import { Injectable } from '@nestjs/common';
import { Model  } from 'mongoose';
import { InjectModel  } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto'


@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}


    //Recuperar todos los productos
    async getProducts(): Promise <Product[]>{
        const products = await this.productModel.find()
            return products;
        }


    //Recuperar un solo producto        
    async getProduct(productID : String) : Promise <Product>{
            const product = await this.productModel.findById(productID);
            return product;
        }

    //crear un producto
    async createProduct(createProductDTO : CreateProductDTO): Promise<Product>{
        const product =  new this.productModel(createProductDTO)
        return await product.save()
    }

    //Borrar un producto
    async deleteProduct(productID: String): Promise<Product>{
      const deleteProduct = await this.productModel.findByIdAndDelete(productID)
      return deleteProduct
    }

    //Actualizar un producto
    async updateProduct(productID: String, createProductDTO : CreateProductDTO): Promise<Product>{
    const updateProduct = await this.productModel.findByIdAndUpdate(productID, createProductDTO, {new: true} )
    return updateProduct
    }
 }
