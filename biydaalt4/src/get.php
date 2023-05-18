<?php
// Database connection details
$serverName = 'localhost';
$connectionOptions = array(
  'Database' => 'your_database_name',
  'Uid' => 'your_username',
  'PWD' => 'your_password'
);

// Create a new connection
$conn = sqlsrv_connect($serverName, $connectionOptions);

// Retrieve components from the database
$query = "SELECT * FROM component";
$result = sqlsrv_query($conn, $query);
$components = array();

// Fetch components
while ($row = sqlsrv_fetch_array($result, SQLSRV_FETCH_ASSOC)) {
  $components[] = $row;
}

// Close the connection
sqlsrv_close($conn);

// Return components as JSON
echo json_encode($components);
?>
