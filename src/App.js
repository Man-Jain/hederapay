import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipient : '',
      amount : '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.payAmount = this.payAmount.bind(this);
  }

  handleInput(event) {
    const target = event.target;
    if (target.name == "recipient-add"){
      this.setState(Object.assign({}, this.state, {recipient: target.value}));
    }
    if (target.name == "amount"){
      this.setState(Object.assign({}, this.state, {amount: target.value}));
    }
  }

  payAmount(){
    let data = {
      time:"1",
      memo:"My First Hedera Transaction",
      contentid:'test1',
      redirect:'{"nonPayingAccount": "/nomicropaymentreceived.html"}',
      recipientlist:'[{"tinybars": "' + this.state.amount + '", "to":"' + this.state.recipient + '"}]',
      type:'article'
    }
    window.hash.triggerCryptoTransfer(data, (err, res) => {
      console.log("Callback::Error:", err)
      console.log("Callback::Response:", res)
    });
    this.setState({
      recipient : '',
      amount : '',
    })
  }

  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://cdn.hashingsystems.com/hash.js";
    script.type = "text/javascript";
    script.async = true;
    document.head.appendChild(script);
  }
  
  render() {
    return (
      <div className="main">
        <Grid container spacing={3}>``
          <Grid item xs={12}>
            <center>
              <h1>Pay With Hbar</h1>
              <p>Pay Instantly on Hedera</p>
            </center>
          </Grid>
          <Grid item xs={12} sm={12}>
          <center><TextField value={this.state.recipient} name="recipient-add" onChange={this.handleInput} id="outlined-basic" label="Enter Account Id or HNS Domain" variant="outlined" style = {{width: 500}} /></center>
          </Grid>
          <Grid item xs={12} sm={12}>
          <center><TextField type="number" value={this.state.amount} name="amount" onChange={this.handleInput} id="outlined-basic" label="Amount to Pay" variant="outlined" style = {{width: 500}} /></center>
          </Grid>
          <Grid item xs={12} sm={12}>
          <center><Button onClick={this.payAmount} size="large" className="pay-btn" variant="contained" color="primary">
          Pay Now
        </Button></center>
          </Grid>
        </Grid>
      </div>
    );
  }
}
