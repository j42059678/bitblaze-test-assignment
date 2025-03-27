
import { promisify } from 'node:util';
import { exec as node_exec } from 'node:child_process';
import { Injectable } from '@nestjs/common';

const exec = promisify(node_exec);

interface IExecutor {
    execute(command: string): void;
}

@Injectable()
export class ExecutorService implements IExecutor {
    async execute(command: string): Promise<string> {
        const { stdout, stderr} = await exec(command);
        if (stderr) {
            throw new Error(stderr);
        }
        return stdout;
    }
}