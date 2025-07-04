// your code here

        // Get references to the HTML elements
        const nameInput = document.getElementById('name');
        const yearInput = document.getElementById('year');
        const submitButton = document.getElementById('button');
        const urlDisplay = document.getElementById('url');

        // Base URL for the application
        const baseUrl = 'https://localhost:8080/';

        // Add an event listener to the submit button
        submitButton.addEventListener('click', () => {
            // Get the values from the input fields
            const name = nameInput.value.trim(); // .trim() removes leading/trailing whitespace
            const year = yearInput.value.trim();

            // Initialize an array to hold query parameters
            const params = [];

            // Check if the name input has a value and add it to parameters
            if (name) {
                // encodeURIComponent ensures special characters are correctly encoded for URLs
                params.push(`name=${encodeURIComponent(name)}`);
            }

            // Check if the year input has a value and add it to parameters
            // Also ensure it's a valid number if present
            if (year && !isNaN(year)) {
                params.push(`year=${encodeURIComponent(year)}`);
            }

            // Construct the full URL
            let newUrl = baseUrl;
            if (params.length > 0) {
                // If there are parameters, append them with a '?'
                newUrl += `?${params.join('&')}`;
            }

            // Update the text content of the h3 element with the new URL
            urlDisplay.textContent = newUrl;
        });

        // Optional: Add event listeners to input fields for real-time updates (if desired)
        // This makes the URL update as the user types, not just on button click.
        // If you only want updates on button click, you can remove this section.
        function updateUrlOnInput() {
            const name = nameInput.value.trim();
            const year = yearInput.value.trim();
            const params = [];

            if (name) {
                params.push(`name=${encodeURIComponent(name)}`);
            }
            if (year && !isNaN(year)) {
                params.push(`year=${encodeURIComponent(year)}`);
            }

            let newUrl = baseUrl;
            if (params.length > 0) {
                newUrl += `?${params.join('&')}`;
            }
            urlDisplay.textContent = newUrl;
        }

        nameInput.addEventListener('input', updateUrlOnInput);
        yearInput.addEventListener('input', updateUrlOnInput);

        // Initial update on page load to ensure the h3 element displays the base URL
        // or any pre-filled values if they were present (though not in this example)
        updateUrlOnInput();
