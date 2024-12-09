# Usar uma imagem base do Node.js
FROM node:16

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiar o arquivo package.json e package-lock.json (se existir) para o contêiner
COPY package*.json ./

# Instalar as dependências da aplicação
RUN npm install

# Copiar todo o código da aplicação para o contêiner
COPY . .

# Expor a porta em que o servidor irá rodar
EXPOSE 3000

# Definir o comando para iniciar a aplicação
CMD ["node", "app.js"]
