import { imageToMatrix, matrixToImage, grayScale, brightness, contrast, saturation, transform } from './index.js' 

const img = document.getElementById('myimage')

//convert image to matrix
const imagedata = imageToMatrix(img)


//grayscale
const grayscale = transform(imagedata, grayScale())
const graycanvas = document.getElementById('canvas')
matrixToImage(grayscale, graycanvas, 'grayscale')

//brightness
const brightcanvas = document.getElementById('bright')
const bright = transform(imagedata, brightness(1.7))
matrixToImage(bright, brightcanvas)

const darkcanvas = document.getElementById('dark')
const dark = transform(imagedata, brightness(0.5))
matrixToImage(dark, darkcanvas)

//contrast
const highcanvas = document.getElementById('highcontrast')
const highcontrast = transform(imagedata, contrast(0.5))
matrixToImage(highcontrast, highcanvas)

const lowcanvas = document.getElementById('lowcontrast')
const lowcontrast = transform(imagedata, contrast(-0.5))
matrixToImage(lowcontrast, lowcanvas)

//saturation
const saturatedcanvas = document.getElementById('saturated')
const saturated = transform(imagedata, saturation(3))
matrixToImage(saturated, saturatedcanvas)

const desaturatedcanvas = document.getElementById('desaturated')
const desaturated = transform(imagedata, saturation(0.5))
matrixToImage(desaturated, desaturatedcanvas)
