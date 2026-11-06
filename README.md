# E-commerce SOLID — Projeto 2

Este é o e-commerce do Projeto 2: provar que a infraestrutura pode ser trocada sem tocar na regra de negócio.

## Como rodar

Duas formas distintas de execução:

1. offline e local  

2. infraestrutura real

## 1. Rodar Offline

- configurar o arquivo .env  
env  
APP_ENV=test

- executar  
bash  
npm run dev  


## 2. Rodar real  

- configurar o arquivo .env  
env  
APP_ENV=dev  
DATABASE_URL="string de conexão" 

- gerar cliente (tipos)  
bash  
npx prisma generate  

- executar  
bash  
npm run dev