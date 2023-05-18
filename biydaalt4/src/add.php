
PHP (add.php):
```php
<?php
// Database connection details
$serverName = 'localhost';
$connectionOptions = array(
  'Database' => 'your_database_name',
  'Uid' => 'your_username',
  'PWD' => 'your_password'
);

// Retrieve component details from the AJAX request
$componentType = $_POST['componentType'];
$componentContent = $_POST['componentContent'];

// Create a new connection
$conn = sqlsrv_connect($serverName, $connectionOptions);

// Insert component into the database
$query = "INSERT INTO component (type, content) VALUES (?, ?)";
$params = array($componentType, $componentContent);
$result = sqlsrv_query($conn, $query, $params);

// Close the connection
sqlsrv_close($conn);

if ($result) {
  echo 'Success';
} else {
  echo 'Failed';
}
?>
