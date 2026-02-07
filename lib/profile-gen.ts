export function makeIdenticonDataUrl(seed: string, size = 96): string {
  const s = (seed || "user").toString();

  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }

  const hue = Math.abs(h) % 360;
  const fg = `hsl(${hue} 70% 45%)`;
  const bg = `hsl(${hue} 35% 92%)`;

  const cells = 5;
  const cell = size / cells;
  const blocks: string[] = [];

  let bits = h >>> 0 || 1;
  const nextBit = () => {
    const bit = bits & 1;
    bits >>>= 1;
    if (bits === 0) {
      h = Math.imul(h ^ 0x9e3779b9, 16777619);
      bits = h >>> 0 || 1;
    }
    return bit;
  };

  for (let y = 0; y < cells; y++) {
    for (let x = 0; x < Math.ceil(cells / 2); x++) {
      if (nextBit() === 1) {
        const px = x * cell;
        const py = y * cell;

        blocks.push(
          `<rect x="${px}" y="${py}" width="${cell}" height="${cell}" />`,
        );

        const mx = (cells - 1 - x) * cell;
        if (mx !== px)
          blocks.push(
            `<rect x="${mx}" y="${py}" width="${cell}" height="${cell}" />`,
          );
      }
    }
  }

  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">` +
    `<rect width="${size}" height="${size}" fill="${bg}"/>` +
    `<g fill="${fg}">${blocks.join("")}</g>` +
    `</svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
