# Song-And-Music-NestJS-

This is part of the Song And Music project. The files in this repository are for interacting with a local SQL server database. 

To be able to use this repository,
1. Install NestJS (see https://docs.nestjs.com/first-steps) and replace the default `src` file that is generated with the current `src` file (the current `src` file is defined as all the files that are within this repository). 
2. Go to the `app.module.ts` file and change the `username` and `password` to be your SQL server `username` and `password`.
3. Create a SQL server database with name `SongAndMusic` and, within this database, create a table called `SongAndMusic`. Design this table by looking at the Issue "SongAndMusic table design"
4. Run `npm run start` to run the application and allow HTTP requests to be made.
