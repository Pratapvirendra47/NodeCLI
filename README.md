# This project needs to run at node = 16
# api_node Source content 
https://hendrixer.github.io/API-design-v4/lessons/auth/auth-middleware

# Install Express
npm i express --save or yarn add express
# Install Prisma along with Typescript
npm i typescript ts-node @types/node prisma --save-dev

# Create config file for typescript
tsconfig.json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
# Initialize Prisma
npx prisma init

# Client-side prisma SDK
npm i @prisma/client --save

# Migration of DB from the schema
Use npx prisma migrate dev --name init  for the migration of DB.

# tRPC
https://trpc.io/docs/quickstart 

# Thunderclient VS code extension
An extension where you can test your api calls.

# Nodemon to auto restart the server
npm install nodemon --save-dev
"dev": "nodemon src/index.ts"

# Middleware Installation
- description:  Morgan is a middleware that logs the request.
npm i morgan --save

# Composing middlewares
npm i compose-middleware

# Using JSON web token
npm i jsonwebtoken bcrypt dotenv
  
# Run prisma studio
npx prisma studio 
