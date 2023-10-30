# Full-stack-MySQL-Task-App

A simple full-stack-mysql task app

## Getting Started

You must have local MySQL installed first to run this very simple full-stack-mysql task based app.

### Prerequisites

What things you need to install the application and how to install them

```
brew install cd ..
mysql -u root
mysql -u root -p (if you are using password)
```

### Installing

Go to backend folder and install dependencies

```
cd backend
npm i
```

And move back to frontend folder

```
cd ..
cd frontend
npm i
```

Now go to the root of the folder and run

```
cd ..
npm i
npm start
```

### MySQL Database connection
If you get "Unknown database" error message, this means you have to first create a database in your MySQL
```
show databases;
create database taskdbreact23s;
show databases; (make sure you have this db)
```

### Linting

To check for linting issues, you can go to frontend folder
and run

```
npm run lint
```

## Local Deployment

The application can be accessed locally from following address

```
http://localhost:5173/
```

## Built With

- [React](https://react.dev/) - The library for web and native user interfaces
- [MySQL](https://www.mysql.com/) - The world's most popular database
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Sequelize](https://sequelize.org/) - Node.js ORM for MySQL and other relational databases
- [Vite](https://vitejs.dev/) - Dev environment for front-end

## Use as reference material

Please use as a reference material

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/kalwar/full-stack-mysql2-app/blob/main/LICENSE) file for details
