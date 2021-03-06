import { loadImage } from "./loadImage";

// This is the high res image size spotify provides
const ImageSize = 640;

export async function getImageDataUrl(
  imageUrls: (string | undefined)[],
  rows: number,
  columns: number
) {
  const canvas = document.createElement("canvas");
  canvas.width = ImageSize * columns;
  canvas.height = ImageSize * rows;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const images = await Promise.all(imageUrls.map(loadImage));

  images.forEach((image, i) => {
    if (!image) return;
    ctx.drawImage(
      image,
      (i % columns) * ImageSize,
      (Math.floor(i / 3) % rows) * ImageSize,
      ImageSize,
      ImageSize
    );
  });

  return canvas.toDataURL("image/png;base64;");
}
