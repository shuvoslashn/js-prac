// problem a

const getDayOfTheWeek = (dateParam) => {
    const date = new Date(dateParam);
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

const yourDay = getDayOfTheWeek('2023-06-23');
console.log(yourDay);
