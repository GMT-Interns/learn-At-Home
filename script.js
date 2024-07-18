
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
    const bookContent = document.getElementById('book-content');
    const bookText = document.getElementById('book-text');
    const backButton = document.getElementById('back-button');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Hide all content and book content
            contents.forEach(content => content.style.display = 'none');
            bookContent.style.display = 'none';

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Show the clicked tab's content
            const contentId = tab.getAttribute('data-content');
            document.getElementById(contentId).style.display = 'flex';

            // Add active class to the clicked tab
            tab.classList.add('active');
        });
    });

    // Event listener for back button
    backButton.addEventListener('click', () => {
        bookContent.style.display = 'none';
        document.querySelector('.content[style="display: flex;"]').style.display = 'flex';
    });

    function loadBookContent(bookId) {
        let content = '';
        switch (bookId) {
            case 'english':
                content = '<h2>English Coursework</h2><p>This is the English coursework content...</p>';
                break;
            case 'mathematics':
                content = '<h2>Mathematics Coursework</h2><p>This is the Mathematics coursework content...</p>';
                break;
            case 'chemistry':
                content = '<h2>Chemistry Coursework</h2><p>This is the Chemistry coursework content...</p>';
                break;
            case 'biology':
                content = '<h2>Biology Coursework</h2><p>This is the Biology coursework content...</p>';
                break;
            default:
                content = '<p>Content not found.</p>';
        }

        bookText.innerHTML = content;
        bookContent.style.display = 'block';
        document.querySelector('.content[style="display: flex;"]').style.display = 'none';
    }
});
