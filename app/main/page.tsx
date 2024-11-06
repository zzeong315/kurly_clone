import Link from "next/link";

const Main = () => {
  return (
    <main>
      <Link href={'/member/login'} >Login</Link>
      <Link href={'/member/sign'} >Sign Up</Link>
    </main>
  )
}

export default Main