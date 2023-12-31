import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  constructor(filePath: string) {
    const path = join(__dirname, '..', '..', filePath);
    dotenv.config({ path });
  }

  get(key: string) {
    return process.env[key];
  }

  getUploadFolderPath(): any {
    return join(__dirname, '..', '..', 'generated-files');
  }
}
