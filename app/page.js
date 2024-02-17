'use client';

import useLocalStorage from "./Hooks/useLocalStorage";
const { Insert, Retriev, Remove } = useLocalStorage('Nextjs useLocalStorage');

function InsertHandler(event) {
  const textarea = event.target.parentElement.parentElement.message;
  Insert(textarea.value);

  textarea.value = '';
}

function RetrievHandler(event) {
  const textarea = event.target.parentElement.parentElement.message;
  textarea.value = Retriev();
}

function RemoveHandler() {
  Remove();
}

export default function Home() {
  return (
    <form autoComplete="off">
      <div className="FormGroup">
        <label htmlFor="message">Your message</label>
        <textarea id="message" name="message" placeholder="Write your thoughts here..."></textarea>
      </div>
      <div className="BtnsGroup">
        <button type="button" onClick={InsertHandler} className="blue">insert</button>
        <button type="button" onClick={RetrievHandler} className="green">retriev</button>
        <button type="button" onClick={RemoveHandler} className="red">remove</button>
      </div>
    </form>
  )
}
