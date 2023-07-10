[![Node.js CI](https://github.com/mandeep-mahra/Image-Compression/actions/workflows/node.js.yml/badge.svg)](https://github.com/mandeep-mahra/Image-Compression/actions/workflows/node.js.yml)
# Image Compression and Comparison using K-Means and Chroma Subsampling

This repository contains a project that aims to compress and compare images using K-means clustering and chroma subsampling. The project utilizes Node.js for the backend, HTML, CSS, and JavaScript for the frontend, and Express for the controllers.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Directory Tree](#project-directory-tree)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The purpose of this project is to demonstrate image compression and comparison techniques using K-means clustering and chroma subsampling. The K-means algorithm is employed to cluster the image pixels into groups based on their color similarity. By reducing the number of colors used, we can achieve image compression. Chroma subsampling is used to reduce the amount of information in the color channels of the image, further enhancing the compression ratio.

## Technologies Used

The following technologies and libraries are used in this project:

- Node.js: A JavaScript runtime used for building the backend server.
- Express: A fast and minimalist web application framework for Node.js, used for handling HTTP requests and routing.
- HTML, CSS, JavaScript: Used for developing the frontend user interface.
- fs: A built-in Node.js module for handling file system operations.
- sharp: A Node.js module for image processing, used for resizing and manipulating the images.

## Installation

To run this project locally, please follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mandeep-mahra/Image-Compression

2. Navigate to the project directory:

    ```bash
    cd Image-Compression

3. Install the dependencies:

    ```bash
    npm install

## Usage

1. Start the server:

    ```bash
    node imageInput.js
2. Open a web browser and navigate to http://localhost:3000 to access the application.

3. Follow the instructions on the web page to compress and compare images using K-means clustering and chroma subsampling.

## Project Structure

```
Image-Compression
|
├─ Backend
│  ├─ images
│  │  ├─ random-dice.jpg
│  │  ├─ sample.jpg
│  │  └─ test.jpeg
│  ├─ input
│  │  └─ image.jpg
│  ├─ output
│  │  ├─ chromaSS.jpg
│  │  └─ kMeans.jpg
│  └─ src
│     ├─ chromaSubsampling.js
│     ├─ executeAll.js
│     ├─ getRGBA.js
│     ├─ imageInput.js
│     ├─ kMeans.js
│     └─ matrixToImage.js
├─ Frontend
│  ├─ pages
│  │  ├─ displayPage.html
│  │  └─ landingPage.html
│  └─ resources
│     ├─ css
│     │  ├─ displayPage.css
│     │  ├─ inputForm.css
│     │  └─ landingPage.css
│     ├─ getFile.js
│     ├─ icons
│     │  ├─ close.png
│     │  ├─ gear.png
│     │  └─ home.png
│     ├─ loadChoramaSS.js
│     ├─ loadKmeansimage.js
│     ├─ loadOriginal.js
│     ├─ loadUploadedImage.js
│     ├─ manageClick.js
│     └─ manageDownload.js
├─ LICENSE
├─ README.md
├─ package-lock.json
└─ package.json

```

## Contributing
Contributions to this project are welcome. Feel free to fork the repository, make changes, and submit a pull request.

## License
The project is licensed under the MIT License.
