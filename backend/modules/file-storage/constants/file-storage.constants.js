import * as path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
export const UPLOAD_DIRECTORY = path.join(__dirname, '..', 'uploads');
export const FILE_STORAGE_URL = process.env.FILE_STORAGE_URL;
