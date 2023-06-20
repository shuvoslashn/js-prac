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

openNewWindow('https://www.example.com', 800, 600);
