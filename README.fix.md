# Fix for 404 Errors with React Router in Nginx

## Issue Description

The application was experiencing 404 errors when navigating to client-side routes like `/add-customer`. This was happening because Nginx was trying to find physical files at these paths instead of serving the index.html file and letting React Router handle the routing.

Error from logs:
```
2025-07-25T15:17:52.585852296Z 2025/07/25 15:17:52 [error] 30#30: *1 open() "/usr/share/nginx/html/add-customer" failed (2: No such file or directory), client: 172.19.0.1, server: localhost, request: "GET /add-customer HTTP/1.1", host: "localhost:3001", referrer: "http://localhost:3001/customers"
```

## Solution

The solution was to create a custom Nginx configuration file (`nginx.conf`) and modify the Dockerfile to use this configuration. The key changes were:

1. Created a custom `nginx.conf` file with the following configuration:
   - Configured Nginx to serve static assets directly
   - Added a `try_files` directive to serve index.html for routes that don't match physical files
   - Set up error pages to redirect to index.html

2. Modified the Dockerfile to use the custom configuration:
   - Uncommented and updated the line that copies the nginx.conf file to the container

## How It Works

The key part of the solution is the `try_files` directive in the Nginx configuration:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

This tells Nginx to:
1. First try to serve the requested URI as a file
2. If that fails, try to serve it as a directory
3. If that also fails, serve index.html instead

This allows the React Router to handle client-side routing, even when users directly access routes like `/add-customer` or refresh the page while on these routes.

## Testing

To test this solution:
1. Rebuild the Docker image: `docker build -t bee-web-service .`
2. Run the container: `docker run -p 3001:80 bee-web-service`
3. Navigate to http://localhost:3001/customers
4. Click on links to navigate to other routes, such as `/add-customer`
5. Verify that no 404 errors occur and the application routes correctly

## Additional Notes

- This is a common issue with single-page applications (SPAs) deployed on Nginx
- The solution ensures that all routes defined in React Router will work correctly
- Static assets in the `/assets/` directory are still served directly from the file system with appropriate caching headers