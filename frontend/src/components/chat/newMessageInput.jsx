import React from 'react';
import { BsSendFill } from 'react-icons/bs';

const NewMessageInput = () => {
  return (
    <div className="mt-auto px-5 py-3">
      <form noValidate className="py-1 border rounded-2">
        <div className="input-group has-validation">
          <input
            name="body"
            aria-label="Новое сообщение"
            placeholder="Введите сообщение..."
            className="border-0 p-0 px-2 form-control"
            // value="Hello!!!"
          />
          <button
            // type="submit"
            type="button"
            className="p-1 mx-1 border-0 text-primary btn btn-group-vertical"
          >
            <BsSendFill size="1.4rem" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewMessageInput;
