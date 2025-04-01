"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Copy, Clock } from "lucide-react"

export default function WebinarConfirmationWithTimer() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 10,
    seconds: 33,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://webinar.asiaforexmentor.com/webinar/thankyou/66c2a70c1611b0")
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="py-4 text-center border-b">
        <h1 className="text-2xl font-bold">
          Asia Forex Mentor<sup>®</sup>
        </h1>
      </header>

      {/* Blue Banner Section */}
      <section className="bg-blue-500 text-white py-12 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6">You are registered for the webinar!</h2>
        <p className="max-w-3xl mx-auto mb-4">
          This page will automatically redirect to the watch room when the webinar is scheduled to begin.
        </p>
        <p className="max-w-3xl mx-auto">
          You can access this page at any time by using the URL below. You will also receive a confirmation email with a
          link to this page.
        </p>
      </section>

      {/* Webinar Link Section */}
      <div className="max-w-4xl mx-auto w-full px-4 py-8">
        <div className="text-center mb-6">
          <p className="font-medium mb-2">Your webinar session link:</p>
          <div className="flex items-center justify-center gap-2 bg-gray-100 p-2 rounded">
            <input
              type="text"
              value="https://webinar.asiaforexmentor.com/webinar/thankyou/66c2a70c1611b0"
              readOnly
              className="bg-transparent flex-1 text-sm outline-none"
            />
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Share Section */}
        <div className="text-center mb-6">
          <p className="font-medium mb-2">Share:</p>
          <div className="flex justify-center gap-2">
            <a href="#" className="text-blue-600 text-sm flex items-center">
              <span className="mr-1">f</span> Facebook
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-blue-600 text-sm flex items-center">
              <span className="mr-1">𝕏</span> Twitter
            </a>
          </div>
        </div>

        {/* Calendar Links */}
        <div className="text-center mb-8">
          <p className="font-medium mb-2">Add to calendar links:</p>
          <div className="flex justify-center gap-2">
            <a href="#" className="text-blue-600 text-sm flex items-center">
              <span className="mr-1">G</span> Google Calendar
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-blue-600 text-sm flex items-center">
              <span className="mr-1">O</span> Outlook Calendar
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Presenter */}
          <div className="text-center">
            <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-2">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Presenter"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-600 mb-1">Presented by:</p>
            <p className="font-bold">Ezekiel Chew</p>
          </div>

          {/* What You'll Learn */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-center mb-6">
              Here's what you'll learn during this live free webinar:
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-green-500 mr-2">✓</span>
                <span>How to identify highly profitable trades that can make alot of money in under 10 mins a day</span>
              </li>
              <li className="flex">
                <span className="text-green-500 mr-2">✓</span>
                <span>How to get insane profits and yet be risk free</span>
              </li>
              <li className="flex">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  How to win and become profitable consistently even if you are a new trader with zero knowledge and yet
                  still live a lifestyle
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Date and Time */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          {/* Date Box */}
          <div className="bg-white shadow-md rounded-md overflow-hidden w-32">
            <div className="bg-blue-500 text-white text-center py-2">
              <p className="font-medium">MARCH</p>
            </div>
            <div className="text-center py-4">
              <p className="text-5xl font-bold">27</p>
            </div>
          </div>

          {/* Time */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="h-5 w-5 mr-2" />
              <p className="font-medium">11:45 AM GMT-3</p>
            </div>
            <p className="font-medium mb-2">Webinar starts in:</p>
            <div className="flex gap-4 justify-center">
              <div className="text-center">
                <p className="text-xl font-bold">{countdown.days}</p>
                <p className="text-xs">days</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">{countdown.hours}</p>
                <p className="text-xs">hrs</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">{countdown.minutes}</p>
                <p className="text-xs">mins</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">{countdown.seconds}</p>
                <p className="text-xs">secs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Button */}
        <div className="text-center mb-8">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
            As promised, grab your FREE BONUS here!
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-4 text-center text-sm text-gray-600">
        <p>Copyright © 2024 Asiaforexmentor.com. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

