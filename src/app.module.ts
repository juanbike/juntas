import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigDotEnvModule } from './config-dot-env/config-dot-env.module';





@Module({
  imports: [ProductModule, 
     MongooseModule.forRoot('mongodb+srv://juanbike:Andres121064@cluster0.ed8sk.mongodb.net/juntas?retryWrites=true&w=majority'), ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


