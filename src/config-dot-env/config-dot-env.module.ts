
import { Module } from '@nestjs/common';
import { ConfigService } from './configService';
@Module({
    providers:[{
        provide: ConfigService,
        useValue: new ConfigService(),
    }]
})
export class ConfigDotEnvModule {
    
  
    
}
