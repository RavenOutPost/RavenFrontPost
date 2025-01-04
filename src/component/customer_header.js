export const CustomerHeader = ({customer}) => {

  const getDispo = (dispo) => {
    const result  = {}
    dispo.forEach((d) => {
      let newDate = new Date(Date.UTC(2017, 0, 2));
      newDate.setDate(newDate.getDate() + d%7);  
      const data = newDate.toLocaleDateString('fr-FR', { weekday: 'long' });
      if (!result[data]) {
        result[data] = [d >= 7 ? 'aprèm' : 'matin']
      } else {
        result[data].push(d >= 7 ? 'aprèm' : 'matin')
      }
    })
    return Object.entries(result).map((e) => <div>{e[0]} : {e[1].join()}</div>)
}

  return (
    <div class='bg-white rounded-md shadow-md p-10'>
    <div class='flex flex-row'>
      <div class='flex flex-row flex-1'>
        <div class='w-1/2'>
          <div>Prénom</div>
          <div>Nom</div>
          <div>Pronom</div>
        </div> 
        <div class='w-0.5 h-full bg-pink-300 mx-16'/>
        <div class='w-full'>
          <div>{customer.firstname}</div>
          <div>{customer.name}</div>
          <div>{customer.pronun}</div>
        </div>
      </div>
      <div class='flex flex-row flex-1'>
        
      <div class='w-2/3'>
          <div>Email</div>
          <div>Téléphone</div>
          <div>Date de naissance</div>
        </div> 
        <div class='w-0.5 h-full bg-pink-300 mx-16'/>
        <div class='w-full'>
          <div>{customer.email}</div>
          <div>{customer.phone}</div>
          <div>{customer.birthdate}</div>
        </div>
      </div>
    </div>
    <div class='h-0.5 w-full bg-pink-300 my-4'/>
      <span>Disponibilité : </span>
      <div class='grid grid-cols-2'>
        {getDispo(customer.dispo.split(','))}
      </div>
     
      <div> <span>Note : </span>{customer.dispo_comment}</div>

    </div>
  )
}