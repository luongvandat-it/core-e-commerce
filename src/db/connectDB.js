"use strict";
const mongoose = require("mongoose");
require("dotenv").config();

class Database {
  constructor() {
    this.connection = null;
  }

  async connect() {
    if (this.connection) {
      return this.connection;
    }

    try {
      const options = {
        minPoolSize: 1,
        maxPoolSize: 10,
        connectTimeoutMS: 10000,
        serverSelectionTimeoutMS: 5000,
      };

      const connection = await mongoose.connect(
        process.env.MONGODB_URI,
        options
      );

      this.connection = connection;
      console.log("Successfully connected to database");

      return this.connection;
    } catch (error) {
      console.error("Error connecting to database:", error);
      throw error;
    }
  }

  async disconnect() {
    if (!this.connection) {
      return;
    }

    await mongoose.disconnect();
    this.connection = null;
  }
}

module.exports = new Database();

// "use strict"
// const mongoose = require("mongoose");
// const configs = require("../configs/database.config")["db"];

// class Database {
//     constructor() {
//         this.connect();
//     }

//     connect(type = "mongodb") {
//         const databaseTypes = {
//             mongodb: this.connectMongoDB
//         }

//         if (databaseTypes[type]) {
//             try {
//                 databaseTypes[type]()
//             } catch (error) {
//                 console.log("Database connection error: " + error);
//             }
//         } else {
//             console.log("Database type not found");
//         }
//     }

//     connectMongoDB() {
//         mongoose.connect(`mongodb+srv://${configs.username}:${configs.password}@${configs.host}/${configs.name}`, {
//             minPoolSize: configs.minPoolSize,
//             maxPoolSize: configs.maxPoolSize,
//         })
//     }

//     static getInstance() {
//         if (!Database.instance) {
//             Database.instance = new Database();
//         }
//         return Database.instance;
//     }
// }

// module.exports = Database.getInstance();
