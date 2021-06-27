export function loadImage(url?: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    if (!url) {
      return resolve(null);
    }
    const image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.src = url;
    // We need this to avoid contaminating the canvas
    // https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
    image.crossOrigin = "anonymous";
  });
}
