nest new notifications-service

npm i prisma -D
npm i @prisma/client
npx prisma init --datasource-provider SQLite
npx prisma migrate dev
npx prisma studio "visualizar o db"
npm i class-validator class-transformer
