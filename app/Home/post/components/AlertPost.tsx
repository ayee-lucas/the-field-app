import {
  FC, useEffect, useState,
} from 'react';

interface Props {
  setDiscard: (discard: boolean) => void;
  discard: boolean;
}

const AlertPost:FC<Props> = ({ discard, setDiscard }) => {
  const [alertClass, setAlertClass] = useState('');

  useEffect(
    () => {
      if (discard) {
        setAlertClass('');
        setTimeout(() => {
          setAlertClass('opacity-100');
        }, 500);
      } else {
        setAlertClass('hidden');
      }
    },

    [],
  );
  return (
    <div
      className={`fixed inset-0 bg-black/25 transition-all grid place-content-center  ${alertClass}`}
      aria-hidden
      onClick={() => setDiscard(!discard)}
      role="button"
    >
      <div
        className="bg-white/90 p-4 rounded-md text-center transition-all"
        id="alertPopUp"
      >
        r

        <h1>Are you sure you want to discard this post</h1>

      </div>

    </div>
  );
};

export default AlertPost;
