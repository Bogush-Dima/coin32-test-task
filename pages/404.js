import { useRouter } from "next/router"
import { useEffect } from "react"

const ErrorPage = () => {
  const routes = useRouter()

  useEffect(() => {
    routes.push("/")
  }, [])

  return null
}

export default ErrorPage