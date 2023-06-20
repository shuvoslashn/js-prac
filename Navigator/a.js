const getBrowserNameAndVersion = () => {
    const navigator = window.navigator;
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;

    return {
        browserName: browserName,
        browserVersion: browserVersion,
    };
};

const browserNameAndVersion = getBrowserNameAndVersion();
console.log(browserNameAndVersion);
