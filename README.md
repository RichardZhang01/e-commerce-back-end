# Employee Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

## Description

- My motivation behind this project was to utilize what I've learned about SQL, and integrate that with Sequlize and Express to develop the back-end of an application. 
- I built this project to better understand SQL logic and server-routing.
- This project aims to create the back-end for an application that interacts with a database through Insomnia.
- Through this project, I learned more about SQL, MySQL, Express and server-side development, and the usefulness of Insomnia.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Video Demonstration](#video)
4. [License](#license)
5. [How to Contribute](#how-to-contribute)
6. [Questions?](#questions)

## <a id="installation"></a>Installation

**Note**: This application requires the use of [Node.js](https://nodejs.org/en/) and [MySQL](https://www.mysql.com/)

To install this project, you first need to clone this repo. To install dependencies, open in [Visual Studio Code](https://code.visualstudio.com/), and in the terminal run: 

      npm install 

Alternatively, you can navigate to the application's installation location in [Git Bash](https://git-scm.com/downloads) (or similar command-line tool) and do the same.

To create the database, in the terminal start MySQL by running:

      mysql -u <your MySQL username> -p

Then create the database by running:

      source ./db/schema.sql;

`Exit` mySQL, and in the terminal, seed the database by running:

      npm run seed

Before running the app, create a file named `.env` in the main folder with the following lines in the `.env` file:

      DB_USER='<your mySQL username>'
      DB_PW='<your mySQL password>'
      DB_NAME='ecommerce_db'

Replace the DB_USER and DB_PW fields with your credentials.

## <a id="usage"></a>Usage

Once this project is opened in Visual Studio Code, or navigated to using Git Bash (or similar command-line tool), run: 

      npm start 

The root route for this application is `http://localhost:3001`, but you can change the port number in the `server.js` file.

Open up [Insomnia](https://insomnia.rest/), or similar program, and use the following routes to interact with the database:

- `http://localhost:3001/api/categories`
- `http://localhost:3001/api/tags`
- `http://localhost:3001/api/products`

## <a id="video"></a>Video Demonstration

The full video demonstration can be found [here](https://drive.google.com/file/d/1akaXlDVAALUGOg0UpZPiW7CJCMMjRKeb/view)

![Example GET](./assets/images/screenshot-1.png)
![Example POST](./assets/images/screenshot-2.png)
![Example PUT](./assets/images/screenshot-3.png)
![Example DELETE](./assets/images/screenshot-4.png)

## <a id="license"></a>License

This application is covered under the [MIT](https://opensource.org/licenses/MIT) license

----------------------------------------------------------------

  Copyright © 2022 Richard Zhang

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  ----------------------------------------------------------------

## <a id="how-to-contribute"></a>How to Contribute

If you want to contribute to this project and make it better, your help is very welcome. This was a school project, so anything you want to do to it, go for it. You can also contact me directly through the links below.

## <a id="questions"></a>Questions?

Have any questions? Here is a list of my links:
- GitHub: [RichardZhang01](https://github.com/RichardZhang01)
- Email: richardzhiyuanzhang@gmail.com

