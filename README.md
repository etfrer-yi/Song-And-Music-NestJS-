# Song-And-Music-NestJS-

This is part of the Song And Music project. The files in this repository are for interacting with a local SQL server database. 

To be able to use this repository,
1. Install NestJS (see https://docs.nestjs.com/first-steps) and replace the default `src` file that is generated with the current `src` file (the current `src` file is defined as all the files that are within this repository). 
2. Go to the `app.module.ts` file and change the `username` and `password` to be your SQL server `username` and `password`.
3. Create a SQL server database with name `SongAndMusic` and, within this database, create a table called `SongAndMusic`. Design this table by looking at the Issue "SongAndMusic table design"
4. Run `npm run start` to run the application and allow HTTP requests to be made.

============================================================================================

Final product looks like this (the result of a GET request for all records):
![image](https://user-images.githubusercontent.com/77317763/131038175-1bd7004b-6280-402c-94b8-11c4b7f45ca9.png)

Clicking on 'Add New Record' generates a form that allows you to CREATE a new record in the database:
![image](https://user-images.githubusercontent.com/77317763/131038289-1f4e6890-1fac-4933-a0df-03b7aad08782.png)

Clicking on any of the existing records generates a form filled out with the details of that record. It is then possible to UPDATE that record:
![image](https://user-images.githubusercontent.com/77317763/131038393-59609617-8229-4399-9c4c-c671ee71a741.png)

Clicking on any of the checkboxes on the rightmost column will DELETE that record.

All basic CRUD endpoints are done in NestJS (this repository). The UI is accomplished through ExtJS (at https://github.com/etfrer-yi/Song-And-Music-ExtJS).

