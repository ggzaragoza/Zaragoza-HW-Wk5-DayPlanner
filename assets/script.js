var today = moment();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

var textarea9A = $('#9A');
var textarea10A = $('#10A');
var textarea11A = $('#11A');
var textarea12P = $('#12P');
var textarea1P = $('#1P');
var textarea2P = $('#2P');
var textarea3P = $('#3P');
var textarea4P = $('#4P');
var textarea5P = $('#5P');

var currentHour = moment().hour();

function colorCode() {
    if (currentHour === 9) {
        textarea9A.addClass("present");
    } else if (currentHour < 9) {
        textarea9A.addClass("future");
    } else {
        textarea9A.addClass("past");
    }

    if (currentHour === 10) {
        textarea10A.addClass("present");
    } else if (currentHour < 10) {
        textarea10A.addClass("future");
    } else {
        textarea10A.addClass("past");
    }

    if (currentHour === 11) {
        textarea11A.addClass("present");
    } else if (currentHour < 11) {
        textarea11A.addClass("future");
    } else {
        textarea11A.addClass("past");
    }

    if (currentHour === 12) {
        textarea12P.addClass("present");
    } else if (currentHour < 12) {
        textarea12P.addClass("future");
    } else {
        textarea12P.addClass("past");
    }

    if (currentHour === 13) {
        textarea1P.addClass("present");
    } else if (currentHour < 13) {
        textarea1P.addClass("future");
    } else {
        textarea1P.addClass("past");
    }

    if (currentHour === 14) {
        textarea2P.addClass("present");
    } else if (currentHour < 14) {
        textarea2P.addClass("future");
    } else {
        textarea2P.addClass("past");
    }

    if (currentHour === 15) {
        textarea3P.addClass("present");
    } else if (currentHour < 15) {
        textarea3P.addClass("future");
    } else {
        textarea3P.addClass("past");
    }

    if (currentHour === 16) {
        textarea4P.addClass("present");
    } else if (currentHour < 16) {
        textarea4P.addClass("future");
    } else {
        textarea4P.addClass("past");
    }

    if (currentHour === 17) {
        textarea5P.addClass("present");
    } else if (currentHour < 17) {
        textarea5P.addClass("future");
    } else {
        textarea5P.addClass("past");
    }
};

$(document).ready(function () {
    colorCode();
});

$('.description').each(function() {
    var eventTime = $(this).attr("id");
    $(this).val(localStorage.getItem(eventTime)); 
});

var saveButton = $('.saveBtn');
var descriptionArea = $('.description');

saveButton.each(function() {
    $(this).on("click", function() {
        var eventTime = $(this).prev().attr("id");
        var eventDescription = $(this).prev().val();
        localStorage.setItem(eventTime, eventDescription);
    })
});