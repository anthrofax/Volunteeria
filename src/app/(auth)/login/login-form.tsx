"use client";

function LoginForm() {
  return (
    <form className=" flex flex-col gap-3">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="rounded-md  active:outline-2 outline-purple1"
          autoFocus
          id="email"
          defaultValue="afridhoikhsan@gmail.com"
        />
        <p className="text-red-600 mt-3"></p>
      </div>

      <div className="flex flex-col">
        <label htmlFor="username">Password</label>
        <input
          type="password"
          className="rounded-md  active:outline-2 outline-purple1"
          id="password"
          defaultValue="mar777it39"
        />
        <p className="text-red-600 mt-3"></p>
      </div>

      <button className="w-full mt-5 bg-purple1 text-white py-3 rounded-lg hover:bg-purple2">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
