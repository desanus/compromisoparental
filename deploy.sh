#!/bin/bash
set -e

echo "==> Instalando dependencias..."
npm install

echo "==> Aplicando migraciones y seed..."
npm run db:setup

echo "==> Compilando app..."
npm run build

echo "==> Deploy listo. Reiniciá la app desde hPanel."
