
// localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstname": "Rahul",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounts": {
      "active": 4,
      "newTask": 0,
      "completed": 1,
      "failed": 5
    },
    "tasks": [
      {
        "id":1,
        "taskTitle": "Submit report",
        "taskDescription": "Submit the quarterly financial report",
        "taskDate": "2024-10-22",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id":2,
        "taskTitle": "Team meeting",
        "taskDescription": "Attend the weekly team meeting",
        "taskDate": "2024-10-24",
        "category": "Meetings",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id":3,
        "taskTitle": "Client presentation",
        "taskDescription": "Prepare and deliver client presentation",
        "taskDate": "2024-10-30",
        "category": "Presentations",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
  },
  {
    "id": 2,
    "firstname": "Dip",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 5,
      "failed": 2
    },
    "tasks": [
      {
        "id":1,
        "taskTitle": "Code review",
        "taskDescription": "Review code for the new feature",
        "taskDate": "2024-10-23",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id":2,
        "taskTitle": "Fix bug",
        "taskDescription": "Fix the login bug",
        "taskDate": "2024-10-21",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "id":3,
        "taskTitle": "Deploy uptaskDates",
        "taskDescription": "Deploy the uptaskDates to the production server",
        "taskDate": "2024-10-25",
        "category": "Operations",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
  },
  {
    "id": 3,
    "firstname": "Akash",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "newTask": 0,
      "completed": 2,
      "failed": 6
    },
    "tasks": [
      {
        "id":1,
        "taskTitle": "Design mockup",
        "taskDescription": "Create a mockup for the new dashboard UI",
        "taskDate": "2024-10-26",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id":2,
        "taskTitle": "Team brainstorming",
        "taskDescription": "Attend brainstorming session for next project",
        "taskDate": "2024-10-28",
        "category": "Meetings",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "id":3,
        "taskTitle": "Send invoice",
        "taskDescription": "Send invoice to client for the latest project",
        "taskDate": "2024-10-27",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
  },
  {
    "id": 4,
    "firstname": "Pritam",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "newTask": 0,
      "completed": 7,
      "failed": 5
    },
    "tasks": [
      {
        "id":1,
        "taskTitle": "Write blog post",
        "taskDescription": "Write a new blog post for the company website",
        "taskDate": "2024-10-22",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "id":2,
        "taskTitle": "Schedule social media posts",
        "taskDescription": "Plan and schedule posts for the next week",
        "taskDate": "2024-10-23",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id":3,
        "taskTitle": "Create promotional graphics",
        "taskDescription": "Design graphics for the new product launch",
        "taskDate": "2024-10-25",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Sayan",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 0,
      "completed": 3,
      "failed": 1
    },
    "tasks": [
      {
        "id":1,
        "taskTitle": "UptaskDate documentation",
        "taskDescription": "UptaskDate the project documentation",
        "taskDate": "2024-10-29",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "id":2,
        "taskTitle": "Prepare test cases",
        "taskDescription": "Prepare test cases for the new feature",
        "taskDate": "2024-10-24",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id":3,
        "taskTitle": "Fix server issues",
        "taskDescription": "Resolve server downtime issue",
        "taskDate": "2024-10-20",
        "category": "Operations",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
  }
];



export const defaultData =  [
  {
    "id": 1,
    "firstname": "Rahul",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 3,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "id":1,
        "taskTitle": "Submit report",
        "taskDescription": "Submit the quarterly financial report",
        "taskDate": "2024-10-22",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id":2,
        "taskTitle": "Team meeting",
        "taskDescription": "Attend the weekly team meeting",
        "taskDate": "2024-10-24",
        "category": "Meetings",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id":3,
        "taskTitle": "Client presentation",
        "taskDescription": "Prepare and deliver client presentation",
        "taskDate": "2024-10-30",
        "category": "Presentations",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
  },
  {
    "id": 2,
    "firstname": "Akash",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "id":1,
        "taskTitle": "Code review",
        "taskDescription": "Review code for the new feature",
        "taskDate": "2024-10-23",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id":2,
        "taskTitle": "Fix bug",
        "taskDescription": "Fix the login bug",
        "taskDate": "2024-10-21",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "id":3,
        "taskTitle": "Deploy uptaskDates",
        "taskDescription": "Deploy the uptaskDates to the production server",
        "taskDate": "2024-10-25",
        "category": "Operations",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
  },
  {
    "id": 3,
    "firstname": "Dip",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "id":1,
        "taskTitle": "Design mockup",
        "taskDescription": "Create a mockup for the new dashboard UI",
        "taskDate": "2024-10-26",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id":2,
        "taskTitle": "Team brainstorming",
        "taskDescription": "Attend brainstorming session for next project",
        "taskDate": "2024-10-28",
        "category": "Meetings",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "id":3,
        "taskTitle": "Send invoice",
        "taskDescription": "Send invoice to client for the latest project",
        "taskDate": "2024-10-27",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
  },
  {
    "id": 4,
    "firstname": "Pritam",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "id":1,
        "taskTitle": "Write blog post",
        "taskDescription": "Write a new blog post for the company website",
        "taskDate": "2024-10-22",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "id":2,
        "taskTitle": "Schedule social media posts",
        "taskDescription": "Plan and schedule posts for the next week",
        "taskDate": "2024-10-23",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id":3,
        "taskTitle": "Create promotional graphics",
        "taskDescription": "Design graphics for the new product launch",
        "taskDate": "2024-10-25",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Sayan",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "id":1,
        "taskTitle": "UptaskDate documentation",
        "taskDescription": "UptaskDate the project documentation",
        "taskDate": "2024-10-29",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "id":2,
        "taskTitle": "Prepare test cases",
        "taskDescription": "Prepare test cases for the new feature",
        "taskDate": "2024-10-24",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "id":3,
        "taskTitle": "Fix server issues",
        "taskDescription": "Resolve server downtime issue",
        "taskDate": "2024-10-20",
        "category": "Operations",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
  }
];
  
const admin = [
    {
      "id": 1,
      "firstname": "Admin",
      "email": "admin@me.com",
      "password": "123"
    }
];
  

export const setLocalStorage = (defaultData) => { 
        localStorage.setItem('employees', JSON.stringify(defaultData));
        localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || []; // If you are using admin data
  return { employees, admin };
};

