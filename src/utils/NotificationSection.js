
var allmonths = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
];
var alldates = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
];
var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const NotificationSection = (date) => {
    var timeline = (new Date(date)?.toLocaleDateString() === new Date()?.toLocaleDateString()) && "Today"
    var yesterday = new Date();
    yesterday.setDate(new Date().getDate() - 1);

    if ((new Date(date)?.toLocaleDateString() === new Date()?.toLocaleDateString())) {
        timeline = "Today"
    } else if ((new Date(date)?.toLocaleDateString() === (new Date(yesterday)?.toLocaleDateString()))) {
        timeline = "Yesterday"
    } else {
        timeline = `${mL[new Date(date).getMonth()]} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}` ///new Date(date)
    }

    return timeline
}