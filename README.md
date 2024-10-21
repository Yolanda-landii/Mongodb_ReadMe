# MongoDB Project - Codetribe

## Project Overview
This project demonstrates basic MongoDB operations such as creating a database, collections, and inserting documents into collections. 

### MongoDB Installation and Setup
1. Install MongoDB from the [official MongoDB website](https://www.mongodb.com/try/download/community).
2. Start the MongoDB server by running:
3. Open the MongoDB shell (mongosh):

### Commands to Create and Populate the Database

1. **Create the Database:**
```js
use Codetribe
```

2. **Insert Documents into Collections:**

- Facilitators:
  ```js
  db.Facilitators.insertOne({
    Name: "Vukona Mnisi",
    Location: "TIH",
    Course: "Web and Mobile Development"
  })
  ```

- Trainees:
  ```js
  db.Trainees.insertOne({
    Name: "Yolanda Mabotja",
    Location: "TIH",
    Facilitator: "Vukona Mnisi"
  })
  ```

- Projects:
  ```js
  db.Projects.insertOne({
    Name: "UI Challenge",
    Course: "Web and Mobile Development",
    Lesson: "React"
  })
  ```

3. **Verify Data Insertion:**

### Conclusion
This project demonstrates the basic operations to create a MongoDB database and insert data using the MongoDB shell.
