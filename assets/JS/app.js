  // JavaScript
  document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to confirm delete button
    document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
      // Find and remove the parent element of the clicked delete button
      var parent = document.querySelector('.search-tag');
      if (parent) {
        parent.remove();
      }
      // Close the modal
      var modal = bootstrap.Modal.getInstance(document.getElementById('deleteConfirmationModal'));
      modal.hide();
    });
  });