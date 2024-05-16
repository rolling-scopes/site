# Style Guide
The Style Guide defines visual design standards, typography, color palette, dimensions, shape and other aspects, ensuring uniformity and simplifying the development process.

Please follow the rules and tokens provided in the guide.

#### General rules
1. Use kebab case notation for tokens naming.

## 🎨 Colors
### Usage
```scss
{
  background-color: rgba($color-yellow, $opacity-8);
  color: $color-black;
}
```

### Token Name

<img src="./assets/styleguide-design/token-naming-color.png" alt="Color Token Name">

1. Token type: `$color`
2. The name of the color.
3. Tone (optional).

### List of Tokens Used
|   | Token | HSL | HEX |
| ----------- | ----------- | ----------- | ----------- |
|  | $$Primary$$ |  |  |  |
| ![#000](https://raw.githubusercontent.com/rolling-scopes/site/33180fc2e1d5be898e89fc27fa2d6cd08c8e0c65/readme/assets/styleguide-design/color-primary-black.svg)    |   `$color-black`        | hsla(0, 0%, 0%) |   #000   |
| ![#fff](https://raw.githubusercontent.com/rolling-scopes/site/33180fc2e1d5be898e89fc27fa2d6cd08c8e0c65/readme/assets/styleguide-design/color-primary-white.svg)     |   `$color-white`        | hsla(0, 0%, 100%) |   #fff   |
|  | $$Yellow$$  |  |  |  |
| ![#ffdb20](https://raw.githubusercontent.com/rolling-scopes/site/33180fc2e1d5be898e89fc27fa2d6cd08c8e0c65/readme/assets/styleguide-design/color-secondary-yellow.svg)  |   `$color-yellow`     | hsla(50, 100%, 56%) |   #ffdb20   |
| ![#664d1b](https://raw.githubusercontent.com/rolling-scopes/site/33180fc2e1d5be898e89fc27fa2d6cd08c8e0c65/readme/assets/styleguide-design/color-secondary-yellow-700.svg)  |   `$color-yellow-700` | hsla(40, 58%, 25%) |   #664d1b   |
| ![#efc91f](https://raw.githubusercontent.com/rolling-scopes/site/33180fc2e1d5be898e89fc27fa2d6cd08c8e0c65/readme/assets/styleguide-design/color-secondary-yellow-500.svg)  |   `$color-yellow-500` | hsla(49, 87%, 53%) |   #efc91f   |
| ![#fffaf0](https://raw.githubusercontent.com/rolling-scopes/site/33180fc2e1d5be898e89fc27fa2d6cd08c8e0c65/readme/assets/styleguide-design/color-secondary-yellow-50.svg)  |   `$color-yellow-50`  | hsla(40, 100%, 97%) |   #fffaf0   |
|  | $$Red$$ |  |  |  |
| ![#d44333](https://raw.githubusercontent.com/rolling-scopes/site/33180fc2e1d5be898e89fc27fa2d6cd08c8e0c65/readme/assets/styleguide-design/color-secondary-red.svg)  |   `$color-red`        | hsla(6, 65%, 52%) |   #d44333   |
|  | $$Gray$$ |  |  |  |
| ![#545454](https://raw.githubusercontent.com/rolling-scopes/site/33180fc2e1d5be898e89fc27fa2d6cd08c8e0c65/readme/assets/styleguide-design/color-secondary-gray-600.svg)  |   `$color-gray-600`    | hsla(0, 0%, 33%) |   #545454   |
| ![#757575](https://raw.githubusercontent.com/rolling-scopes/site/33180fc2e1d5be898e89fc27fa2d6cd08c8e0c65/readme/assets/styleguide-design/color-secondary-gray-500.svg)  |   `$color-gray-500`    | hsla(0, 0%, 46%) |   #757575   |
| ![#afafaf](https://raw.githubusercontent.com/rolling-scopes/site/33180fc2e1d5be898e89fc27fa2d6cd08c8e0c65/readme/assets/styleguide-design/color-secondary-gray-400.svg)  |   `$color-gray-400`    | hsla(0, 0%, 69%) |   #afafaf   |
| ![#e6e6e6](https://raw.githubusercontent.com/rolling-scopes/site/33180fc2e1d5be898e89fc27fa2d6cd08c8e0c65/readme/assets/styleguide-design/color-secondary-gray-200.svg)  |   `$color-gray-200`    | hsla(0, 0%, 90%) |   #e6e6e6   |
| ![#f2f2f2](https://raw.githubusercontent.com/rolling-scopes/site/33180fc2e1d5be898e89fc27fa2d6cd08c8e0c65/readme/assets/styleguide-design/color-secondary-gray-100.svg)  |   `$color-gray-100`    | hsla(0, 0%, 95%) |   #f2f2f2   |

## 🫧 Opacity
### Usage
```scss
{
  background-color: rgba($color-yellow, $opacity-8);
  color: rgba($color-black, $opacity-80);
  opacity: $opacity-100;
}
```

### Token Name

<img src="./assets/styleguide-design/token-naming-opacity.png" alt="Opacity Token Name">

1. Token type: `$opacity`
2. The opacity value (as a percentage).

### List of Tokens Used
| Token | Value |
| ----------- | ----------- |
| `$opacity-100` | 1 |
| `$opacity-80` | 0.8 |
| `$opacity-50` | 0.5 |
| `$opacity-20` | 0.2 |
| `$opacity-8` | 0.08 |
| `$opacity-0` | 0 |

## 🇦 Fonts
🚧 The section is in development 🚧

## ⬆️ Size
🚧 The section is in development 🚧

## ✨ Effect
🚧 The section is in development 🚧