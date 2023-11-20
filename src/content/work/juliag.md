---
title: Julia Set gif generator
publishDate: 2020-03-02 00:00:00
img: /Portfolio/assets/julia2.webp
img_alt: complex number = -0.8 + 0.16i
description: |
  I developped in python and in rust a fractal generator based on the Julia Set.
tags:
  - Algorithm
  - Dev
  - Math
---

## algorithm

> HOW DOES IT WORK

The [julia_set](https://github.com/Aatrick/Julia_Set/tree/main) function works by creating a 2D array of size x_res*y_res, and then filling it with the iteration ratio of each pixel (the number of iterations it took to reach the max_iter value) and then plotting it using imshow from matplotlib (the iteration ratio is used to determine the color of each pixel).

The generator works with all types of resolutions although it is recommended to use even and similar numbers for x_res and y_res.

### Console

The julia.py file is completely callable from a Powershell terminal and will ask, how you want it to behave.

### GIFs

Other than simply plotting images and saving them, the generator is also able to generate GIFs, there are two modes for now, one zooming progressively into one part of the fractal 

And there's the second mode, making the c value fluctuate, to see how these changes impact the output.

> You can test it yourself by clicking [here](https://colab.research.google.com/drive/1D44ak_Lew7A464rzZLxoYOfrlf7BGRi5?usp=sharing)