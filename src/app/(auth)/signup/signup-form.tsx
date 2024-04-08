function SignupForm() {
  return (
    <>
      <form className=" flex flex-col gap-3" method="post">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`rounded-md  active:outline-2`}
            autoFocus
            id="email"
          />
          <p className="text-red-600 mt-3"></p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="username">Password</label>
          <input
            type="password"
            className={`rounded-md  active:outline-2`}
            id="password"
          />
          <p className="text-red-600 mt-3"></p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="username">Confirm Password</label>
          <input
            type="password"
            className={`rounded-md  active:outline-2`}
            id="confirmPassword"
          />
          <p className="text-red-600 mt-3"></p>
        </div>
      </form>

      <button className="w-full mt-5 bg-purple1 text-white py-3 rounded-lg hover:bg-purple-500">
        Signup
      </button>
    </>
  );
}

export default SignupForm;
