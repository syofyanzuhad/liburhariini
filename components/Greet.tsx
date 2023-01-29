import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import dataHolidays from '../data/2023.json'
import Image from 'next/image'
import RealTime from '@/components/Realtime'

export default function Greet() {
  const [loading, setLoading] = useState(true)
  const [holiday, setHoliday] = useState<any[]>([])
  const [isHoliday, setIsHoliday] = useState(false)

  useEffect(() => {
    getDateToday()
  }, [])

  async function getDateToday() {
    setLoading(true)
    const today = new Date()
    // today.setUTCHours(today.getUTCHours() + 7)
    const holidays = dataHolidays

    const isHoliday = holidays.some((holiday) => {
      const date = new Date(holiday.date)
      // console.log(date.getDate() === today.getDate() && date.getMonth() === today.getMonth())
      // console.log(today.getDay(), today.getDate(), today.getMonth(), date.getDate(), date.getMonth())
      // check if today is not monday and not saturday
      return (
        (date.getDate() === today.getDate() && date.getMonth() === today.getMonth()) ||
        today.getDay() === 0 ||
        today.getDay() === 6
      )
    })
    setIsHoliday(isHoliday)
    // console.log(isHoliday, 'isHoliday')

    const todayHoliday = holidays.find((holiday) => {
      const date = new Date(holiday.date)
      return today.getDate() === date.getDate() && today.getMonth() === date.getMonth()
    })
    // get data from holiday json
    const holiday = holidays.map((holiday) => {
      const date = new Date(holiday.date)
      // console.log(today.getDay())

      // console.log(todayHoliday, 'todayHoliday')
      // console.log(todayHoliday !== undefined, 'todayHoliday')
      if ((todayHoliday !== undefined && today.getDay() === 0) || today.getDay() === 6) {
        return {
          name: 'Libur Akhir Pekan dan ' + todayHoliday?.name,
          isHoliday: true,
        }
      } else if (today.getDay() === 0 || (today.getDay() === 6 && !todayHoliday)) {
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
    setHoliday(holiday)
    // console.log(holiday, 'holiday')

    // get object where isHoliday is true
    // const holiday = data.find((holiday: { isHoliday: boolean }) => holiday.isHoliday) ?? {
    //   name: 'Hari Biasa',
    //   isHoliday: false,
    //   date: today,
    // }

    setLoading(false)
    return {
      props: {
        today,
        isHoliday,
        holiday,
      },
    }
  }
  // console.log(holiday, 'holiday')
  // console.log(isHoliday, 'isHoliday')

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 mb-4"></div>
          <span>Loading...</span>
        </div>
      ) : (
          <div>
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

            <div className={styles.description}>
              {/* show date today with javascript behavior */}
              <span className={isHoliday ? 'text-red-500' : 'text-blue-500'}>
                <strong>Selamat {holiday.length > 0 && holiday[0].name}</strong>
                <br />

                {/* get date locale indonesia */}
                <RealTime />
              </span>
            </div>
          </div>
      )}
    </>
  )
}
