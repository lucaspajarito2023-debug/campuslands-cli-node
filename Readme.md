# Campuslands CLI Node

Este repositorio ha sido desarrollado con fines educativos y de retroalimentación en **Node.js**. El proyecto consiste en la creación de una interfaz interactiva de línea de comandos (CLI) para gestionar registros de campers.

El objetivo principal es poner en práctica conceptos fundamentales de Node.js, manejo de archivos, interfaces CLI y buenas prácticas de organización y trabajo con Git.

## ¿Qué se trabajó?

Durante el desarrollo del proyecto se trabajaron los siguientes conceptos:

* Importación y utilización de librerías y módulos de Node.js.
* Manejo de herramientas y argumentos mediante una interfaz CLI.
* Lectura y escritura de archivos utilizando `fs/promises`.
* Implementación de operaciones CRUD para la gestión de campers.
* Creación de un flujo interactivo mediante `readline`.
* Organización del proyecto mediante una arquitectura por responsabilidades.
* Manejo profesional de ramas y flujo de trabajo con Git.

## 🛠️ Arquitectura y estructura del proyecto

```text
campuslands-cli-node/

├── data/
│   └── campers.json          # Base de datos local en formato JSON
│
├── src/
│   ├── .gitignore            # Exclusión de archivos locales y temporales
│   ├── campers.js            # Persistencia y operaciones CRUD con fs/promises
│   ├── index.js              # Enrutador principal de la CLI mediante argumentos
│   └── interactivo.js        # Asistente interactivo de consola mediante readline
│
├── package.json              # Metadatos y configuración del proyecto
└── README.md                 # Documentación y guía del proyecto
```

### Descripción de las principales capas

* **`data/`**: contiene la información persistente de los campers en un archivo JSON.
* **`src/campers.js`**: se encarga de la lectura, escritura y operaciones CRUD sobre los registros.
* **`src/index.js`**: funciona como punto de entrada y permite ejecutar las diferentes acciones de la CLI mediante argumentos.
* **`src/interactivo.js`**: proporciona una experiencia interactiva paso a paso utilizando `readline`.
* **`package.json`**: contiene la configuración, metadatos y dependencias necesarias para ejecutar el proyecto.

## 🌿 Ramas principales

El proyecto utiliza un flujo de trabajo basado en ramas para mantener separado el código estable del código en desarrollo.

* **`main`**: rama principal y estable del proyecto. No se recomienda realizar cambios directamente sobre esta rama.
* **`dev`**: rama destinada al desarrollo, integración y pruebas de nuevas funcionalidades antes de incorporarlas a la rama principal.

## 📋 Requisitos previos

Antes de trabajar con este proyecto, es necesario contar con:

* **Node.js** instalado.
* **npm** incluido con Node.js.
* **Git** para gestionar las ramas y versiones del proyecto.
* Un editor de código, como **Visual Studio Code**.
* Una terminal compatible con la ejecución de comandos de Node.js.

Para comprobar que Node.js y npm están instalados correctamente:

```bash
node -v
npm -v
```

Para comprobar la instalación de Git:

```bash
git --version
```

## 🚀 Cómo utilizar este repositorio

### 1. Clonar el repositorio

Clona el repositorio en tu equipo:

```bash
git clone <URL-DEL-REPOSITORIO>
```

Luego, ingresa a la carpeta del proyecto:

```bash
cd campuslands-cli-node
```

### 2. Instalar las dependencias

Ejecuta:

```bash
npm install
```

### 3. Ejecutar el proyecto

Una vez instaladas las dependencias, ejecuta el comando correspondiente definido en el `package.json`.

Ejemplo:

```bash
npm start
```

> Los comandos disponibles pueden consultarse directamente en la sección `scripts` del archivo `package.json`.

## 🎯 Objetivo del proyecto

Este proyecto busca fortalecer los conocimientos fundamentales de **Node.js** mediante la construcción de una aplicación CLI funcional.

A través de su desarrollo se practican conceptos como:

* Modularización.
* Manejo de archivos.
* Persistencia de información.
* Operaciones CRUD.
* Entrada y salida de datos por consola.
* Argumentos de línea de comandos.
* Organización de proyectos.
* Control de versiones con Git.

El proyecto forma parte del proceso de aprendizaje y práctica de desarrollo backend con **Node.js**.
