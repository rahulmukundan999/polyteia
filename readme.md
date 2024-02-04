# Chart Project

This project is a web application built with React.js and Material-UI for the frontend, and Nest.js with MongoDB and Mongoose for the backend.

## Backend

The backend of this project is developed using Nest.js, a progressive Node.js framework for building efficient and scalable server-side applications. MongoDB, a NoSQL database, is used as the backend database. Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js, is used for database operations.

### Features

- Docker: The backend components are containerized using Docker, a containerization platform.

## Frontend

The frontend of this project is developed using React.js, a Typescript library for building user interfaces. Material-UI, a popular UI framework for React.js applications, is used to style the components.

### Features

- Chart: The application includes a chart component built using Nivo, a powerful charting library for React.js.
- ChartSwitcher Component: A component is added to allow users to switch between line and bar charts.

## Getting Started

To run the application, follow these steps:

1. Clone the repository
2. Build the Docker containers: `docker-compose build`
3. Run the Docker containers: `docker-compose up -d`
4. Seed sample data to the database: `docker-compose exec backend npm run seed`

## Usage

Once the application is running, you can access the frontend at `http://localhost:3000`. Use the ChartSwitcher component to switch between line and bar charts and explore the data.
