import React from 'react';
import LabeledInput from './LabeledInput';

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);

    this.currentDate = new Date().toISOString().slice(0, 10);
    this.state = {
      date: this.currentDate,
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
      date: this.currentDate,
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
        <LabeledInput
          id={1}
          type="date"
          change={(e) => this.setState({ date: e.target.value })}
          value={this.state.date}
          isRequired
        >Tanggal</LabeledInput>
        <button onSubmit={this.onSubmitForm} type='submit'>Submit</button>
      </form>
    );
  }
}

export default TransactionForm;
