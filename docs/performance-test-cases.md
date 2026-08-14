# Performance Test Cases

## Performance Objectives

Validate application responsiveness, stability, and reliability under different load conditions.

## Common Thresholds

- p95 response time < 500 ms
- HTTP failure rate < 1%
- Check success rate > 99%

## PT-001 Smoke Test

Objective:

Validate that the performance script and target system work correctly under minimal load.

Load:

- 1 VU
- 10 seconds

Expected:

- HTTP 200
- p95 < 500 ms
- Error rate < 1%

## PT-002 Load Test

Objective:

Validate system behavior under expected user load.

Load Profile:

- Ramp to 5 VUs
- Ramp to 10 VUs
- Ramp to 20 VUs
- Ramp down to 0

Expected:

- p95 < 500 ms
- Error rate < 1%
- No significant degradation

## PT-003 Stress Test

Objective:

Identify the point where system performance begins to degrade.

Example Load:

- 20 VUs
- 50 VUs
- 100 VUs
- 200 VUs

Expected:

- Identify capacity limit
- Capture error rate increase
- Confirm recovery after load reduction

## PT-004 Spike Test

Objective:

Validate system behavior when traffic increases suddenly.

Example:

10 VUs → 100 VUs within seconds

Expected:

- Application remains available
- Error rate stays within acceptable range
- System recovers after spike

## PT-005 Soak Test

Objective:

Validate long-term system stability.

Example:

20 VUs for 30 minutes or longer

Expected:

- Stable response time
- No continuous performance degradation
- No increasing error rate