export const uploadVideo = async (presignedUrl: string, file: Blob) => {
  const response = await fetch(presignedUrl, {
    method: 'PUT',
    body: file,
  });
  return response;
};
