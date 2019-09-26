import React from "react";

import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import BotFilter from "../components/BotFilter";


//bots api endpoint
const BOTS_ENDPOINT = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {

  state = {
    bots: [],
    details: {on: false, bot:{}},
    filter: {on: false, botClass: ""}
  };

  componentDidMount(){
    this.fetchBotData();
  }

  //Helper Functions

  fetchBotData(){
    fetch(BOTS_ENDPOINT)
    .then(resp => resp.json())
    .then(data => this.setState({bots: data}))
  }

  handleEnlistClick = (id) => {
    console.log("botid: ", id);
    let bot = this.state.bots.find(bot => bot.id === id);
    bot.enlisted = !bot.enlisted;
    this.setState({bots: [...this.state.bots]});
    console.log(bot);
    this.handleBackClick(); //returns to main page
  }

  handleBotClick = (bot) => {
    this.setState({details: {on: true, bot: bot}});
    // this.setState({details: {on: !this.state.details.on, bot: bot}});
  }

  handleBackClick = (bot) => {
    this.setState({details: {on: false, bot: {}}});
  }


  render() {
    const enlistedBots = this.state.bots.filter(bot => bot.enlisted);

    return (
      <div>
        {console.log(this.state.bots)}
        <YourBotArmy bots={enlistedBots} onBotClick={this.handleBotClick}/>
        {this.state.details.on ?
        <BotSpecs bot={this.state.details.bot} onBackClick={this.handleBackClick} onEnlistClick={this.handleEnlistClick}/> :
        <BotCollection bots={this.state.bots} onBotClick={this.handleBotClick}/>
        }
      </div>
    );
  }

}

export default BotsPage;
