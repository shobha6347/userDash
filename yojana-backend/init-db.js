const fs = require('fs');
const path = require('path');
const db = require('./db');

// Read the SQL file
const schemaPath = path.join(__dirname, 'schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf8');

// Split the schema into separate statements
const statements = schema
  .split(';')
  .filter(statement => statement.trim() !== '');

// Execute each SQL statement
const executeStatements = async () => {
  try {
    console.log('🔄 Initializing database...');
    
    for (const statement of statements) {
      await new Promise((resolve, reject) => {
        db.query(statement, (err, results) => {
          if (err) {
            console.error(`❌ Error executing SQL: ${statement.substring(0, 100)}...`);
            reject(err);
          } else {
            console.log(`✅ Executed SQL: ${statement.substring(0, 50)}...`);
            resolve(results);
          }
        });
      });
    }
    
    console.log('✅ Database initialization completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    process.exit(1);
  }
};

// Run the initialization
executeStatements(); 