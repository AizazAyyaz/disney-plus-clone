import Image from 'next/image'
import {
  HomeIcon,
  SearchIcon,
  HeartIcon,
  StarIcon,
} from '@heroicons/react/solid'
import { getSession, signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

function Header() {
  const [session] = useSession()
  const router = useRouter()

  return (
    <header className="sticky top-0 z-[1000] flex h-[72px] items-center bg-[#040714] px-10 md:px-12">
      <Image
        className="cursor-pointer"
        src="/images/logo.svg"
        height={80}
        width={80}
        onClick={() => router.push('/')}
      />
      {session && (
        <div className="item-center ml-10 hidden space-x-6 md:flex">
          <a href="" className="header-link group">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a href="" className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a href="" className="header-link group">
            <HeartIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a href="" className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a href="" className="header-link group">
            <img
              src="/images/movie-icon.svg"
              alt="movie icon"
              className="h-5"
            />
            <span className="span">Movies</span>
          </a>
          <a href="" className="header-link group">
            <img
              src="/images/series-icon.svg"
              alt="series icon"
              className="h-5"
            />
            <span className="span">Series</span>
          </a>
        </div>
      )}
      {!session ? (
        <button
          className="ml-auto rounded border px-4 py-1.5 font-medium uppercase tracking-wide transition duration-300 hover:bg-white hover:text-black"
          onClick={signIn}
        >
          Login
        </button>
      ) : (
        <div className="ml-auto flex cursor-pointer items-center space-x-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={session.user.image}
            alt=""
          ></img>
          <h4 className="">{session.user.name}</h4>
        </div>
      )}
    </header>
  )
}

export default Header
