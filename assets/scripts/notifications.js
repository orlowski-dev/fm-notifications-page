const markBtn = document.getElementById('mark-all-as-read--btn');
const unreadNotifications = document.querySelectorAll('article.unread');

markBtn.addEventListener('click', ()=> {
    for (let notification of unreadNotifications) {
        notification.classList.remove('unread');
        notification.querySelector('span.unread').remove();
    }

    document.querySelector('.notification-badge').innerText = '0';
});