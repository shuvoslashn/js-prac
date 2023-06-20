const getBrowserNameAndVersion = () => {
    const navigator = window.navigator;
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;
    return {
        browserName: browserName,
        browserVersion: browserVersion,
    };
};

const displayBrowserNameAndVersion = () => {
    const browserNameAndVersion = getBrowserNameAndVersion();
    const element = document.getElementById('browser-details');
    element.innerHTML = `Your browser is ${browserNameAndVersion.browserName} ${browserNameAndVersion.browserVersion}`;
};

window.onload = displayBrowserNameAndVersion;
