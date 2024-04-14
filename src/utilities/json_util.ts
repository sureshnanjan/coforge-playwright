import { readFileSync } from "fs";
export class GetConfigFromJson{
    static getConfig(){
        // src\utilities\json_util.ts
        // coforge.json
        console.log(__dirname)
        console.log(__filename)
        const config = JSON.parse(readFileSync('coforge.json','utf-8'));
        return config;
    }
}