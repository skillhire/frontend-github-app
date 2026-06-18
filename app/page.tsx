import { Typography } from "@/components/elements/Typography"

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Typography
        variant="h1"
        textAlign="center"
        text="Build something amazing."
        className="text-6xl font-bold font-heading text-black"
      />
    </div>
  )
}

export default Home