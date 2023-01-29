import { useState, useEffect } from 'react'

export default function RealTime() {
  let date = new Date()
  date.setUTCHours(date.getUTCHours() + 7)
  const [time, setTime] = useState(
    date.toLocaleString('id-ID', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Asia/Jakarta',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  )

  useEffect(() => {
    const updateTime = () => {
      let date = new Date()
      date.setUTCHours(date.getUTCHours() + 7)
      setTime(
        date.toLocaleString('id-ID', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZone: 'Asia/Jakarta',
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      )
      setTimeout(updateTime, 1000)
    }
    updateTime()
  }, [])

  return <p>{time}</p>
}
