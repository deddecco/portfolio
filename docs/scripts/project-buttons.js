// these buttons correspond to repositories
const gettingStartedButton = document.getElementById("getting-started-button");
const codingChallengesButton = document.getElementById("coding-challenges-button");
const htmlProjectsButton = document.getElementById("html-projects-button");
const adventOfCodeButton = document.getElementById("advent-of-code-button");
const cssWithDaveGrayButton = document.getElementById("css-with-dave-gray-button");
const htmlWithDaveGrayButton = document.getElementById("html-with-dave-gray-button");
const dataStructuresButton = document.getElementById("data-structures-button");
const programmingLanguagesButton = document.getElementById("programming-languages-button");

// these event listeners listen for a click on their buttons. if you click on a given button, it takes you to my
// repository with the code I am describing

// this was when I was in high school-- my very first code
gettingStartedButton.addEventListener("click", () => {
    window.location.href = "https://github.com/deddecco/2017-18-AP-Comp-Sci";
});

// this was written in 2022-23, to shore up fundamental skills/gain a lot more practice
codingChallengesButton.addEventListener("click", () => {
    window.location.href = "https://github.com/deddecco/coding-challenges";
});

// this was done to gain exposure to HTML, in 2022-- leading to my interest to take this class
htmlProjectsButton.addEventListener("click", () => {
    window.location.href = "https://github.com/deddecco/HTML-projects";
});

// I took part in Advent of Code
adventOfCodeButton.addEventListener("click", () => {
    window.location.href = "https://github.com/deddecco/AdventOfCode/tree/master/src/main/java";
});

// this is code from following along with this tutorial: https://www.youtube.com/watch?v=OXGznpKZ_sA&t=16s
cssWithDaveGrayButton.addEventListener("click", () => {
    window.location.href = "https://github.com/deddecco/LearningCSS";
});

// this is code from following along with this tutorial: https://www.youtube.com/watch?v=mJgBOIoGihA
htmlWithDaveGrayButton.addEventListener("click", () => {
    window.location.href = "https://github.com/deddecco/HTML-projects";
});

// this is code I wrote in 385 with Brian-Thomas Rogers
dataStructuresButton.addEventListener("click", () => {
    window.location.href = "https://github.com/deddecco/CSC385-Data-Struct-Algo";
});

// this is code I wrote in 385 with Svet Braynov
programmingLanguagesButton.addEventListener("click", () => {
    window.location.href = "https://github.com/deddecco/CSS388-Programming-Languages";
});