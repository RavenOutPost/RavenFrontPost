import { CustomerHeader } from "./customer_header"
import { FlashContainer } from "./flash_container"
import { ProjectContainer } from "./project_container"

export const CustomerContent = ({customer}) =>  {



  return <div>
    <CustomerHeader customer={customer}/>
    {
    Object.keys(customer).filter((e) => e.includes('project')).length ? <ProjectContainer data={customer}/> :  <FlashContainer data={customer}/>
    }
   

    {/* {Object.entries(customer).map((e) => <div>{e[0]} - {getElem(e[1])} </div>)} */}
  </div>
}