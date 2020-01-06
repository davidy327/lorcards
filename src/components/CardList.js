import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card.js';
import CARDS from '../cards.json';
import * as FactionDescriptions from '../factionDescriptions';
import '../stylesheets/CardList.css';

export default class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
                  offset: 0,
                  cards: [],
                  maxCards: -1,
                  hasMore: true
                 };
  }

  // used in Infinite Scroll component to load more Card components
  loadMore() {
    let group = this.props.match.params.group;
    let groups = {
      'demacia': 'demacia',
      'noxus': 'noxus',
      'piltoverzaun': 'piltover & zaun',
      'shadowisles': 'shadow isles',
      'ionia': 'ionia',
      'freljord': 'freljord'
    }
    let toLoad = 20; // # of items to load for pagination 
    // Check to see if more cards can be loaded
    // Change hasMore state to false so Infinite Scroll can stop loading more
    if (this.state.offset !== 0 &&
        this.state.cards.length > this.state.maxCards) {
      this.setState({ hasMore: false });
    } else {
      let offset = this.state.offset;
      // Get all cards from the same group
      let newCards = CARDS.filter(card => {
        return card.region.toLowerCase() === groups[group];
      })
      let maxCards = newCards.length;
      // Sort the cards by their cost then add the new cards onto the existing card array
      newCards = newCards.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
      newCards = this.state.cards.concat(newCards.slice(offset, offset + toLoad));
      // If the added cards are the last ones, set hasMore to false
      let hasMore = (offset + toLoad) > maxCards ? false : true; 
      this.setState({ 
        cards: newCards,
        offset: offset + toLoad,
        maxCards: maxCards,
        hasMore: hasMore
      });
    }
  }

  // method to create Card components on the frontend
  showCards() {
    let arrayCards = [];
    // add Card components to a list and return them
    this.state.cards.forEach((card) => {
      arrayCards.push(
        <Card key={card.cardCode} src={'http://d14euvpr8qr6ny.cloudfront.net/cards/' + card.cardCode + '.png'} alt={card.name}/>
      );
    })
    return arrayCards;
  }

  componentDidMount() {
    this.loadMore();
  }

  // need to make functions to sort the cards in some order
  render() {
    let groups = {
      'demacia': 'Demacia',
      'noxus': 'Noxus',
      'piltoverzaun': 'Piltover & Zaun',
      'shadowisles': 'Shadow Isles',
      'ionia': 'Ionia',
      'freljord': 'Freljord'
    };
    let descriptions = {
      'demacia': FactionDescriptions.demacia,
      'noxus': FactionDescriptions.noxus,
      'piltoverzaun': FactionDescriptions.piltover + '\n' + FactionDescriptions.zaun,
      'shadowisles': FactionDescriptions.shadowisles,
      'ionia': FactionDescriptions.ionia,
      'freljord': FactionDescriptions.freljord
    };
    return (
      <div className='container-fluid'>
        <div id='cardsList' className='cards'>
          <div className='d-flex flex-column justify-content-center'>
            <h1 className="groupTitle text-white text-center font-weight-bold pt-2">{groups[this.props.match.params.group]}</h1>
            <p className='text-white pb-2 mx-4'>{descriptions[this.props.match.params.group]}</p>
          </div>
          <InfiniteScroll
            className='d-flex flex-wrap mx-4'
            dataLength={this.state.cards.length}
            next={this.loadMore.bind(this)}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
            scrollableTarget='cardsList'
            style={{overflow: 'hidden'}}
          >
            {this.showCards()}
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}