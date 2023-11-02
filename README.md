# README

`npm ci`

2 scripts are provided to run the project:
* `npm run withSetupTeardown`
* `npm run withoutSetupTeardown`


## With Currents - Project with Setup/Teardown
```bash
❯ CURRENTS_PROJECT_ID=$C_PROJ_ID \
CURRENTS_RECORD_KEY=$C_REC_KEY \
CURRENTS_CI_BUILD_ID=with-setup-1 \  
npm run withSetupTeardown
```

```
OUTPUT: (sobs in 500's)

> pw-projects-currents@1.0.0 withSetupTeardown
> npx playwright test --project=projectWithSetupTeardown


Running 5 tests using 2 workers
[setupProject] › global-setup.ts:10:10 › setup › setup for user2
setup for user2
[setupProject] › global-setup.ts:10:10 › setup › setup for user1
setup for user1

 WARNING  Network request 'POST runs' failed: 'Request failed with status code 500'. Next attempt is in 15s (1/3).
 WARNING  Network request 'POST runs' failed: 'Request failed with status code 500'. Next attempt is in 15s (1/3).
[teardownProject] › global-teardown.ts:4:11 › teardown › teardown
teardown step
  5 passed (2.4s)

================================================

Uploading results to Currents.dev...
 WARNING  Network request 'POST runs' failed: 'Request failed with status code 500'. Next attempt is in 30s (2/3).
 WARNING  Network request 'POST runs' failed: 'Request failed with status code 500'. Next attempt is in 30s (2/3).
 WARNING  Network request 'POST runs' failed: 'Request failed with status code 500'. Next attempt is in 30s (2/3).
 WARNING  Network request 'POST runs' failed: 'Request failed with status code 500'. Next attempt is in 1m (3/3).
 WARNING  Network request 'POST runs' failed: 'Request failed with status code 500'. Next attempt is in 1m (3/3).
 WARNING  Network request 'POST runs' failed: 'Request failed with status code 500'. Next attempt is in 1m (3/3).
 ERROR  Unexpected error from the cloud service: {
  message: 'Request failed with status code 500',
  name: 'AxiosError',
  description: undefined,
  number: undefined,
  fileName: undefined,
  lineNumber: undefined,
  columnNumber: undefined,
  stack: 'AxiosError: Request failed with status code 500\n' +
    '    at settle (/Users/user/Dev/pw-projects-currents/node_modules/axios/lib/core/settle.js:19:12)\n' +
    '    at IncomingMessage.handleStreamEnd (/Users/user/Dev/pw-projects-currents/node_modules/axios/lib/adapters/http.js:585:11)\n' +
    '    at IncomingMessage.emit (node:events:525:35)\n' +
    '    at endReadableNT (node:internal/streams/readable:1359:12)\n' +
    '    at processTicksAndRejections (node:internal/process/task_queues:82:21)',
  config: [Object],
  code: 'ERR_BAD_RESPONSE',
  status: 500
}
%O
 WARNING  [currents] Missing reporting instructions for project, skipping: [teardownProject]
 WARNING  [currents] Missing reporting instructions for file, skipping: [teardownProject] › global-teardown.ts
 ERROR  Unexpected error from the cloud service: {
  message: 'Request failed with status code 500',
  name: 'AxiosError',
  description: undefined,
  number: undefined,
  fileName: undefined,
  lineNumber: undefined,
  columnNumber: undefined,
  stack: 'AxiosError: Request failed with status code 500\n' +
    '    at settle (/Users/user/Dev/pw-projects-currents/node_modules/axios/lib/core/settle.js:19:12)\n' +
    '    at IncomingMessage.handleStreamEnd (/Users/user/Dev/pw-projects-currents/node_modules/axios/lib/adapters/http.js:585:11)\n' +
    '    at IncomingMessage.emit (node:events:525:35)\n' +
    '    at endReadableNT (node:internal/streams/readable:1359:12)\n' +
    '    at processTicksAndRejections (node:internal/process/task_queues:82:21)',
  config: [Object],
  code: 'ERR_BAD_RESPONSE',
  status: 500
}
%O
 WARNING  [currents] Missing reporting instructions for project, skipping: [setupProject]
 WARNING  [currents] Missing reporting instructions for file, skipping: [setupProject] › global-setup.ts
 ERROR  Unexpected error from the cloud service: {
  message: 'Request failed with status code 500',
  name: 'AxiosError',
  description: undefined,
  number: undefined,
  fileName: undefined,
  lineNumber: undefined,
  columnNumber: undefined,
  stack: 'AxiosError: Request failed with status code 500\n' +
    '    at settle (/Users/user/Dev/pw-projects-currents/node_modules/axios/lib/core/settle.js:19:12)\n' +
    '    at IncomingMessage.handleStreamEnd (/Users/user/Dev/pw-projects-currents/node_modules/axios/lib/adapters/http.js:585:11)\n' +
    '    at IncomingMessage.emit (node:events:525:35)\n' +
    '    at endReadableNT (node:internal/streams/readable:1359:12)\n' +
    '    at processTicksAndRejections (node:internal/process/task_queues:82:21)',
  config: [Object],
  code: 'ERR_BAD_RESPONSE',
  status: 500
}
%O
 WARNING  [currents] Missing reporting instructions for project, skipping: [projectWithSetupTeardown]
 WARNING  [currents] Missing reporting instructions for file, skipping: [projectWithSetupTeardown] › project-with-setup-teardown/example.spec.ts
Cloud Run Finished

To open last HTML report run:

  npx playwright show-report

```

## Currents - Project without setup/teardown
```bash
❯ CURRENTS_PROJECT_ID=$C_PROJ_ID \
CURRENTS_RECORD_KEY=$C_REC_KEY \
CURRENTS_CI_BUILD_ID=no-setup-1 \
npm run withNoSetupTeardown 
```

```
OUTPUT: (works successfully and report info is in Currents)

> pw-projects-currents@1.0.0 withNoSetupTeardown
> npx playwright test --project=projectWithNoSetupTeardown


Running 2 tests using 2 workers
  2 passed (1.6s)

================================================

Uploading results to Currents.dev...
Cloud Run Finished: https://app.currents.dev/run/5f9b50abb85d7514

================================================


To open last HTML report run:

  npx playwright show-report
```


 ## A consideration:

Playwrights usage of setup and teardowns are considered "tests". As you see they recommend importing `test` and aliasing it to `setup` or `teardown` for the appropriate function.

Because of this you'll notice the number of tests differ between the two runs. 


- `withSetupTeardown`:
  - 5 tests (2 setup + 2 tests + 1 teardown)

- `withoutSetupTeardown`: 
  -  2 tests.

This could be an important distinction for currents customers who are billed by the number of tests.


## Playwright links
https://playwright.dev/docs/test-global-setup-teardown

https://playwright.dev/docs/release-notes#version-131

https://playwright.dev/docs/api/class-testproject#test-project-dependencies
