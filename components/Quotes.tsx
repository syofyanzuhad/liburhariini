import { useState, useEffect } from 'react'

export default function Quote() {
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => fetchData(), [])

  async function fetchData() {
    // try {
      setLoading(true)
      const res = await fetch('https://zenquotes.io/api/today').then((res) => {
        res.json()
        console.log(res, 'res')
        setQuote(res)
        setLoading(false)
      }).catch((error) => {
        console.error(error, 'error')
        setLoading(false)
      })
      // const data = await res.json()
    // } catch (error) {
    //   console.error(error, 'error')
    //   setLoading(false)
    // }
  }
  console.log(quote, 'quote')

  return (
    <>
      {loading ? (
        <span>Loading...</span>
      ) : (
        quote && (
          <div>
            {/* show quote with blockquote */}
            <blockquote className="text-center">
              <p className="text-2xl font-semibold">&quot;{quote.q}&quot;</p>
            </blockquote>
            {/* print html special character */}
            <p className="text-center text-gray-500">{quote.a}</p>
          </div>
        )
      )}
    </>
  )
}