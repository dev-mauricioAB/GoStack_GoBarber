<p align="center">
  <img  src="https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67">
</p>
</br>
<p align="center">
  <img src="https://github.com/TulioCaz/gobarber-web-aplication/blob/master/src/assets/logo.svg?sanitize=true">
</p>
</br>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=GoBarber%20-%20EliasGcf&uri=https%3A%2F%2Fraw.githubusercontent.com%2FEliasGcf%2Fgobarber-api%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 💇🏻‍♂️ About the project
The gobarber project was developed during RocketSeat's GoStack course. The NodeJs, ReackJs, ReactNative and JavaScript stack were used.
The main objective of the application is to unite service providers (Barbers and Hairdressers) with their customers in an organized manner.

## 🚀 Technologies

Technologies that I used to develop this api

<h3>API<\h3>
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

<h3>Frontend<\h3>
- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Icons](https://react-icons.netlify.com/#/)
- [UnForm](https://unform.dev/) [💜](https://rocketseat.com.br/)
- [Yup](https://github.com/jquense/yup)
- [Styled Components](https://styled-components.com/)
- [Polished](https://github.com/styled-components/polished)
- [Axios](https://github.com/axios/axios)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

<h3>Mobile<\h3>
- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [UnForm](https://unform.dev/) [💜](https://rocketseat.com.br/)
- [Yup](https://github.com/jquense/yup)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started
<h2>API<\h2>
Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/dev-mauricioAB/GoStack_GoBarber.git && cd gobarber
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

<h2>Frontend<\h2>
   
```bash
# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```
   
<h2>Mobile<\h2>
   
```bash
# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# If you are going to emulate with android, run this command
# Be sure to have the emulator open
$ yarn android

# If you are going to emulate with ios, run this command
$ yarn ios
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork dev-mauricioAB/GoStack_GoBarber
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd GoStack_GoBarber

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch



## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Maurício Alexandre Barroso – [@YourLinkedin](https://www.linkedin.com/in/mauricioab-dev/) – dev.mauricioalezandre@gmail.com

[https://github.com/dev-mauricioAB/GoStack_GoBarber](https://github.com/dbader/)
