import '../Totalmoney/style.css'

export function Totalmoney({ cards }){
    const map = cards.map(element => {
        const value = element.value
        return +value
    })
    

    if(map.length > 0){
      
        return (
            <div className='totalmoney__container'>
                <div>
                    <p>Valor total:</p>
                    
                    <span>R$ {map.reduce((acc, cur) => acc + cur)}</span>
                </div>
                <span>O valor se refere ao saldo</span>
            </div>
        )
    }
}