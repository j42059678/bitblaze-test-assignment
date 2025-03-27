import { Injectable } from "@nestjs/common";
import { IService } from "src/modules/base/base.service";
import { ExecutorService } from "src/modules/utils/service/executor.service";

@Injectable()
export class DriveService implements IService {

    constructor(private readonly executorService: ExecutorService) {}

    async getDrives() {
        const data = await this.executorService.execute('get-drives.sh');
        const drives = JSON.parse(data);
        return drives;
    }

    async getDriveById(id: string) {
        const data = await this.executorService.execute(`get-drive-by-id.sh ${id}`);
        const drive = JSON.parse(data);
        return drive;
    }

    async ejectDriveById(id: string) {
        const data = await this.executorService.execute(`eject-drive-by-id.sh ${id}`);
        const drive = JSON.parse(data);
        return drive;
    }
}