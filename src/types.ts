interface CommandType {
    name: string;
    description: string;
    alias?: string[];
    callback: (args?: string[]) => Promise<void>;
}

export {
    CommandType,
}