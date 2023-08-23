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
      nominal: 0,
      quantity: 0,
      total: 0,
    };
  }

  resetFormState = () => {
    this.setState({
      date: this.currentDate,
      name: '',
      category: '',
      nominal: 0,
      quantity: 0,
      total: 0,
    });

    console.log("reset");
  }
  onSubmitForm = (event) => {
    event.preventDefault();

    this.resetFormState();
    console.log("submit");
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <LabeledInput
          id="date-input"
          type="date"
          change={(e) => this.setState({ date: e.target.value })}
          value={this.state.date}
          isRequired
        >
          Tanggal
        </LabeledInput>

        {/* Future feat: <AutocompleteInput> Nama Transaksi </> */}
        <LabeledInput
          id="name-input"
          type="text"
          change={(e) => this.setState({ name: e.target.value })}
          value={this.state.name}
          placeholder="Minyak Goreng 1L"
          isRequired
        >
          Nama Transaksi
        </LabeledInput>

        {/* Future feat: <AutocompleteInput> Kategori </> */}
        <LabeledInput
          id="category-input"
          type="text"
          change={(e) => this.setState({ category: e.target.value })}
          value={this.state.category}
          placeholder="Sembako"
          isRequired
        >
          Kategori
        </LabeledInput>

        <LabeledInput
          id="nominal-input"
          type="number"
          value={this.state.nominal}
          change={(e) => this.setState({ nominal: e.target.value })}
          isRequired
        >
          Nominal
        </LabeledInput>

        <LabeledInput
          id="quantity-input"
          type="number"
          value={this.state.quantity}
          change={(e) => this.setState({ quantity: e.target.value })}
          isRequired
        >
          Jumlah
        </LabeledInput>

        <LabeledInput
          type="number"
          value={this.state.nominal * this.state.quantity}
        >
          Total
        </LabeledInput>

        
        <button onSubmit={this.onSubmitForm} type="submit">
          Simpan
        </button>
        
        <button onClick={this.resetFormState} type="button">
          Batal
        </button>
      </form>
    );
  }
}

export default TransactionForm;
