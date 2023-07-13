// eslint-disable-next-line import/no-extraneous-dependencies
import 'animate.css';

export default function PlayGround() {
  return (
    <div className="bg-white dark:bg-black grid place-content-center w-full min-h-screen">
      <div className="flex items-center justify-center gap-2 w-full">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white animate__animated animate__slideInUp animate__faster">
          THE
        </h1>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white animate__animated animate__slideInUp">
          FIELD
        </h1>
      </div>

      <div className="absolute bottom-1/3 left-1/2 rounded-full w-2 h-2 bg-gray-800 dark:bg-white animate-bounce" />
    </div>
  );
}
