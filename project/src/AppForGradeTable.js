import React from 'react';
import './App.css';

let table;
let firstTime = true;

function getScore() {
    let scores = [];
    do {
        scores.push(prompt('Please input the score or press enter to exit.'));
    } while (scores[scores.length - 1])
    scores.pop();
    firstTime = false;
    return scores;
};

let calculateGrade = (score) => score >= 80 && 'A' || score >= 70 && 'B' || score >= 60 && 'C' || score >= 50 && 'D' || 'F';

function drawTable(scores) {
    let index = 0;
    table = [];
    for (let i of scores) {
        table.push( < tr > < td > { i } < /td><td>{calculateGrade(i)}</td > < button id = { index }
            onClick = {
                (index) => { deleteRow(index) } } > Delete < /button></tr > );
        index++;
    };
    return table;
};

function deleteRow(index) {
    table.splice(index, 1);
    App.render();
}

let App = () =>
    <
    table border = '1'
style = {
        { borderCollapse: 'collapse' } } >
    <
    tr > < th > Score < /th><th>Grade</th > < th > Delete < /th></tr > { firstTime ? drawTable(getScore()) : table } <
    /table>

export default App;