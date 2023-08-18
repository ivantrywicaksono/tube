import React from 'react';

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      name: '',
      category: '',
      nominal: '',
      quantity: '',
      total: '',
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(event) {
    event.preventDefault();

    this.setState({
      date: '',
      name: '',
      category: '',
      nominal: '',
      quantity: '',
      total: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
      </form>
    );
  }
}

export default TransactionForm;
