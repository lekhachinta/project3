# Blog API

This is a simple RESTful API for managing blog posts, built with Node.js, Express, and MongoDB.

## Endpoints

### Create a new post
- **URL**: `/posts`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "title": "My First Blog Post",
    "content": "This is the content of the post.",
    "author": "Your Name"
  }
