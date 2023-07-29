import AthlFinishForm from '../components/AthlFinishForm';

export default async function Page() {
  return (
    <div className="min-h-screen w-full p-4">
      <h1 className="w-full text-center font-bold text-2xl">
        THE <span className="text-fieldGreen">FIELD</span>
      </h1>
      <div className="w-full h-full">
        <AthlFinishForm />
      </div>
    </div>
  );
}
