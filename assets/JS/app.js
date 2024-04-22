// JavaScript delete tags
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to confirm delete button
    document.getElementById('confirmDeleteBtn').addEventListener('click', function () {
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


// JavaScript remove collapsed on mobile
window.addEventListener('DOMContentLoaded', function () {
    // Function to check viewport width and toggle 'collapsed' class
    function toggleSidebarCollapse() {
        var sidebar = document.getElementById('sidebar');
        if (window.innerWidth < 991) {
            sidebar.classList.remove('collapsed');
        } else {
            sidebar.classList.add('collapsed');
        }
    }

    // Initial call to set the initial state
    toggleSidebarCollapse();

    // Listen for window resize events to update sidebar collapse state
    window.addEventListener('resize', toggleSidebarCollapse);
});