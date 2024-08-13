import { Colors, Shadows, Gradients } from '@/constants/styles'
import { css } from '@emotion/react'

export const colorPalette = css`
  :root {
    --color-yellow-100: rgba(255, 249, 188, 1);
    --color-yellow-200: rgba(255, 249, 189, 1);

    --color-orange-100: rgba(255, 195, 97, 1);
    --color-orange-200: rgba(254, 195, 97, 1);
    --color-orange-300: rgba(255, 107, 87, 1);

    --color-pink-100: rgba(249, 140, 189, 1);

    --color-blue-100: rgba(105, 191, 255, 1);
    --color-blue-200: rgba(43, 114, 216, 1);
    --color-blue-300: rgba(36, 97, 186, 1);
    --color-blue-400: rgba(18, 49, 93, 1);

    --color-gray-100: #cecece;

    --color-green-100: rgba(195, 235, 164, 1);
    --color-green-200: rgba(174, 216, 147, 1);
    --color-green-300: rgba(115, 216, 156, 1);
    --color-green-400: rgba(3, 107, 87, 1);

    --shadow-orange-100: rgba(255, 174, 39, 1);

    --shadow-pink-100: rgba(247, 169, 160, 1);
    --shadow-pink-200: rgba(242, 104, 166, 1);

    --shadow-blue-100: rgba(28, 103, 211, 1);

    --gradient-yellow-100: rgba(115, 216, 156, 0);
  }
`
