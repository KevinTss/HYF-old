/**
 * Think about it...
 */

class React {

  constructor() {
    this.state = {};
  }

  setState(newState) {
    this.state = { ...newState };
  }

}

class Component extends React {

  constructor(mountFunction) {
    super();
    this.didMount = mountFunction;
  }

  componentDidMount() {
    // Mount the component
  }

}

/**
 * THIS IS NOT THE REAL CODE OF REACT !!!
 * 
 * Is just a piece of code to make you more able to make connections
 * between recent frameworks and basic javascirpt.
 */