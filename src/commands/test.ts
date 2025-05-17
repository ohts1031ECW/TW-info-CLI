import { CommandType } from "../types"

export const Command:CommandType = {
    name: "test",
    description: "Test command",
    callback: async(args) => {
        console.log("Test command executed with args:", args);
    },
}