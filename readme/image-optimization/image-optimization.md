# 🎴 Automated assets optimization

## 💫 Introduction

The optimization are performed in multiple steps:
The developers using our brand new component API `<Image />`. That will perform all the necessary optimizations automatically.

for example we may have problems with performance


#### 📍 Optimization algorithm
1. Any image of any format will be converted to `WebP` and compressed
2. If an image is already in `WebP` format it'll be only compressed
3. `SVG` are compressed as well, using [SVGO](https://github.com/svg/svgo)

#### 🚀 Public API
The application is containing custom Image component that will abstract and perform all the necessary optimizations _(e.g - lazy loading, fetch priority and etc.)_ by himself

The motivation is that developer shouldn't think about any trivial performance optimization and focus on his more important job. All the necessary work will be handled by the algorithm 😊.

Familiar API - you can use the component just like basic `img` element, all optimizations are handled behind the scenes for you.
```tsx
// old way
<img src={photo} alt="Person's photo">

// new way
<Image src={photo} alt="Person's photo" />
```

The src prop can accept image of any format - .jpg, .jpeg, .png... Everything will be converted to WebP behind the scenes.

### ⚠️ To check if responsive images are generated - firstly build the project and then run ```npm run preview```.

### ⛔ **No optimizations are performed for development mode**
