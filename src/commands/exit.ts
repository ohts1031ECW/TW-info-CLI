import { CommandType } from "../types"

export const Command:CommandType = {
    name: "exit",
    description: "exit REPL",
    callback: async(args) => {
        console.log("exiting...");
        process.exit(0);
    },
}