import Link from "next/link"
import Image from "next/image"
import { PlusCircle, Shirt } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-sustainable-50">
      <div className="container mx-auto px-4">
        {/* Logos section */}
        <div className="flex justify-end gap-4 py-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/un_log.jpg-jVl6O9qY3SmGAfYzzLRdpwnqDaVV4S.jpeg"
            alt="United Nations Logo"
            width={180}
            height={60}
            className="object-contain w-[180px] h-[60px]"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sdg_goal2.jpg-YMqbsVFGZd2YaRc24J6tDkHZGbGTIl.jpeg"
            alt="Sustainable Development Goals"
            width={180}
            height={60}
            className="object-contain w-[180px] h-[60px]"
          />
        </div>

        {/* Main content */}
        <div className="text-center space-y-8 py-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-sustainable-800">Welcome to Sustainable Fashion Credits</h1>
            <p className="text-xl text-sustainable-700">
              Join us in making fashion more sustainable. Track your eco-friendly purchases, earn credits, and
              contribute to a better future for our planet.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
              <Link href="/add-credits" className="group">
                <div className="bg-sustainable-600 hover:bg-sustainable-700 text-white p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Add Credits</h3>
                    <span className="text-sustainable-100">Track your eco-purchases</span>
                  </div>
                  <PlusCircle className="h-12 w-12 text-sustainable-300 group-hover:text-white transition-colors duration-300" />
                </div>
              </Link>
              <Link href="/wardrobe" className="group">
                <div className="bg-white hover:bg-sustainable-50 border-2 border-sustainable-600 text-sustainable-700 p-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">View My Wardrobe</h3>
                    <span className="text-sustainable-600">Explore your sustainable items</span>
                  </div>
                  <Shirt className="h-12 w-12 text-sustainable-600 group-hover:text-sustainable-700 transition-colors duration-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

