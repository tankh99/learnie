### Notes
1. Unable to setup react-query. Got thiserror `TypeError: (0 , _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery) is not a function`. Defaulting to simple API calls instead
  1. Correction: This was because "use client" was not added to the client component!