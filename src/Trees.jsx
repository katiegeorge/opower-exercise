import React from 'react';
import './styles/main.scss';
import Tree from './assets/tree.svg';

function Trees() { 
    const treesSaved = 12; 
    const trees = [...Array(treesSaved)].map((e, i) => <img src={Tree} className="image image__big" />);
  
    return trees;
}

export default Trees;
