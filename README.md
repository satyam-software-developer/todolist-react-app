## TodoList React App

Todolist app built using react for frontend web development.

1. Demo: https://drive.google.com/file/d/1Lpbq0tLxkisP1Uj4vZsvDGDJlDhMG5d_/view?usp=sharing
2. Hosted link:  https://satyam-software-developer.github.io/todolist-react-app/

# Todo List

This is a simple Todo List application built using React. It allows users to add, edit, and delete tasks, mark tasks as completed, and filter tasks based on their completion status.

# Project Overview

This is a simple TodoList application built using React, which allows users to:

- Fetch to-do items from an API.
- Add a new to-do item (dummy POST request).
- Update an existing to-do item (dummy PUT request).
- Delete a to-do item (dummy DELETE request).
  The app uses the JSONPlaceholder API for fetching, adding, updating, and deleting todos. Please note that all POST, PUT, and DELETE requests are dummies and do not actually persist on the server.

# Features

Add tasks: Users can enter new tasks in the input field and click the "Add" button to add them to the list.

- Edit tasks: Users can click the edit icon next to a task to edit its title.
- Delete tasks: Users can click the delete icon next to a task to delete it from the list.
- Mark tasks as completed: Users can check the checkbox next to a task to mark it as completed.
- Complete all tasks: Users can click the "Complete all tasks" link to mark all tasks as completed.
- Delete completed tasks: Users can click the "Delete Comp tasks" link to delete all completed tasks.
- Filter tasks: Users can use the dropdown menu to filter tasks based on their completion status.
- Task count: The total number of tasks and the number of completed tasks are displayed.

## How to Run the Project

# Prerequisites

Node.js and npm installed
Basic understanding of React and JavaScript

# Setup Instructions

1. Clone the repository:
   git clone https://github.com/satyam-software-developer/todolist-react-app.git
   cd todolist-react-app
2. Install dependencies:
   npm install
3. Run the project:
   npm start
   This will start the development server and open the app in your browser at http://localhost:3000.

## Folder Structure

todolist-react-app/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── TodoList.js // Component to render a list of todos
│ │ ├── TodoItem.js // Component for each todo item
│ │ └── AddTodo.js // Component to add a new todo
│ ├── services/
│ │ └── api.js // Contains API call functions (GET, POST, PUT, DELETE)
│ ├── App.js // Main application component
│ ├── index.js // Application entry point
│ └── ...
├── .gitignore
├── README.md
└── package.json

# API Endpoints

- Fetch todos: GET /todos
- Add todo: POST /todos
- Update todo: PUT /todos/:id
- Delete todo: DELETE /todos/:id

# Dummy Requests Information

All requests (POST, PUT, DELETE) are dummies. They won't actually modify the server, but you can view the modified data in the app's local state.

# How to Use the App

1. On loading, the app will fetch and display todos from the API.
2. You can add a new todo by filling in the input and clicking the “Add” button.
3. To edit an item, click the "Edit" button next to a to-do item, modify the title, and confirm.
4. To delete a todo, simply click the "Delete" button.

# Dependencies

The following dependencies are used in this project:

- react: ^16.0.0
- react-dom: ^16.0.0
- react-toastify: ^8.0.0
  You can find the complete list of dependencies with their versions in the package.json file.

## API

The application uses the JSONPlaceholder API to fetch and update tasks. The API endpoint used is: https://jsonplaceholder.typicode.com/todos

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

## Acknowledgements

- The Todo List app was created as a learning exercise based on a tutorial or example.
- [React](https://reactjs.org/) - The JavaScript library used for building the user interface.
- [React Toastify](https://fkhadra.github.io/react-toastify/) - A library for displaying toast notifications in React applications.

## Conclusion

This TodoList app demonstrates basic CRUD operations using a dummy API and provides a simple yet effective way to learn how to interact with RESTful APIs in React.

## License

This project is licensed under the MIT License.

## Author

SATYAM KUMAR
