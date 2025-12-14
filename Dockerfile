# Используем официальный Node.js образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json
COPY package.json ./

# Устанавливаем все зависимости (включая dev для сборки)
RUN npm install

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Удаляем dev-зависимости после сборки
RUN npm prune --production

# Устанавливаем serve глобально
RUN npm install -g serve

# Открываем порт
EXPOSE 80

# Запускаем приложение
CMD ["serve", "-s", "dist", "-l", "80"]