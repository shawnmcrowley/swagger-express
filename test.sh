#!/bin/bash

echo "Starting server..."
npm start > /dev/null 2>&1 &
SERVER_PID=$!
sleep 3

echo ""
echo "✅ Server started on http://localhost:3005"
echo ""
echo "📚 Swagger UI: http://localhost:3005/api-docs"
echo "🏠 Dashboard: http://localhost:3005"
echo ""
echo "Testing endpoints..."
echo ""
echo "GET /api/sample:"
curl -s http://localhost:3005/api/sample | jq .
echo ""
echo "GET /api/users:"
curl -s http://localhost:3005/api/users | jq .
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

wait $SERVER_PID
