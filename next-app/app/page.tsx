import Header from "@/components/header"
import MotionButton from "@/components/test-components/motion-button"

export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto items-center justify-center text-white bg-black">
      <Header />
      <div className="flex flex-col gap-y-8 py-16">
        <MotionButton />
      </div>
    </div>
  )
}
