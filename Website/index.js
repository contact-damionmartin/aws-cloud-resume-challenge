document.addEventListener('DOMContentLoaded', function() {
    // Replace with your actual API Gateway endpoint URL
    const apiUrl = 'https://kty0w2hzh5.execute-api.us-east-1.amazonaws.com/dev';
    fetch(apiUrl)
    .then(response => response.text())  // Assuming the response is plain text
    .then(viewCount => {
        // Update the text content of the element with the ID 'viewCount'
        const viewCountElement = document.getElementById('viewCount');
        if (viewCountElement) {
            viewCountElement.textContent = `This page has been viewed ${viewCount} times.`;
        }
    })
    .catch(error => {
        console.error('Error fetching view count:', error);
        const viewCountElement = document.getElementById('viewCount');
        if (viewCountElement) {
            viewCountElement.textContent = 'Error loading view count.';
        }
    });
});