import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Шинэ гүйлгээ нэмэх</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Текст</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Текст оруулах..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Дүн <br />
            (сөрөг - зарлага, эерэг - орлого)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">
        Гүйлгээ нэмэх</button>
      </form>
    </>
  )
}
