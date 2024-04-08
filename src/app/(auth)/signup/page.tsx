import SignupForm from "./signup-form";

function Signup() {
  return (
    <div className="relative w-full h-screen bg-white2">
      <div
        role="login-container"
        className="w-[30rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-20 px-10  shadow-lg bg-white"
      >
        <h1 className="text-3xl font-semibold text-center mb-8">Register</h1>

        <SignupForm />
        <p className="mt-7 text-center">
          Sudah memiliki akun?{" "}
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
