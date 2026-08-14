# Automation Test Plan

## Objective

Validate the functionality of the demo web application and REST APIs using automated tests.

## UI Automation Scope

Tool: Playwright + TypeScript

Scenarios:

| ID | Scenario | Expected Result |
|---|---|---|
| UI-001 | Add Todo | New Todo is displayed |
| UI-002 | Add Multiple Todos | All Todos are displayed |
| UI-003 | Complete Todo | Todo is marked completed |
| UI-004 | Edit Todo | Todo text is updated |
| UI-005 | Delete Todo | Todo is removed |
| UI-006 | Filter Active | Only active Todos are displayed |
| UI-007 | Filter Completed | Only completed Todos are displayed |
| UI-008 | Clear Completed | Completed Todos are removed |

## API Automation Scope

Tool: Playwright APIRequestContext

| ID | Method | Scenario | Expected |
|---|---|---|---|
| API-001 | GET | Get all users | 200 |
| API-002 | GET | Get valid user | 200 |
| API-003 | GET | Get invalid user | 404 |
| API-004 | POST | Create user | 201 |
| API-005 | PUT | Update user | 200 |
| API-006 | PATCH | Partial update | 200 |
| API-007 | DELETE | Delete user | 200 |
| API-008 | Multiple | User lifecycle flow | Requests succeed |