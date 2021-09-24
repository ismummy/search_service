###### **Tr1pp Coding Challenge**

####Problem Statement
- Create a service called SEARCH
    - Create an endpoint named search
    - Endpoint should accept searchKeywords and bring related results from the database
    collection (admin_activities_log) on the following fields: phone_number, last_name,
    first_name, state, job_title, statusCode
    - Emit all search results to logger service in form of an event

####Solution Approach
- Create an endpoint named search, should accept searchKeywords and bring related results from the database
    - I created a GET endpoint that returns the list of record that match the regex value of the searchKeayboard from the defined attributespaginated data (https://tr1pp-gateway.herokuapp.com/search?searchKeayboard=ola) or (https://tr1pp-search-service.herokuapp.com?searchKeayboard=ola)
    
- Emit all search results to logger service in form of an event
    - I publish the result of the seach to `LOGGER_EVENT` using RABITTMQ/AMQ package
    
####To run
- Clone the repo
- Run composer install
- Make a copy of .env from .env.copy
- Start the server npm run dev
