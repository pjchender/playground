import { useReducer } from 'react';

export default function BasicForm() {
  const [isBusinessUser, toggle] = useReducer(
    (_isBusinessUser) => !_isBusinessUser,
    false,
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    form.forEach((value, key) => {
      console.log(`${key}: ${value.toString()}`);
    });
  };

  return (
    <div className="flex min-h-screen w-auto flex-col justify-center lg:px-8">
      <div className="rounded-xl border-2 border-indigo-200 p-12 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Properly handle reconciliation
        </h2>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                onChange={toggle}
              />
              <span className="text-sm">I&apos;m Business User</span>
            </label>
          </div>

          <div>
            <label
              htmlFor={isBusinessUser ? 'company-name' : 'personal-name'}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {isBusinessUser ? 'Company Name' : 'Personal Name'}
            </label>
            <div
              className="mt-2"
              key={isBusinessUser ? 'companyName' : 'personalName'}
            >
              {isBusinessUser ? (
                <input
                  id="company-name"
                  name="companyName"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  placeholder="Apple. Inc"
                />
              ) : (
                <input
                  id="personal-name"
                  name="personalName"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  placeholder="John Doe"
                />
              )}
            </div>
          </div>

          <div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
