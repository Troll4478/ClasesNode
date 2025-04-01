# TypeScript

## ¿Qué es TypeScript?
TypeScript es un superset de JavaScript que añade tipado estático opcional y otras características avanzadas para mejorar el desarrollo.

## ¿Cómo instalarlo?
1. Asegúrate de tener Node.js instalado.

2. Instala TypeScript de forma global ejecutando:
   npm install -g typescript

3. Verifica la instalación con:

   tsc --version


## Reglas y configuración
Para configurar TypeScript en un proyecto, genera un archivo de configuración con:

tsc --init

Esto creará `tsconfig.json`, donde puedes modificar opciones como el directorio de salida, el nivel de estrictura de tipos, etc.

## ¿Cómo se usa?
1. Crea un archivo TypeScript, por ejemplo `index.ts`:
   ts
   const saludo = (nombre: string): string => {
       return `Hola, ${nombre}!`;
   };
   console.log(saludo("Mundo"));
   
2. Compila el archivo con:
   tsc index.ts
   Esto generará un archivo `index.js`.

3. Ejecuta el archivo compilado con:
   node index.js


