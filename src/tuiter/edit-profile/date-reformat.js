const DateReformat = (dateString) => {
     const dateArray = dateString.split('-');
     let year = dateArray[0];
     let month = dateArray[1];
     let day = dateArray[2];
     return month + '/' + day + '/' + year;
}

export default DateReformat;