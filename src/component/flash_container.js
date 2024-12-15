
export const FlashContainer = ({data}) => {

  const flashContent = (flash, index) =>
    <div class='bg-white rounded-md shadow-md p-10 mt-4 '>
     <div class='text-2xl font-bold '>Flash {index+1}</div>
     <div class='flex flex-row gap-5'>
    <div>Position : {flash['flash-position']}</div>
    <div>Taille : {flash['flash-size']}</div>
    </div>
    <div>Flash :<img src={flash['img-flash']} alt='img-flash'></img></div>
    <div>Emplacement :<img src={flash['img-flash-position']} alt='img-flash-position'></img></div>
  </div>

  const buildContent = () => {
    let res = []
    for (let i = 0; i < nb; i++) {
      res.push(flashContent({
        "flash-position" : data[`flash-position-${i}`],
        "flash-size" : data[`flash-size-${i}`],
        "img-flash" : data[`img-flash-${i}`],
        "img-flash-position" : data[`img-flash-position-${i}`]
              
      }, i))
    }
    return res
  }

  const getNb = () => {
    let res = Object.keys(data).filter((e) => e.includes('flash')).map((e) => parseInt(e.slice(-1)))
    return(Math.max(...res))
  }

  const nb = getNb()


  return(
    <div class='flex flex-col'>
     {buildContent()}
    </div>
  )
}