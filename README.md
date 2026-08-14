# QA Automation Portfolio

A hands-on QA Automation portfolio demonstrating UI automation, API automation, performance testing, and CI/CD integration.

## Tech Stack

- Playwright
- TypeScript
- REST API Testing
- k6
- GitHub Actions
- Node.js

## Projects

### 1. Playwright UI Automation

Location:

`playwright-ui/`

Highlights:

- Playwright with TypeScript
- Page Object Model
- Reusable page methods
- Functional UI test scenarios
- Automated execution with GitHub Actions
- HTML report artifact

Example scenarios:

- Add Todo
- Edit Todo
- Complete Todo
- Delete Todo
- Filter Active
- Filter Completed
- Clear Completed

---

### 2. Playwright API Automation

Location:

`playwright-api/`

Coverage:

- GET
- POST
- PUT
- PATCH
- DELETE
- Positive scenarios
- Negative scenarios
- Dynamic test data
- API response validation
- API lifecycle flow

Example validations:

- HTTP status codes
- Response body fields
- JSON structure
- Invalid resource handling

---

### 3. k6 Performance Testing

Location:

`k6-performance/`

Coverage:

- Smoke Test
- Load Test
- Stress Test
- Spike Test
- Soak Test

Performance thresholds include:

- p95 response time
- HTTP failure rate
- Functional check success rate

Example:

```text
p95 < 500 ms
HTTP failure rate < 1%
Checks pass rate > 99%