# T**ask Management API**

This is an API developed in Node.js with the Express framework and the Sequelize ORM for managing tasks in a company. The API uses the SQLite database to store task information.

The API follows the MVC (Model-View-Controller) pattern for code structuring. The API routes have been implemented using the REST (Representational State Transfer) standard.

## **Installation**

1. Clone this repository:
    
    ```
    git clone https://github.com/AlexsanderKevin/TASKS-backend
    ```
    
2. Install the dependencies:
    
    ```
    npm install
    ```
    
3. Start the server:
    
    ```
    npm start    
    ```
    

## **Routes**

### **Tasks**

- **`GET /tasks`** - Returns all tasks.
- **`GET /tasks/:id`** - Returns a specific task by ID.
- **`POST /tasks`** - Creates a new task.
- **`PUT /tasks/:id`** - Updates an existing task by ID.
- **`DELETE /tasks/:id`** - Deletes an existing task by ID.

### **Projects**

- **`GET /projects`** - Returns all projects.
- **`GET /projects/:id`** - Returns a specific project by ID.
- **`POST /projects`** - Creates a new project.
- **`PUT /projects/:id`** - Updates an existing project by ID.
- **`DELETE /projects/:id`** - Deletes an existing project by ID.

### **Releases**

- **`GET /releases`** - Returns all releases.
- **`GET /releases/:id`** - Returns a specific release by ID.
- **`POST /releases`** - Creates a new release.
- **`PUT /releases/:id`** - Updates an existing release by ID.
- **`DELETE /releases/:id`** - Deletes an existing release by ID.

### **Sprints**

- **`GET /sprints`** - Returns all sprints.
- **`GET /sprints/:id`** - Returns a specific sprint by ID.
- **`POST /sprints`** - Creates a new sprint.
- **`PUT /sprints/:id`** - Updates an existing sprint by ID.
- **`DELETE /sprints/:id`** - Deletes an existing sprint by ID.

### **Task Types**

- **`GET /types`** - Returns all task types.
- **`GET /types/:id`** - Returns a specific task type by ID.
- **`POST /types`** - Creates a new task type.
- **`PUT /types/:id`** - Updates an existing task type by ID.
- **`DELETE /types/:id`** - Deletes an existing task type by ID.

## **Technologies Used**

- Node.js
- Express
- Sequelize
- SQLite

## **Contribution**

Contributions are welcome! Feel free to open an issue or send a pull request with improvements for the API.
