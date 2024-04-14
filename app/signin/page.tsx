import Link from "next/link";

export default function Signin() {
  return (
      <div>
        <input id="email" />
        <input id="password" />
        <div className="space-y-4">
          <button onClick={() => {
            window.location.href = "home";
            }}
            className="w-full"
          >
            clicky clicky
          </button>
        </div>
        
        <Link href="forgot-password">
          <div className="cursor-pointer">
            forgor password
          </div>
        </Link>
          <Link href="signup">
            <button id="signin">
              this said both singup and sign in
            </button>
          </Link>
      </div>
  );
}
