# 🚀 Prueba Técnica - Gestor de Usuarios (Angular + FastAPI)

Este repositorio contiene una solución Full Stack para la gestión de usuarios (CRUD: Crear, Leer, Actualizar, Eliminar) utilizando **Angular**, **FastAPI** y **MySQL**.

---

## 📚 Índice

- [Descripción General](#descripción-general)
- [Demo](#demo-y-capturas)
- [Stack Tecnológico](#stack-tecnológico)
- [Características Implementadas](#características-implementadas)
- [Puesta en Marcha Local](#puesta-en-marcha-local)
- [Endpoints de la API](#endpoints-de-la-api)
- [Decisiones de Arquitectura y Diseño](#decisiones-de-arquitectura-y-diseño)
- [Posibles Mejoras](#posibles-mejoras)
- [Autor](#autor)

---

## 📝 Descripción General

La aplicación es un gestor de usuarios que permite realizar operaciones CRUD básicas. Permite listar, crear, editar y eliminar usuarios. El sistema demuestra una integración entre un **frontend moderno con Angular** y un **backend eficiente con FastAPI**, todo conectado a una base de datos relacional MySQL.

---

## 🎥 Demo y Capturas

**📹 Video de demo (Youtube)** [https://youtu.be/WjpWXiAZPO4]

---

## 🛠️ Stack Tecnológico

### 🔹 Frontend (Angular)
- **Framework:** Angular (v16+)
- **Lenguaje:** TypeScript
- **HTTP:** HttpClientModule
- **Formularios:** Angular Reactive Forms
- **Routing:** @angular/router
- **UI/Estilos:** Angular Material / Bootstrap / SCSS
- **RxJS:** Programación reactiva

### 🔹 Backend (FastAPI)
- **Framework:** FastAPI
- **Lenguaje:** Python (v3.9+)
- **Base de Datos:** MySQL
- **ORM:** SQLAlchemy
- **Validación:** Pydantic
- **Servidor:** Uvicorn

---

## ✅ Características Implementadas

### 🧠 Backend
- API RESTful con FastAPI
- Conexión a MySQL y modelado con SQLAlchemy
- Validación con Pydantic (incluye documentación Swagger)
- Separación por módulos: lógica CRUD, modelos, esquemas
- CORS habilitado para permitir conexión con Angular

### 🎨 Frontend
- Arquitectura modular basada en componentes y servicios
- Tabla con listado de usuarios desde la API
- Formulario reactivo para crear y editar usuarios
- Confirmación antes de eliminar
- Servicio centralizado para comunicación HTTP

---

## ⚙️ Puesta en Marcha Local

### 🔧 Prerrequisitos

- Node.js (v16+)
- Angular CLI (`npm install -g @angular/cli`)
- Python (v3.9+)
- MySQL Server
- Git

---

### 🐍 Backend (FastAPI)

```bash
# Navega al directorio backend
cd backend

# Crear y activar entorno virtual
python -m venv venv
# Windows
.\venv\Scripts\activate
# Mac/Linux
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt
```

📁 Crea archivo `.env` en `backend/`:

```env
DATABASE_URL="mysql+pymysql://<user>:<password>@<host>:<port>/<database>"
```

▶️ Ejecuta el servidor:

```bash
uvicorn main:app --reload
```

> API activa en: [http://localhost:8000](http://localhost:8000)  
> Documentación: [http://localhost:8000/docs](http://localhost:8000/docs)

---

### 🌐 Frontend (Angular)

```bash
# Navega al frontend
cd frontend

# Instala dependencias
npm install

# Ejecuta la app
ng serve -o
```

> Abre en: [http://localhost:4200](http://localhost:4200)

---

## 🔗 Endpoints de la API

Base URL: `/api/users`

| Método | Endpoint       | Descripción                | Body (Ejemplo)                                      |
|--------|----------------|----------------------------|-----------------------------------------------------|
| GET    | `/`            | Listar todos los usuarios  | -                                                   |
| GET    | `/{id}`        | Obtener usuario por ID     | -                                                   |
| POST   | `/`            | Crear nuevo usuario        | `{ "email": "test@test.com", "name": "Test" }`      |
| PUT    | `/{id}`        | Actualizar usuario         | `{ "email": "new@test.com", "name": "Updated" }`    |
| DELETE | `/{id}`        | Eliminar usuario por ID    | -                                                   |

---

## 🧠 Decisiones de Arquitectura y Diseño

- **FastAPI**: rendimiento, validaciones y documentación automática.
- **Angular**: estructura robusta, escalabilidad y formularios reactivos.
- **MySQL**: base de datos estructurada y ampliamente soportada.
- **SQLAlchemy**: seguridad, legibilidad y portabilidad entre motores.

---

## 🚀 Posibles Mejoras

- 🔐 Autenticación con JWT y OAuth2
- 📄 Paginación y filtros
- ✅ Pruebas con Pytest y Jasmine/Karma
- 🔔 Toastr y mejoras UX/UI
- 📦 Dockerización para despliegue sencillo

---

## 👨‍💻 Autor

**[Juan Pablo Blanco Márquez]**  
📧 Email: [jblancomarquez54@gmail.com]  
