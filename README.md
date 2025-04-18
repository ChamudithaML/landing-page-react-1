# React Client App
This is a modern React application built with Vite, TypeScript, and Tailwind CSS

### Features

⚛️ React 19 with Hooks
⚡ Fast dev & build with Vite
🎨 Styled using Tailwind CSS
🎥 Animations via Framer Motion
🔄 Routing with React Router
📬 Form handling using React Hook Form
🌐 HTTP requests with Axios
✅ Linting via ESLint
🛠️ Type safety with TypeScript

### Install dependencies

npm install

### Run the development server

npm run dev

### Build for production

npm run build

### Dependencies

React, React DOM
React Router DOM
React Hook Form
Framer Motion
Axios
Font Awesome
React Icons
Tailwind CSS
TypeScript



# ASP.NET Core Web API

This is a .NET 8 Web API project built using ASP.NET Core and Entity Framework Core with SQL Server support. Swagger is enabled for API documentation.

### Features

✅ ASP.NET Core 8 Web API  
🗃️ Entity Framework Core with SQL Server  
🛠️ EF Core Tools for migrations  
📄 Swagger/OpenAPI support via Swashbuckle  
🔧 Nullable reference types enabled  
⚙️ Implicit global usings enabled  

### Requirements

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- SQL Server (local)

### Getting Started

#### 1. Restore packages

dotnet restore

#### 2. Run database migrations (if using EF Core migrations)

dotnet ef database update

### Run the app

dotnet run

### Dependencies

- Microsoft.AspNetCore.OpenApi (`9.0.4`)  
- Microsoft.EntityFrameworkCore.SqlServer (`9.0.4`)  
- Microsoft.EntityFrameworkCore.Tools (`9.0.4`)  
- Swashbuckle.AspNetCore (`8.1.1`)  

### Simpler Guide

Install .net 8 sdk
Install SQL Server 2022 + SSMS
Setup database connection

install entity framework using cmd inside project
	- dotnet add package Microsoft.EntityFrameworkCore.SqlServer
	- dotnet add package Microsoft.EntityFrameworkCore.Tools

dotnet ef migrations add InitialCreate   <=== if this gives error run following and run this again
														dotnet tool install --global dotnet-ef
		

Run in the project root
    - dotnet restore
    - dotnet ef database update
    - dotnet run
