# Yojana Backend

Backend server for the Government Yojana Application Portal.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   DB_HOST=localhost
   DB_USER=your_database_user
   DB_PASS=your_database_password
   DB_NAME=governmentscheme
   PORT=5000
   ```
4. Initialize the database:
   ```
   npm run init-db
   ```
   This will create all necessary tables and insert sample data.

## Database Schema

The application uses the following tables:

- `tbl_category`: Stores different categories of yojanas
- `tbl_sub_category`: Stores subcategories for each category
- `tbl_yojana_type`: Stores different types of yojanas
- `tbl_yojana_year`: Stores years for which yojanas are available
- `tbl_applications`: Stores user applications

## API Endpoints

### Categories
- `GET /getCategory` - Get all categories

### Subcategories
- `GET /getSubCategory` - Get all subcategories

### Yojana Types
- `GET /getYojanaType` - Get all yojana types

### Yojana Years
- `GET /getYojanaYears` - Get all yojana years

### Applications
- `POST /submitApplication` - Submit a new application with documents

## Running the Application

Development mode:
```
npm run dev
```

Production mode:
```
npm start
```

## Testing Years Functionality

1. Make sure the database is initialized with `npm run init-db`
2. Start the server with `npm run dev`
3. Open the frontend application and navigate to the Apply Now page
4. The years dropdown should be populated with years from the database
5. Select a year and complete the application form
6. Submit the application to save it with the selected year 