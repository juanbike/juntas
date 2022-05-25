import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { debug } from 'console';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service'

//Post
@Controller('product')
export class ProductController {

    constructor(private productService:ProductService){}
    @Post('/create')
    async createPost(@Res() Res, @Body() createProductDTO: CreateProductDTO){ 
       const product = await this.productService.createProduct(createProductDTO)
        return Res.status(HttpStatus.OK).json(
            { message: 'Producto creado',
             product: product }
        )
    }
    

//Get  Todos los productos 
@Get('/products')
async getProducts(@Res() Res){
   const products =  await this.productService.getProducts();
    return Res.status(HttpStatus.OK).json(
        {message: "Recuperando Productos",
         products}
          )
    }


  // Recuperar un solo producto  
 @Get('/:productID')
async getProduct(@Res() Res, @Param('productID') productID){
   const product = await this.productService.getProduct(productID);
   if(!product) throw new NotFoundException("Producto no Existe");
   return Res.status(HttpStatus.OK).json(
       {message: 'Producto recuperado',
       product}
   )
 }   

//Borrando un producto
@Delete('/:productID')
async deleteProduct(@Res() Res, @Param('productID') productID){
const productDelete=  await this.productService.deleteProduct(productID);
if(!productDelete) throw new NotFoundException("Producto no Existe");
return Res.status(HttpStatus.OK).json(
    {message: 'Producto eliminado',
    productDelete}
)
}

//Actualizar producto
@Put('/update')
async updateProduct(@Res() Res,  @Body() createProductDTO: CreateProductDTO, @Query('productID') productID){
const updateProduct =  await this.productService.updateProduct(productID, createProductDTO);
if(!updateProduct) throw new NotFoundException("Producto no Existe");
return Res.status(HttpStatus.OK).json(
    {message: 'Producto actualizado',
    updateProduct}
)
}


}//fin ProductController
