# Movie-quotes

---

The movie-quotes web app shows movies and related quotes based on randomness.
Movie-quotes also has an admin side, where movies can be added. 

#
### Table of Contents
* [Prerequisites](#prerequisites)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Migrations](#migration)
* [Development](#development)
* [Create Administrator](#create-administrator)
* [Deployment with CI / CD](#deployment-with-ci-\-cd)
* [Project Structure](#project-structure)
* [Service Interaction Map](#service-interaction-map)
* [Server Infrastructure](#server-infrastructure)
* [Database Backups](#database-backups)

#
### Prerequisites

* <img src="readme/assets/php.svg" width="35" style="position: relative; top: 4px" /> *PHP@8 and up*
* <img src="readme/assets/mysql.png" width="35" style="position: relative; top: 4px" /> *MYSQL@8 and up*
* <img src="readme/assets/npm.png" width="35" style="position: relative; top: 4px" /> *npm@6 and up*
* <img src="readme/assets/composer.png" width="35" style="position: relative; top: 6px" /> *composer@2.2 and up*

#
### Tech Stack

* <img src="readme/assets/laravel.png" height="18" style="position: relative; top: 4px" /> [Laravel@9.x](https://laravel.com/docs/9.x) - back-end framework
* <img src="readme/assets/vite.svg" height="18" style="position: relative; top: 4px" /> [Vite](https://laravel.com/docs/9.x/vite/) - helps to bundle application's CSS and JavaScript files into production ready assets.
* <img src="readme/assets/tailwind.svg.png" height="19" style="position: relative; top: 4px" /> [Tailwind CSS](https://tailwindcss.com/) - makes it quicker to write and maintain the code of your application
* <img src="readme/assets/spatie.png" height="19" style="position: relative; top: 4px" /> [Spatie Translatable](https://github.com/spatie/laravel-translatable) - package for translation

#
### Getting Started
1\. First of all you need to clone Movie-quotes repository from github:
```sh
git clone https://github.com/RedberryInternship/ivane-movie-quotes.git
```

2\. Next step requires you to run *composer install* in order to install all the dependencies.
```sh
composer install
```

3\. after you have installed all the PHP dependencies, it's time to install all the JS dependencies:
```sh
npm install
```

and also:
```sh
npm run dev
```
in order to build and watch your JS/tailwind resources.

---

And now you should provide **.env** file all the necessary environment variables:

#
**MYSQL:**
>DB_CONNECTION=mysql\
>DB_HOST=127.0.0.1\
>DB_PORT=3306\
>DB_DATABASE=***** \
>DB_USERNAME=***** \
>DB_PASSWORD=*****

#

##### Now, you should be good to go!

#
### Migration
if you've completed getting started section, then migrating database if fairly simple process, just execute:
```sh
php artisan migrate
```

#
### Development

You can run Laravel's built-in development server by executing:

```sh
  php artisan serve
```

when working on JS and tailwind you may run:

```sh
  npm run dev
```
it builds your js files into executable scripts.
It also watches and generates your tailwind properties in app.css

#
### Create Administrator

in order to create an administrator you need to run:

```sh
  php artisan create:admin
```

after this, you need to generate a username:

```sh
  username
```
and password:

```sh
  ******
```

#
### Project Structure

```bash
├─── app
│   ├─── Console
│   ├─── Exceptions
│   ├─── Http
│   ├─── Providers
│   │... Models
├─── bootstrap
├─── config
├─── database
├─── public
├─── resources
├─── routes
├─── storage
├─── tests
├─── vendor
- .env
- artisan
- composer.json
- package.json
- phpunit.xml
- tailwind.config.js
- vite.config.js
```

Project structure is fairly straitforward(at least for laravel developers)...

For more information about project standards, take a look at these docs:
* [Laravel](https://laravel.com/docs/9.x)

[Database Design Diagram](./readme/draw-sql/draw-sql.md "Draw.io")
