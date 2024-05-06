document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.getElementById('chat-container');
    const userMessageInput = document.getElementById('user-message');
    const sendButton = document.getElementById('send-btn');

    sendButton.addEventListener('click', function() {
        const message = userMessageInput.value.trim();
        if (message !== '') {
            displayMessage('You', message);
            userMessageInput.value = '';
            // Here you can send the message to a backend server for further processing/storage
        }
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatContainer.appendChild(messageElement);
        // Scroll to the bottom of the chat container
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});
