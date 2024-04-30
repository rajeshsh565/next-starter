import Link from "next/link"
const SingleDrinkLayout = ({children}) => {
  return (
    <div>
        <Link href= "/drinks" className="btn btn-accent mt-5 static">Back To Drinks</Link>
        {children}
    </div>
  )
}
export default SingleDrinkLayout