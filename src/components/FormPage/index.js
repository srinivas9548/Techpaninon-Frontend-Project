import { Component } from 'react'

import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { AiOutlineFieldTime } from "react-icons/ai";
import { LuRefreshCw } from "react-icons/lu";

import './index.css'

class FormPage extends Component {
    state = {
        isShowInvoice: false,
        isShowAlternate: false,
        isShowLineItem: true,
        form: {
            countryInput: "",
            bankKeyInput: "",
            accountNumberInput: "",
            referenceInput: ""
        }
    }

    onSubmitForm = event => {
        event.preventDefault();

        const { form } = this.state
        
        const url = "http://localhost:5000/api/submit-form/";

        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
          })
          .then(data => {
            console.log('Success:', data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }

    onChangeCountry = (event) => {
        const { value } = event.target
        this.setState(prevState => ({
            form: { ...prevState.form, countryInput: value }
        }));
    }

    onChangeBankKey = (event) => {
        const { value } = event.target
        this.setState(prevState => ({
            form: { ...prevState.form, bankKeyInput: value }
        }));
    }

    onChangeAccountNumber = (event) => {
        const { value } = event.target
        this.setState(prevState => ({
            form: { ...prevState.form, accountNumberInput: value }
        }));
    }

    onChangeReference = (event) => {
        const { value } = event.target
        this.setState(prevState => ({
            form: { ...prevState.form, referenceInput: value }
        }));
    }

    onClickLineItemDetails = () => {
        this.setState(prevState => ({
            isShowLineItem: !prevState.isShowLineItem
        }))
    }

    onClickAlternateDetails = () => {
        this.setState(prevState => ({
            isShowAlternate: !prevState.isShowAlternate
        }))
    }

    onClickInvoiceDetails = () => {
        this.setState(prevState => ({
            isShowInvoice: !prevState.isShowInvoice
        }))
    }

    // onClickInvoice = (event) => {
    //     console.log(event);
    // }

    render() {
        const {
            isShowInvoice,
            isShowAlternate,
            isShowLineItem,
            form: {
                countryInput,
                bankKeyInput,
                accountNumberInput,
                referenceInput
            }
        } = this.state

        return (
            <form className='form-page-container' onSubmit={this.onSubmitForm}>
                <div className='tabs-container'>
                    <button type="button" className='tab-button' onClick={this.onClickInvoice}>Invoice Details</button>
                    <button type="button" className='tab-button'>Action History</button>
                </div>
                <div className='invoice-alternate-line-item-container'>
                    <div className='invoice-amount-details-container'>
                        <div className='invoice-amount-header' onClick={this.onClickInvoiceDetails}>
                            {isShowInvoice ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}
                            <p className='invoice-text-header'>INVOICE AMOUNT DETAILS</p>
                        </div>
                        {isShowInvoice ? (
                            <div className='invoice-list-container'>
                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>Currency<span className='star'>*</span>:</label>
                                    </div>
                                    <p className='value'>INR</p>
                                </div>

                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>Inv Basic Amt<span className='star'>*</span>:</label>
                                    </div>
                                    <p className='value'>15,000.00</p>
                                </div>

                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>Inv Tax Amt<span className='star'>*</span>:</label>
                                    </div>
                                    <p className='value'>1,000.00</p>
                                </div>

                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>Total Inv Amt [Inclu. of tax]<span className='star'>*</span>:</label>
                                    </div>
                                    <p className='value'>16,000.00</p>
                                </div>

                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>Advance Paid<span className='star'>*</span>:</label>
                                    </div>
                                    <input type="text" placeholder='0.00' className='input-box' />
                                </div>

                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>TCS Applicable<span className='star'>*</span>:</label>
                                    </div>
                                    <div className='radio-label-container'>
                                        <input type="radio" name="option" value="Yes" id="yes" className='radio-element' />
                                        <label htmlFor='yes' className='label-element'>Yes</label>
                                        <input type="radio" name="option" value="No" id="no" className='radio-element' checked />
                                        <label htmlFor='no' className='label-element'>No</label>
                                    </div>

                                </div>

                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>Net Payable Amt [Exclu. of TDS]<span className='star'>*</span>:</label>
                                    </div>
                                    <p className='value'>16,000.00</p>
                                </div>
                            </div>
                        ) : null}

                    </div>

                    <div className='alternate-payee-details-container'>
                        <div className='alternate-payee-header' onClick={this.onClickAlternateDetails}>
                            {isShowAlternate ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}
                            <p className='alternate-text-header'>ALTERNATE PAYEE DETAILS</p>
                        </div>
                        {isShowAlternate ? (
                            <div className='alternate-list-container'>
                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>Alternate Payee 1 :</label>
                                    </div>
                                    <input type="text" className='input-box' />
                                </div>

                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>Alternate Payee 2 :</label>
                                    </div>
                                    <input type="text" className='input-box' />
                                </div>

                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>City :</label>
                                    </div>
                                    <input type="text" className='input-box' />
                                </div>

                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>Street :</label>
                                    </div>
                                    <input type="text" className='input-box' />
                                </div>

                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>Country :</label>
                                    </div>
                                    <input type="text" onChange={this.onChangeCountry} className='input-box' value={countryInput} />
                                </div>

                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>Bank Key /IFSC Code :</label>
                                    </div>
                                    <input type="text" onChange={this.onChangeBankKey} className='input-box' value={bankKeyInput} />
                                </div>

                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>Bank Acc No :</label>
                                    </div>
                                    <input type="text" onChange={this.onChangeAccountNumber} className='input-box' value={accountNumberInput} />
                                </div>

                                <div className='list-item'>
                                    <div className='label-content'>
                                        <AiOutlineFieldTime />
                                        <label className='label'>Reference :</label>
                                    </div>
                                    <input type="text" onChange={this.onChangeReference} className='input-box' value={referenceInput} />
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className='line-item-details-container'>
                        <div className='line-item-header' onClick={this.onClickLineItemDetails}>
                            {isShowLineItem ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}
                            <p className='line-item-text-header'>LINE ITEM DETAILS</p>
                        </div>
                        {isShowLineItem ? (
                            <div className='line-item-content-container'>
                                <LuRefreshCw />
                                <div className='line-item-row-container'>
                                    <input type="checkbox" />
                                    <p className='line-header-text'>Select Debit</p> |
                                    <p className='line-header-text'>GL Desc</p> |
                                    <p className='line-header-text'>GL Code</p> |
                                    <p className='line-header-text'>Text(Do not enter <br /> special character)</p>
                                </div>
                                <div className='buttons-container'>
                                    <button type="button" className='button'>Calculate</button>
                                    <button type="submit" className='button'>Add</button>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </form>
        )
    }
}

export default FormPage