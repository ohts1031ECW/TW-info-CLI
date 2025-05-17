import { isTwitterUrl } from "../modules";
import { CommandType } from "../types"

export const Command:CommandType = {
    name: "show",
    description: "show the tweet infomation",
    callback: async (args) => {
        if(args === undefined) return;

        //URLがtwitterの物でない場合
        if(isTwitterUrl(args[0]) === false){
            console.log("Invalid URL");
            return;
        }

        const requestURL:string =  `https://api.fxtwitter.com/${args[0].replace('https://x.com/', '')}`;
        
        const ApiResponse:Response = await fetch(requestURL,{
            method: "GET",
            headers:{ "Content-Type": "application/json"} 
        })
        const data = await ApiResponse.json()
        console.log(data)

        // 404エラーの場合
        if (data.code === 404){
            console.log("tweet not found");
            return;
        }
        //console.log("Test command executed with args:", args);
    },
}