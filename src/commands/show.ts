import { formatTimestamp, isTwitterUrl } from "../modules";
import { CommandType } from "../types"

export const Command: CommandType = {
    name: "show",
    description: "show the tweet infomation",
    callback: async (args) => {
        if (args === undefined) return;

        //URLがtwitterの物でない場合
        if (isTwitterUrl(args[0]) === false) {
            console.error("Invalid URL");
            return;
        }

        //ドメイン部分をfxtwitterapiのドメインに置き換え
        const requestURL: string = `https://api.fxtwitter.com/${args[0].replace('https://x.com/', '')}`;

        //apiにgetリクエストを投げる
        const ApiResponse: Response = await fetch(requestURL, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        const data = await ApiResponse.json()
        console.log(data)

        //ステータスコード200以外の場合
        if (data.code !== 200) {
            console.error("Error: " + data.code);
            console.log("tweet not found");
            return;
        }
        const tweet = data.tweet;



        //ツイートにメディアが含まれていればそのURLを表示
        let media_content = "";
        if (tweet.media !== undefined) {
            for (const media of tweet.media.all) {
                media_content += `\n${media.type}: ${media.url}`;
            }
        }

        //display infomations
        console.log(`${formatTimestamp(tweet.created_timestamp)}`);
        console.log(`name: ${tweet.author.name} , screenname: ${tweet.author.screen_name}`);
        console.log(`replies: ${tweet.replies}, RTs: ${tweet.retweets}, likes: ${tweet.likes}, bookmarks: ${tweet.bookmarks}, views:${tweet.views}`);
        console.log(`content: ${tweet.text}\n`);
        if (tweet.media !== undefined) {
            console.log(`medias: ${media_content}`)
        }
        console.log(`source: ${tweet.source}`);

        //console.log("Test command executed with args:", args);
    },
}