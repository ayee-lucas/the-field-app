import {
  FC, useEffect, useState,
} from 'react';

interface Props {
  setDiscard: (discard: boolean) => void;
  setComment: (comment: boolean) => void;
  discard: boolean;
}

const AlertPost:FC<Props> = ({
  discard, setDiscard, setComment,
}) => {
  const [alertClass, setAlertClass] = useState('');

  const handleDiscard = () => {
    setDiscard(!discard);
    setComment(false);
  };

  useEffect(
    () => {
      if (discard) {
        setAlertClass('blur-sm');
        setTimeout(() => {
          setAlertClass('opacity-100');
        }, 200);
      } else {
        setAlertClass('opacity-0');
      }
    },

    [discard],
  );
  return (
    <div
      className={`fixed inset-0 bg-black/25 transition-all grid place-content-center ${discard ? '' : 'hidden'}  ${alertClass}`}
      aria-hidden
      role="button"
    >
      <div
        className="bg-white/90 p-4 rounded-md text-center transition-all"
        id="alertPopUp"
      >
        <h1>Are you sure you want to discard this post ?</h1>
        <div className="flex justify-center gap-4 mt-4">
          <button type="button" onClick={handleDiscard}>yes</button>
          <button type="button" onClick={() => setDiscard(false)}>no</button>
        </div>

      </div>

    </div>
  );
};

export default AlertPost;
