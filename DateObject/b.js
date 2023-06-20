const getDayOfTheWeek = () => {
    const date = new Date();
    const dayOfTheWeek = date.getDay();
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    return days[dayOfTheWeek];
};

const today = getDayOfTheWeek();
console.log(today);
