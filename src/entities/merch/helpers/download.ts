import JSZip from 'jszip';

function downloadFile(url: string, filename: string) {
  const link = document.createElement('a');

  link.href = url;
  link.download = filename || url.split('/').pop() || '';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);

  downloadFile(url, filename);
}

async function createArchive(files: string[]): Promise<Blob> {
  const zip = new JSZip();

  await Promise.all(
    files.map(async (url) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
        }

        const blob = await response.blob();
        const filename = url.split('/').pop() || '';

        zip.file(filename, blob);
      } catch (error) {
        console.error(`Error processing file ${url}:`, error);
      }
    }),
  );

  return zip.generateAsync({ type: 'blob' });
}

export async function downloadArchive(files: string[], filename: string) {
  if (files.length === 1) {
    downloadFile(files[0], filename);
    return;
  }

  const archiveBlob = await createArchive(files);

  downloadBlob(archiveBlob, `${filename}.zip`);
}
