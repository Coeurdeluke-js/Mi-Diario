document.addEventListener('DOMContentLoaded', () => {
    const entries = document.querySelectorAll('.diary-entry');

    entries.forEach(entry => {
        const likeButton = entry.querySelector('.like-button');
        const commentButton = entry.querySelector('.comment-button');
        const commentsContainer = entry.querySelector('.comments-container');
        const commentForm = entry.querySelector('.comment-form');
        const commentTextarea = entry.querySelector('.comment-textarea');
        const likeIcon = likeButton.querySelector('i');
        const likeCount = likeButton.querySelector('.like-count');

        let likesCount = 0;

        // Like button animation and toggle
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
            
            if (likeButton.classList.contains('liked')) {
                likeIcon.classList.remove('far');
                likeIcon.classList.add('fas');
                likesCount++;
            } else {
                likeIcon.classList.remove('fas');
                likeIcon.classList.add('far');
                likesCount--;
            }

            likeCount.textContent = likesCount;
        });

        // Comment section toggle
        commentButton.addEventListener('click', () => {
            commentForm.classList.toggle('active');
            commentsContainer.style.display = 
                commentsContainer.style.display === 'none' ? 'block' : 'none';
        });

        // Comment submission
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const commentText = commentTextarea.value.trim();
            
            if (commentText) {
                addComment(entry, commentText);
                commentTextarea.value = '';
                commentForm.classList.remove('active');
            }
        });
    });

    function addComment(entry, commentText) {
        const commentsList = entry.querySelector('.comments-list');
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment-item');
        commentElement.innerHTML = `
            <div class="comment-header">
                <i class="fas fa-user-circle"></i>
                <span class="username">Anonymous</span>
            </div>
            <p>${escapeHTML(commentText)}</p>
            <div class="comment-footer">
                <span class="timestamp">${new Date().toLocaleString()}</span>
            </div>
        `;

        commentsList.appendChild(commentElement);
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag));
    }
});
