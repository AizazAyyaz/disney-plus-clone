import Image from 'next/image'

function Brands() {
  return (
    <section className="mx-auto mt-10 flex max-w-[1400px] flex-col items-center justify-center gap-6 px-8 md:flex-row">
      <div className="brand group">
        <Image
          src="/images/disnep.png"
          alt="Disney Plus"
          layout="fill"
          objectfit="cover"
        ></Image>
        <video
          autoply
          loop
          muted
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/videos/disney.mp4"></source>
        </video>
      </div>

      <div className="brand group">
        <Image
          src="/images/pixar.png"
          alt="Pixar"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image
          src="/images/marvel.png"
          alt="Marvel"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image
          src="/images/starwars.png"
          alt="Star Wars"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image
          src="/images/national-geographic.png"
          alt="National Geographic"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default Brands
