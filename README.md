# testapp

1. npm install --save-dev sequelize-cli
2. npm install sequelize
3. npx sequelize-cli init
4. npm init -y
5. npm install mysql
6. npm install express cors
7. npm install dotenv
8. npm install nodemailer
8. npm install --save-dev nodemon
9. npx sequelize-cli model:generate --name Recipe --attributes name:string,steps:text,author:string,prepTime:integer,cookTime:integer,totalTime:integer,cuisineType:string // removed ingredients
10. npx sequelize-cli migration:generate --name create-ingredient
11. npx sequelize-cli migration:generate --name create-recipe-ingredients
12. npx sequelize-cli migration:generate --name create-user
13. create the models for ingredients and recipeingredients and users
14. npx sequelize-cli db:migrate
15. npm install @faker-js/faker
16. npx sequelize-cli seed:generate --name demo-user
17. npx sequelize-cli migration:generate --name create-saved-recipes
18. npx sequelize-cli db:migrate
19. npx sequelize-cli seed:generate --name demo-recipe