# Chart Project

This project is a web application built with React.js and Material-UI for the frontend, and Nest.js with MongoDB and Mongoose for the backend.

## Backend

The backend of this project is developed using Nest.js, a progressive Node.js framework for building efficient and scalable server-side applications. MongoDB, a NoSQL database, is used as the backend database. Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js, is used for database operations.

### Features

- Docker: The backend components are containerized using Docker, a containerization platform.

### API Endpoints

1. **GET /statistics/numeric-data**

   - **Description:** This endpoint fetches numeric data from the database based on a specified date filter.
   - **Method:** `GET`
   - **Query:**
     - `dateFrom` (optional): Start date for the data filter.
     - `dateTo` (optional): End date for the data filter.

2. **GET /statistics/random-data**

   - **Description:** This endpoint generates and returns random numeric data. It's useful for testing or scenarios where real data is not needed.
   - **Method:** `GET`

3. **POST /statistics**

   - **Description:** This endpoint is used to insert new statistics into the database.
   - **Method:** `POST`
   - **Request Body:** Expects data in the format specified by `InsertStatisticsDto`.

## Frontend

The frontend of this project is developed using React.js, a Typescript library for building user interfaces. Material-UI, a popular UI framework for React.js applications, is used to style the components.

### Features

- **Chart:** The application includes a chart component built using Nivo, a powerful charting library for React.js.
- **ChartSwitcher Component:** A component is added to allow users to switch between line and bar charts.
- **Date Filter:** A date filter is integrated into the frontend, enabling users to filter data based on date ranges. This feature enhances the data exploration capabilities by querying the backend database accordingly.

## Getting Started

To run the application, follow these steps:

1. Clone the repository
2. Build the Docker containers from root folder: `docker-compose build`
3. Run the Docker containers from root folder: `docker-compose up -d`
4. Seed sample data to the database: `docker-compose exec backend npm run seed`

## Usage

Once the application is running, you can access the frontend at `http://localhost:3000`. Use the ChartSwitcher component to switch between line and bar charts, and utilize the Date Filter to query the database based on specific date ranges and explore the data effectively.
