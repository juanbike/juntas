import * as fs from 'node:fs';
import { parse } from 'dotenv';

export class ConfigService {
    private readonly envConfig: { [key: string]: string};

    constructor(){
        const isDevelopmentEnv = process.env.NODE_env !== "production";

        if(isDevelopmentEnv){
            const envFilePath = __dirname + '/../../.env';
            const existsPath = fs.existsSync(envFilePath);

            if(!existsPath){
                console.log('El archivo .env no existe');
                process.exit(0);
            }

            this.envConfig = parse(fs.readFileSync(envFilePath));
        } else {
            this.envConfig = {
                PORT: process.env.PORT,
            };
        }
    }

    get(key: string){
        return this.envConfig[key];
    }   


}