# API Contract: User Management

## Base URL
`https://api.example.com/v1`

## Resource: User

### User Object Structure
```json
{
  "id": "string (UUID)",
  "username": "string",
  "email": "string (email format)",
  "created_at": "string (ISO 8601 datetime)",
  "updated_at": "string (ISO 8601 datetime)"
}