import Link from "next/link";

const userMenuList = [
  {
    name: '회원가입',
    link:'/member/signup'
  },
  {
    name: '로그인',
    link:'/member/login'
  },
  {
    name: '고객센터',
    link:'List'
  }
]

const Header = () => {
  return (
    <header className={''}>
      <section>
        <ul className={'flex'}>
          {userMenuList.map(m => (
            <li key={m.name} className={'after:content-['|'] after:ml-2 last:after:content-none'}><Link href={m.link}>{m.name}</Link></li>
          ))}

        </ul>
      </section>
    </header>
  )
}

export default Header