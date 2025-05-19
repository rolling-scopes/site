import fs from 'node:fs/promises';

export const ensureDirExists = async (dirPath: string): Promise<void> => {
  const stat = await fs.stat(dirPath).catch((err) => {
    if (err.code === 'ENOENT') {
      return null;
    }
    throw err;
  });

  if (!stat || !stat.isDirectory()) {
    await fs.mkdir(dirPath, { recursive: true });
  }
};
