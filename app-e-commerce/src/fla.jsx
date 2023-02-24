

import { useRef, useState } from 'react'


export function Test() {

    const inputName = useRef(null)
    const [name, setName] = useState("")
    const [isOn, setIson] = useState(false)

    function keyisOn() {
        setName(inputName.current.value)
        setIson(true)
        inputName.current.value=""
    }
    
    return (
        <div>
            <label>
                nome
                <input type="text" name="name" ref={inputName} />
                <button onClick={keyisOn}>Pesquisar</button>
            </label>
            <p>{isOn?name:"bloquedo"}</p>
        </div>
    )
}
