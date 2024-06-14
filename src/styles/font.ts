import { fontProps } from '@/types'

function FONT({ weight, size, lineHeight, letterSpacing }: fontProps): string {
  return `
    font-family:inherit;
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
  `
}

export const FONTS = {
  //h1: FONT({ weight: 600, size: 2.6, lineHeight: 140, letterSpacing: 4 }),
  //h2: FONT({ weight: 400, size: 1.4, lineHeight: 140, letterSpacing: 4 }),
  //body1: FONT({ weight: 600, size: 1.6, lineHeight: 140, letterSpacing: 3 }),
  body2: FONT({
    weight: 700,
    size: 2.0,
    lineHeight: 'normal',
    letterSpacing: 'normal',
  }),

  body3: FONT({
    weight: 700,
    size: 1.6,
    lineHeight: 'normal',
    letterSpacing: 'normal',
  }),
  body4: FONT({
    weight: 400,
    size: 1.6,
    lineHeight: 'normal',
    letterSpacing: 'normal',
  }),
  body5: FONT({
    weight: 700,
    size: 1.6,
    lineHeight: 'normal',
    letterSpacing: 'normal',
  }),
  body6: FONT({
    weight: 400,
    size: 1.6,
    lineHeight: 'normal',
    letterSpacing: 'normal',
  }),
  //body5: FONT({ weight: 700, size: 2.4, lineHeight: 140, letterSpacing: 4 }),
  //body6: FONT({ weight: 400, size: 1.4, lineHeight: 140, letterSpacing: 3 }),
  //body7: FONT({ weight: 500, size: 1.6, lineHeight: 140, letterSpacing: 4 }),
  /*body8: FONT({
    weight: 400,
    size: 2,
    lineHeight: 140,
    letterSpacing: 4,
    notoSans: true,
  }),*/
  //body9: FONT({ weight: 600, size: 2, lineHeight: 130, letterSpacing: 3 }),
  //body10: FONT({ weight: 600, size: 2.4, lineHeight: 130, letterSpacing: 4 }),
  //body11: FONT({ weight: 400, size: 1.5, lineHeight: 140, letterSpacing: 4 }),
  //body12: FONT({ weight: 400, size: 1.6, lineHeight: 140, letterSpacing: 4 }),
  caption1: FONT({
    weight: 400,
    size: 1.2,
    lineHeight: 'normal',
    letterSpacing: 'normal',
  }),
  //caption2: FONT({ weight: 500, size: 1, lineHeight: 130, letterSpacing: 4 }),
  //caption3: FONT({ weight: 400, size: 1.2, lineHeight: 140, letterSpacing: 4 }),
  //caption4: FONT({ weight: 400, size: 1.2, lineHeight: 140, letterSpacing: 3 }),
  //caption5: FONT({ weight: 400, size: 1.1, lineHeight: 140, letterSpacing: 4 }),
  /*caption05: FONT({
    weight: 700,
    size: 1.2,
    lineHeight: 140,
    letterSpacing: 4,
  }),*/
  //btn1: FONT({ weight: 400, size: 1.2, lineHeight: 140, letterSpacing: 3 }),
  //btn2: FONT({ weight: 400, size: 1.4, lineHeight: 130, letterSpacing: 4 }),
  //btn3: FONT({ weight: 300, size: 1.6, lineHeight: 140, letterSpacing: 4 }),
  //btn4: FONT({ weight: 300, size: 1, lineHeight: 140, letterSpacing: 4 }),
  //footer1: FONT({ weight: 600, size: 1.2, lineHeight: 140, letterSpacing: 4 }),
  //footer2: FONT({ weight: 400, size: 1.2, lineHeight: 140, letterSpacing: 4 }),
  /*cardBody5: FONT({
    weight: 700,
    size: 2.3,
    lineHeight: 140,
    letterSpacing: 4,
  }),*/
}

export type FontsKeyType = keyof typeof FONTS
