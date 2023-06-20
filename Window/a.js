const openNewWindow = (url, width, height) => {
    const newWindow = window.open(
        url,
        '',
        'width=' + width + ',height=' + height
    );
    if (newWindow) {
        newWindow.focus();
    }
};

openNewWindow('https://www.google.com', 500, 300);
