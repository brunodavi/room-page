function getHero(device: string, index: number) {
  const imageNumber = index + 1;
  return `url(/images/${device}-image-hero-${imageNumber}.jpg)`;
}

export function getMobileHero(index: number) {
  return getHero("mobile", index);
}

export function getDesktopHero(index: number) {
  return getHero("desktop", index);
}