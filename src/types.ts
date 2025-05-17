interface CommandType {
    name: string;
    description: string;
    alias?: string[];
    callback: (args: string[]) => void;
}

export {
    CommandType,
}