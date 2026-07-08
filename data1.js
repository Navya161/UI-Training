let data2  = [
  {
    "id": 1,
    "department": "Engineering",
    "budget": 250000.00,
    "location": {
      "building": "Tech Tower A",
      "floor": 4,
      "room": 402
    },
    "manager": {
      "name": "Alice Smith",
      "email": "alice.smith@example.com"
    },
    "employees": [
      {
        "employeeId": 101,
        "name": "John Doe",
        "role": "Frontend Developer",
        "skills": ["JavaScript", "React", "CSS"]
      },
      {
        "employeeId": 102,
        "name": "Jane Doe",
        "role": "Backend Developer",
        "skills": ["Python", "Django", "PostgreSQL"]
      }
    ]
  },
  {
    "id": 2,
    "department": "Marketing",
    "budget": 120000.50,
    "location": {
      "building": "Creative Plaza",
      "floor": 2,
      "room": 215
    },
    "manager": {
      "name": "Bob Jones",
      "email": "bob.jones@example.com"
    },
    "employees": [
      {
        "employeeId": 201,
        "name": "Charlie Brown",
        "role": "SEO Specialist",
        "skills": ["Google Analytics", "Copywriting"]
      }
    ]
  }
]
console.log(data2[0].manager.email);