var countDown = function (number) {
    if (number < 0) {
        console.log("All Done");
        return;
    }
    console.log(number);
    number--;
    countDown(number);
};
countDown(3);
