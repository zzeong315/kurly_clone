import Link from "next/link";
import {KurlyLogo} from "@/components/icons/Logo";
import Image from "next/image";

const userMenuList = [
  {
    name: '회원가입',
    link: '/member/signup'
  },
  {
    name: '로그인',
    link: '/member/login'
  },
  {
    name: '고객센터',
    link: 'List'
  }
]

const Header = () => {
  return (
    <header className={'font-notoSansKR w-[1050px] max-h-[100px]'}>
      <section className={'w-full flex justify-end'}>
        <ul className={'space-x-2 flex h-[35px] items-center'}>
          {userMenuList.map(m => (
            <li key={m.name}
                className={`after:content-['|'] after:ml-2 last:after:content-none text-sm text-txt01`}>
              <Link
                href={m.link} className={'hover:text-point01'}>{m.name}</Link></li>
          ))}
        </ul>
      </section>
      <section>
        <div>
          <Image
            src={KurlyLogo}
            width={82}
            height={42}
            alt={'logo'}/>
          <div>마켓컬리</div>
          <div>뷰티컬리</div>
        </div>
        <div>
          <input/>
        </div>

        <div>
          svg
        </div>
      </section>
    </header>
  )
}

export default Header