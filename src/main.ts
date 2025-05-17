import readline, { ReadLine } from 'readline';
import fs from 'fs';
import path from 'path';
import { CommandType } from './types';

const RL: ReadLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



//初期メッセージ
console.log("Welcome to Twitter Info Viewer in CLI!!");
console.log("type 'help' to see the command list");
console.log("type 'exit' to exit the program");

//コマンドファイル読み込み
const CommandFileDir = path.join(__dirname, 'commands');
const CommandFiles: string[] = fs.readdirSync(CommandFileDir);

let CommandList: { [key: string]: any } = {};
for (const Command of CommandFiles) {
  const CommandPath = path.join(CommandFileDir, Command);
  import(CommandPath).then((module) => {
    const CommandData: CommandType = module.Command;
    CommandList[CommandData.name] = CommandData;
  });
}


RL.setPrompt('> ');
RL.prompt();


RL.on('line', async (line: string) => {
  const command: string = line.trim().split(' ')[0];
  const args: string[] = line.trim().split(' ').slice(1);


  RL.pause();
  //読み込んだコマンドを実行実行
  if (CommandList[command] !== undefined) {
    await CommandList[command].callback(args);
  }
  RL.resume();
  RL.prompt();
});