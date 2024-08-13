import Link from "next/link"
import { ActiveLink } from "./ActiveLink"

const pathsCollection = [
        {path:"/", text:"Inicio"},
        {path:"/about", text:"Acerca"}, 
        {path:"/contact", text:"Contacto"}
]

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#" className="text-white text-xl font-bold">Brand</a>
      <div className="flex items-center">
        {
            pathsCollection.map(props => <ActiveLink key={props.path} {...props} />)

        }
        
      </div>
    </div>
  </nav>
  )
}

