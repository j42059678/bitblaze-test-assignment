import { Bootstaptable } from "./base/base.bootstrap";
import { lstatSync, readdirSync } from "fs";
import * as path from "path";

export class BootstrapScripts {
    static async bootstrap(app): Promise<void> {
        const start = `${process.cwd()}/src/scripts`;
        process.env.PATH = `${start}:${process.env.PATH}`
        const traverse = (d) => {
            readdirSync(d).forEach((f) => {
                const fp = path.join(d, f);
                if(lstatSync(fp).isDirectory()) {
                    process.env.PATH = `${fp}:${process.env.PATH}`;
                    traverse(fp);
                }
            });
        };
        traverse(start);
    }
}