import { Document } from 'mongoose'


export interface Product extends Document{
   readonly name: String;
   readonly description: String;
   readonly imageUrl: String;
   readonly price: number;
   readonly createAt: Date
}