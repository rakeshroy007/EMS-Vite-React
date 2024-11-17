
# Task Management Application

A task management web application that provides a streamlined platform for admins and employees to manage and track tasks through multiple stages. This app enables clear workflows and status updates for assigned tasks, helping both users and admins stay organized and productive. `You can view a live demo` **[here](https://ems-vite-react.netlify.app)**.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)

---

## Project Overview

This application is designed to manage tasks for employees, allowing admins to create tasks and employees to view, accept, complete, or fail tasks as needed. Tasks move through different stages to give a clear view of their progress, and all data is stored locally to persist across sessions. This is a `Vite` + `React` web application, ensuring fast and optimized performance.

## Features

### Admin
- Create tasks and assign them to specific employees.
- View the status of all tasks: New Task, Active Task, Completed, and Rejected.

### Employee
- Accept or reject tasks that are in the `newTask` stage.
- Move tasks through various stages: `Active`, `Completed`, or `Failed`.
- Get a clear count of tasks by status in the dashboard.

### General
- **Task Stages**: Tasks progress through `newTask`, `active`, `completed`, and `failed`.
- **Persistent Data**: Uses `localStorage` to retain task data and state.
- **Dynamic UI**: Tasks display based on their current stage, providing intuitive task management.
- **Notifications**: Displays messages like "No tasks available" when task lists are empty.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** and **npm**
- **React** and **Context API** for state management

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rakeshroy007/EMS-Vite-React.git
   ```
2. Navigate into the project directory:
   ```bash
   cd EMS-Vite-React
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm run dev
   ```

## Usage

### Task Flow Overview

1. **New Task**: Admin assigns a new task; employees can either accept or reject.
2. **Active Task**: Once accepted, tasks are marked as `active`, signaling work is in progress.
3. **Complete Task**: Employees mark tasks as `complete` once finished; completed tasks disappear from the active list.
4. **Rejected Task**: Tasks that are rejected or cannot be completed are marked as `failed`.

### Task Status Update Example

To handle task stages in code:

- `handleYesButton`: Moves a task to `active` status.
- `handleAcceptButton`: Marks a task as `completed`.
- `handleRejectButton`: Moves the task to `failed` status.
- `handleCompleteButton`: Completes the task and removes it from the list.

## Tech Stack

- **Frontend**: React, CSS (for styling), Tailwind CSS
- **Data Storage**: LocalStorage API (for persistent data)
- **State Management**: React Context API
- **Build Tool**: Vite

## Default Users

- **Admin**: `admin@me.com` / `123`
- **Employees**: `employee1@example.com` through `employee5@example.com`, password for each is `123`

## Future Enhancements

- **Backend Integration**: Implement a backend server to manage tasks across multiple devices and enable more robust data handling.
- **Notifications**: Push notifications to alert users of new tasks or updates.
- **Advanced Filtering**: Enable filtering and sorting tasks by different attributes.
- **User Authentication**: Secure the platform with login and role-based access.
  
## Screenshots
![Screenshot (94)](https://github.com/user-attachments/assets/31ade753-0a15-4da3-80bc-c703d80abb06)
<br><br><br>
![Screenshot (95)](https://github.com/user-attachments/assets/16861ccd-099a-4e4c-a670-1a1933c17022)


## License

This project is licensed under the MIT License.
