import '../Form/style.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export function Form({setCards}){
    function handleSubmit(event){
        event.preventDefault()
        
        let currentValue = value

        if(type == 'saida'){
            currentValue = -value
        }
        
        if(description && value && type){
            setCards((oldCards) => [...oldCards, {description, value: currentValue, type, id}])
        } else {
            alert('Campo vazio')
        }
        
        setDescription((old) => '')
        setValue((old) => '')
        setType((old) => 'entrada')

    }

    const [description, setDescription] = useState('')
    const [value, setValue] = useState(+0)
    const [type, setType] = useState('entrada')
    const id = uuidv4()
   

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="description">Descrição</label>
            <input type="text" placeholder="Digite aqui sua descrição" id="description" value={description} onChange={event => setDescription(event.target.value)} />

            <div>
                <div>
                    <label htmlFor="value">Valor</label>
                    <input type="number" placeholder="Digite o valor" id="value" value={value} onChange={event => setValue(event.target.value)}/>
                </div>

                <div>
                    <label htmlFor="type">Tipo de valor</label>
                    <select value={type} id="type"  onChange={event => setType(event.target.value)}>
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                    </select>

                </div>
            </div>
            <button type='submit'>Inserir valor</button>
        </form>
    )
}