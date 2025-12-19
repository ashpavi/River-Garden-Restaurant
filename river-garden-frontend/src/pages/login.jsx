import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/frame2.png')", 
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Glass card */}
      <div className="relative z-10 w-[90%] max-w-md rounded-2xl
        bg-white/15 backdrop-blur-xl border border-white/30
        shadow-2xl p-8 text-white">
          
            <div className="flex justify-center mb-4">
            <img
                onClick={() => navigate("/")}
                src="/images/logo.jpg"
                alt="River Garden"
                className="w-17 h-17 rounded-md bg-white p-1 cursor-pointer"
            />
            </div>

        <h2 className="text-3xl font-semibold text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-white/80 mb-6">
          Login to River Garden Resort
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20
              placeholder-white/70 outline-none border border-white/30
              focus:border-[#ff7a42]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20
              placeholder-white/70 outline-none border border-white/30
              focus:border-[#ff7a42]"
          />

          <button
            className="w-full py-3 rounded-lg bg-[#ff7a42]
              text-white font-semibold tracking-wide
              hover:bg-[#ff8c5a] transition"
          >
            Login
          </button>
        </div>

        <div className="mt-6 flex justify-between text-sm text-white/80">
          <button className="hover:text-white">
            Forgot password?
          </button>
          <button
            onClick={() => navigate("/")}
            className="hover:text-white"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
