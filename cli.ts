import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("go", {
    name: "go",
    windows: [
        "${ProgramFiles}\\Go\\bin\\go.exe",
    ],
    linux: [
        "/usr/local/go/bin/go",
    ],
});

/**
 * Represents a go command.
 */
export class GoCommand extends Command {
    /**
     * Creates a new instance of the `ttCliCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("go", args, options);
    }
}

/**
 * Creates a new instance of the GoCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the GoCommand class.
 */
export function go(args?: CommandArgs, options?: CommandOptions): GoCommand {
    return new GoCommand(args, options);
}
