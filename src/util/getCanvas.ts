import html2canvas from "html2canvas";

export async function getCanvas(element: HTMLElement) {
  /**
   * Exporting with html2canvas will put white bars around the image if there
   * is any scroll on the document. We scroll to 0,0 to avoid vertical bars,
   * and set the html overflow to "hidden" because a scrollbar will produce
   * a vertical bar on the left.
   */
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  window.scrollTo(0, 0);
  document.documentElement.style.overflow = "hidden";
  const canvas = await html2canvas(element, {
    scale: 3,
    useCORS: true,
  });
  window.scrollTo(scrollX, scrollY);
  document.documentElement.style.overflow = "";
  return canvas;
}
