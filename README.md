# image-matrix
image to matrix and basic image matrix operations

# Function
### imageToMatrix(image)
convert image to rgba matrix \
**image** argument is html img element \
return **image_data** : 3d Array[x][y][rgba]

### matrixToImage(image_data, canvas, type)
convert matrix to image \
argument: \
**image_data** : matrix of image \
**canvas** : html canvas element \
**type** (option) : type of matrix ('rgba' or 'grayscale')

### transform(image_data, transformer)
transform each pixels of matrix to other value \
**image_data** : matrix of image \
**transformer** : callback function(rgba_value)

## Preview: [Open](https://ncgalih.github.io/image-matrix/)
