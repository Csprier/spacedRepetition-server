'use strict';
const LinkedList = require('../LinkedList');

// let test = new LinkedList();

let allQuestions = [
  {
    'word': 'carro',
    'answer': 'car',
  },
  {
    'word': 'perro',
    'answer': 'dog',
  },
  {
    'word': 'casa',
    'answer': 'house',
  },
  {
    'word': 'autopista',
    'answer': 'highway',
  },
  {
    'word': 'biblioteca',
    'answer': 'library',
  },
  {
    'word': 'chaqueta',
    'answer': 'jacket',
  },
  {
    'word': 'pantalones',
    'answer': 'pants',
  },
  {
    'word': 'Sonrojado',
    'answer': 'blushing',
  },
  {
    'word': 'traducir',
    'answer': 'translate',
  },
  {
    'word': 'irrumpir',
    'answer': 'burst',
  }
];

function main(){
  let questions = new LinkedList();
  allQuestions.forEach(item => {
    questions.insertFirst(item);
  });
  return questions;
}

module.exports = main;