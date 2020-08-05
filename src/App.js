import React from 'react';
import './App.css';
import Header from './Header.js';
import images from './CreatureData.js';
import CreatureList from './CreatureList';

const keywords = [
  'narwhal',
  'rhino',
  'unicorn',
  'unilego',
  'triceratops',
  'markhor',
  'mouflon',
  'addax',
  'chameleon',
  'lizard',
  'dragon',
]

class App extends React.Component {
  state = { keyword: '' }
  handleKeywordType = (e) => {
    const keyword = e.target.value;

    this.setState({keyword})
  }
  render() {
    const filteredKeywords = images.filter(creature => creature.keyword === this.state.keyword || !this.state.keyword);
    //I have to credit Josh on this one ^^
    return (
      <body>
        <Header />
        <main id="select">
          <select onChange={this.handleKeywordType}>
            <optgroup label="Keyword">
              {
                keywords.map(keyword => <option key={keyword} value={keyword}>{keyword}</option>)
              }
            </optgroup>
          </select>
        </main>
        <CreatureList creatures={filteredKeywords} />        
    </body>
    );
  }
}

export default App;