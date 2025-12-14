# Используем официальный Node.js образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --only=production

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем serve глобально
RUN npm install -g serve

# Открываем порт
EXPOSE 80

# Запускаем приложение
CMD ["serve", "-s", "dist", "-l", "80"]