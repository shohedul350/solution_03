## simple Library REST Full API

## Built With
* Node.js
* Express.js
* MongoDb


## Requirements

For development, you will only need Node.js installed in your environnement.


## Install 
    using SSH:
    $ git clone git@github.com:shohedul350/solution_03.git
    or using HTTPS:
    $ git clone https://github.com/shohedul350/solution_03.git
    $ cd solution_03
    $ npm install


## Configure app
Open `solution_03/config/config.env` then You will need:

```
PORT = 
NODE_ENV = 
MONGO_URI =
```
### Run the server with nodemon
    $ npm run server
### Run the server 
    $ npm start

### File Structure
solution_03 (root)
- config
    - config.env
- src
  - controllers
    - userController.js
    - bookController.js
  - models
    - validation
        - index.js
        - userValidation.js
        - bookValidation.js
    - Book.js
    - User.js
  - middleware
    - accessControl.js
    - accessControlBook.js
    - Authorized.js
    - handleError.js
    - handleValidations.js
    - index.js

  - routes
    - bookRoute.js
    - index.js
    - userRoute.js
  - services
    - bookService.js
    - userServicer.js
  - utils
    - asyncHandler.js
    - generalError.js
- app.js
- connectDb.js
- server.js
- .eslintrc.json
- .gitignore
- package-lock.json
- README.md
