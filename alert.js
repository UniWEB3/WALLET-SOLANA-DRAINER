const notificationContainer = document.getElementById('alert-container');
const NOTIFICATION_TYPES = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
};

function addNotification(type, text) {
    const newNotification = document.createElement('div');
    newNotification.classList.add('notification', `notification-${type}`);

    const innerNotification = `<strong>${type}:</strong> ${text}`;

    newNotification.innerHTML = innerNotification;

    document.getElementById('alert-container').appendChild(newNotification);

    return newNotification;
}

function removeNotification(notification, delay = 3000) {
    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => {
            document.getElementById('alert-container').removeChild(notification);
        }, 500);
    }, delay);
}
