import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { getByYear } from '../utils/api'
import Image from 'next/image'
import Script from 'next/script'

export default function Home({
  today,
  isHoliday,
  holiday,
  quote,
}: {
  today: string
  isHoliday: boolean
  holiday: any
  quote: string | any
}) {
  const dateToday = new Date(today)
  return (
    <div className={styles.container}>
      <Head>
        <title>Libur Hari Ini</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Cek libur hari ini" />
        <meta name="keywords" content="libur hari ini, hari libur, hari libur nasional" />
        <meta name="author" content="Syofyan Zuhad" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Libur Hari Ini" />
        <meta property="og:description" content="Cek libur hari ini" />
        <meta property="og:image" content="https://libur-hari-ini.vercel.app/og-image.png" />
        <meta property="og:url" content="https://libur-hari-ini.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Libur Hari Ini" />
        <meta property="og:locale" content="id_ID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@syofyanzuhad" />
        <meta name="twitter:creator" content="@syofyanzuhad" />
        <meta name="twitter:title" content="Libur Hari Ini" />
        <meta name="twitter:description" content="Cek libur hari ini" />
        <meta name="twitter:image" content="https://libur-hari-ini.vercel.app/og-image.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          name="google-site-verification"
          content="xg1uxwtnbHvgBgKii1fSpIdpXVxfivsvXdjfwf7bnII"
        />
      </Head>

      <main className={styles.main}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3">
          Hari ini
          {/* check isHoliday */}
          {isHoliday ? (
            <span className="ml-3 text-red-500">libur</span>
          ) : (
            <span className="ml-3 text-blue-500">kerja</span>
          )}
          !
        </h1>

        {isHoliday ? (
          <Image
            src="/cat-sleep.gif"
            alt="holiday"
            className="w-80 inline-block"
            width={500}
            height={500}
          />
        ) : (
          <Image
            src="/cat-work.gif"
            alt="work"
            className="w-38 inline-block"
            width={500}
            height={500}
          />
        )}

        <p className={styles.description}>
          {/* show date today with javascript behavior */}
          <span className={isHoliday ? 'text-red-500' : 'text-blue-500'}>
            {holiday ? <strong>Selamat {holiday.name} </strong> : ''}
            {holiday ? <br /> : ''}

            {/* get date locale indonesia */}
            {dateToday.toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </p>

        {/* <p className={styles.description}>Punya rencana apa hari ini?</p> */}
        {/* show quote with blockquote */}
        <blockquote className="text-center">
          <p className="text-2xl font-semibold">&quot;{quote.q}&quot;</p>
        </blockquote>
        {/* print html special character */}
        <p className="text-center text-gray-500">{quote.a}</p>
        {/*
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=typescript-nextjs-starter"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a href="https://freebio.dev/syofyanzuhad" target="_blank" rel="noopener noreferrer">
          Powered by
          <strong className="ml-1 text-red-500">Liburhariini</strong>
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
        <a
          className="ml-1 flex items-center"
          href="https://kemenkopmk.go.id/sites/default/files/pengumuman/2022-10/SKB%20LibNas%20dan%20CuBer%202023.pdf"
        >
          | sumber
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const year = new Date().getFullYear()
  const holidays = getByYear(year)

  // get time utc

  // const today = new Date()
  // console.log(today)
  // today.setHours(today.getHours() + 7)
  // let now = new Date()
  // const todayUtc = new Date(now.getTime() + now.getTimezoneOffset() * 60000)
  // // get date todayUtc on indonesia
  // console.log(todayUtc)
  // fetch time from api https://www.timeapi.io/api/TimeZone/zone?timeZone=Asia/Jakarta
  const time = await fetch('https://www.timeapi.io/api/TimeZone/zone?timeZone=Asia/Jakarta').then((res) => res.json())
  console.log(time)
  const today = new Date(time.currentLocalTime)
  console.log(today)
  // const today = new Date(todayUtc.getTime() + 7 * 3600 * 1000)

  const isHoliday = holidays.some((holiday: { date: Date }) => {
    const date = new Date(holiday.date)
    // console.log(date)
    // console.log(today.getDay(), today.getDate(), today.getMonth(), date.getDate(), date.getMonth())
    // check if today is not monday and not saturday
    return (
      (date.getDate() === today.getDate() && date.getMonth() === today.getMonth()) ||
      today.getDay() === 1 ||
      today.getDay() === 6
    )
  })

  // get data from holiday json
  const data = holidays.map((holiday: { date: Date }) => {
    const date = new Date(holiday.date)
    // console.log(today.getDay())

    if (today.getDay() === 0 || (today.getDay() === 6 && isHoliday)) {
      // find holiday name where today is holiday
      const todayHoliday = holidays.find((holiday: { date: Date }) => {
        const date = new Date(holiday.date)
        return today.getDate() === date.getDate() && today.getMonth() === date.getMonth()
      })
      return {
        name: 'Libur Akhir Pekan dan ' + todayHoliday?.name,
        isHoliday: true,
      }
    } else if (today.getDay() === 0 || (today.getDay() === 6 && !isHoliday)) {
      return {
        name: 'Libur Akhir Pekan',
        isHoliday: true,
      }
    } else {
      // if today is holiday, return object where isHoliday is true
      return today.getDate() === date.getDate() && today.getMonth() === date.getMonth()
        ? { ...holiday, isHoliday: true }
        : { ...holiday, isHoliday: false }
    }
  })
  // console.log(data)

  // get object where isHoliday is true
  const holiday = data.find((holiday: { isHoliday: boolean }) => holiday.isHoliday) ?? null

  // fetch qoutes of the day
  const res = await fetch('https://zenquotes.io/api/today').then((res) => res.json())
  const quote = res[0]
  // console.log(quote)

  return {
    props: {
      today: today.toDateString(),
      isHoliday,
      holiday,
      quote,
    },
  }
}
