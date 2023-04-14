function notification(text, className, timeout, showCloseButton) {
  const notificationDiv = document.createElement('div');
  notificationDiv.classList.add('notification');
  if (className) {
    notificationDiv.classList.add(className);
  }

  const notificationText = document.createElement('p');
  notificationText.textContent = text;

  notificationDiv.appendChild(notificationText);

  if (showCloseButton === undefined || showCloseButton === true) {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.addEventListener('click', () => {
      notificationDiv.remove();
    });
    notificationDiv.appendChild(closeButton);
  }

  document.body.insertBefore(notificationDiv, document.body.firstChild);

  if (timeout) {
    setTimeout(() => {
      notificationDiv.remove();
    }, timeout);
  }
}


notification('Hello world!', 'success', 5000, false);