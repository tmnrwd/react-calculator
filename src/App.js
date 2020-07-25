import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      example: "pony",
      exampleArray: [],
      inputField: 0,
      calculationResult: [],
      operator: " ",
      runningTotal: 0,
      runningTotalArray: [],
      firstCalcNumber: []
    }
  }

  concatenateInput(input) {
    this.setState((state) => ({
      runningTotalArray: state.runningTotalArray.concat(input)
    }))
    this.runningTotalArrayConvert();
  }
  

  operatorButton(input) {
    if (this.state.runningTotalArray && this.state.runningTotalArray.length){
    this.runningTotalArrayConvert();
    this.setState((state) => ({
    operator: state.operator = input,
    firstCalcNumber: state.firstCalcNumber = state.runningTotal,
    }))
    this.clearRunningTotal()
  }
  }

  calculateResult() {
    this.setState((state) => ({
      calculationResult: state.calculationResult + state.inputField
    }))
  }

  addRunningTotalArray() {
    this.setState((state) => ({
      calculationResult: state.calculationResult + state.runningTotalArray
    }))
  }

  runningTotalArrayConvert() {
    let array = this.state.runningTotalArray;
    let runningTotalString = array.join('');
    let runningTotalNumber = parseInt(runningTotalString);
    this.setState((state) => ({
      runningTotal: state.runningTotal = runningTotalNumber
    }
    ))
  }

  addRunningTotal() {
    this.runningTotalArrayConvert();
    this.setState((state) => ({
      calculationResult: state.calculationResult + state.runningTotal
    }));
    this.clearRunningTotal();
  }

  equals() {
    let operator = this.state.operator;
    this.runningTotalArrayConvert();
    if (this.state.runningTotalArray && this.state.runningTotalArray.length)
    if (operator === " "){
      this.setState((state) => ({
        calculationResult: state.runningTotal
      }));
    }
    if (this.state.firstCalcNumber !== 0){
    if (operator === "+") {
      this.setState((state) => ({
        calculationResult: state.firstCalcNumber + state.runningTotal
      }));
    }
    if (operator === "-") {
      this.setState((state) => ({
        calculationResult: state.firstCalcNumber - state.runningTotal
      }));
    }
    if (operator === "x") {
      this.setState((state) => ({
        calculationResult: state.firstCalcNumber * state.runningTotal
      }));
    }
    if (operator === "/") {
      this.setState((state) => ({
        calculationResult: state.firstCalcNumber / state.runningTotal
      }));
    }
    this.setState((state) => ({
      firstCalcNumber: []
    }));
  }
    else{
    if (this.runningTotal !== 0) {
      if (operator === "+") {
        this.setState((state) => ({
          calculationResult: state.calculationResult + state.runningTotal
        }));
      }
      if (operator === "-") {
        this.setState((state) => ({
          calculationResult: state.calculationResult - state.runningTotal
        }));
      }
      if (operator === "x") {
        this.setState((state) => ({
          calculationResult: state.calculationResult * state.runningTotal
        }));
      }
      if (operator === "/") {
        this.setState((state) => ({
          calculationResult: state.calculationResult / state.runningTotal
        }));
      }
    }
    }
    this.clearRunningTotal();
    this.setState((state) => ({
      operator: " "
    }))
  }


  clearRunningTotal() {
    this.setState((state) => ({
      runningTotalArray: state.runningTotalArray = [],
      runningTotal: state.runningTotal = [],
    }))
  }

  clearButton() {
    this.clearRunningTotal()
    this.setState((state) => ({
      operator: state.operator = " ",
      calculationResult: state.calculationResult = "",
      firstCalcNumber: []
    }))
  }


  render() {
    return (
      <>
      <Container>
        <Card>
      <Card.Body className="border border-dark">
      <div class="border border-dark rounded text-center">
          Calculator
        </div> <br></br>
        {/*{this.state.example} <br></br>*/}
        <br></br>
        <br></br>
        <div id="buttons" className="text-center">
        <Button className="border border-dark number-buttons" onClick={() => this.concatenateInput(7)}>
          7
        </Button>
        <Button className="border border-dark number-buttons" onClick={() => this.concatenateInput(8)}>
          8
        </Button>
        <Button className="border border-dark number-buttons" onClick={() => this.concatenateInput(9)}>
          9
        </Button>
        <Button className="border border-dark number-buttons" onClick={() => this.operatorButton("+")}>
          +
        </Button>
        <br></br>
        <Button className="border border-dark number-buttons" onClick={() => this.concatenateInput(4)}>
          4
        </Button>
        <Button className="border border-dark number-buttons" onClick={() => this.concatenateInput(5)}>
          5
        </Button>
        <Button className="border border-dark number-buttons" onClick={() => this.concatenateInput(6)}>
          6
        </Button>
        <Button className="border border-dark number-buttons" onClick={() => this.operatorButton("-")}>
          -
        </Button>
        <br></br>
        <Button className="border border-dark number-buttons" onClick={() => this.concatenateInput(1)}>
          1
        </Button>
        <Button className="border border-dark number-buttons" onClick={() => this.concatenateInput(2)}>
          2
        </Button>
        <Button className="border border-dark number-buttons" onClick={() => this.concatenateInput(3)}>
          3
        </Button>
        <Button className="border border-dark number-buttons" onClick={() => this.operatorButton("x")}>
          x
        </Button>
        <br></br>
        <Button className="border border-dark number-buttons" onClick={() => this.clearButton()}>
          C
        </Button>
        
        <Button className="border border-dark equals-button" onClick={() => this.equals()}>
          Equals
        </Button>
        <Button className="border border-dark number-buttons" onClick={() => this.operatorButton("/")}>
          /
        </Button>
        </div>
        
        <div id="box-div-container" className="d-flex justify-content-center">

        <div id="box-div" className="text-center">
          
        <div id="box-row-1" className="">
        <Row >
        
        <Col>
        <div id="input" className="boxes">
        <br></br>
        {this.state.runningTotalArray}
        </div>
        </Col>
   
        <Col>
        <div id ="operator" className="boxes">
        <br></br>
        {this.state.operator}
        </div>
        </Col>
        </Row>
        </div>

        <div id="box-row-2">
        <Row >
        <Col>
        <div id="stored-number" className="boxes">
          <br></br>
        {this.state.firstCalcNumber}
        </div>
        </Col>
                
        <Col>
        <div id="result" className="boxes">
        <br></br>
        {this.state.calculationResult}
        </div>
        </Col>

        </Row>
        </div>
        </div>

        </div>
        </Card.Body>
        
        </Card>
        
        </Container>
      </>
    );
  }
}

export default App;