# Menggunakan image dasar Node.js
FROM node:14

# Menetapkan direktori kerja di dalam wadah
WORKDIR /app

# Menyalin package.json dan package-lock.json ke dalam wadah
COPY package*.json ./

# Menginstal dependensi
RUN npm install

# Menyalin seluruh kode aplikasi ke dalam wadah
COPY . .
EXPOSE 3000

# Menjalankan aplikasi saat wadah berjalan
CMD ["npm", "run", "dev"]