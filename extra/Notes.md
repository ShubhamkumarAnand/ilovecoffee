# Nest Notes

- Controllers essentially deal with the routes of your application.

 1. Controllers: A controller’s sole purpose is to receive requests for the application and deal with routes.

 2. Service Layer: This part of the block should only include business logic. For example, all the CRUD operations and methods to determine how data can be created, stored and updated.

 3. Data Access Layer: This layer takes care and provides logic to access data stored in persistent storage of some kind.

 > Link : [Article](https://medium.com/geekculture/nest-js-architectural-pattern-controllers-providers-and-modules-406d9b192a3a)

## Clean Node.js Architecture —With NestJs and TypeScript

> Link : [Article](https://betterprogramming.pub/clean-node-js-architecture-with-nestjs-and-typescript-34b9398d790f)

- The video version of the same article:

> Video : [Video Link](https://www.youtube.com/watch?v=jjczRbgHvVg&t)

- **Dependency Injection** : Transferring the task of creating the object to someone else and directly using the dependency is called dependency injection.

- You can think of DI as the middleman in our code who does all the work of creating the preferred wheels object and providing it to the Car class.

There are basically three types of dependency injection:

- constructor injection: the dependencies are provided through a class constructor.
- setter injection: the client exposes a setter method that the injector uses to inject the dependency.
- interface injection: the dependency provides an injector method that will inject the dependency into any client passed to it. Clients must implement an interface that exposes a setter method that accepts the dependency.
