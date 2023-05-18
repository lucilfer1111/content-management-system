// Function to create a component
function createComponent(componentType) {
    switch (componentType) {
      case 'heading':
      case 'text':
      case 'link':
        var componentContent = $('#' + componentType + 'Content').val();
        // Perform AJAX request to send data to the backend (add.php)
        $.ajax({
          url: 'add.php',
          method: 'POST',
          data: {
            componentType: componentType,
            componentContent: componentContent
          },
          success: function(response) {
            // Refresh components
            getComponents();
          }
        });
        break;
      case 'editor':
        // Perform AJAX request to send data to the backend (add.php)
        $.ajax({
          url: 'add.php',
          method: 'POST',
          data: {
          componentType: componentType,
          componentContent: editor.html.get()
          },
          success: function(response) {
          // Refresh components
          getComponents();
          }
          });
          break;
          default:
          break;
          }
          }
          
          // Function to get components from the backend (get.php)
          function getComponents() {
          $.ajax({
          url: 'get.php',
          method: 'GET',
          dataType: 'json',
          success: function(response) {
          // Clear existing components
          $('#components').empty();
          // Iterate over the response and append components to the container
          $.each(response, function(index, component) {
          var componentHTML = '<div class="col-6 mb-4">' + component.content + '</div>';
          $('#components').append(componentHTML);
          });
          }
          });
          }
          
          // Function to toggle the toolbar visibility
          function toggleToolbar() {
          $('#toolbar').toggle();
          }
          
          // Function to show the modal for a specific component type
          function showModal(componentType) {
          $('#' + componentType + 'Modal').modal('show');
          }
          
          // Initialize the Froala Editor
          var editor = new FroalaEditor('#editor', {
          // Configuration options for the editor
          });
          
          // Get components on page load
          getComponents();  