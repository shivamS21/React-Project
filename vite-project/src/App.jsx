import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let pass = ''

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '~`!@#$%^&*();,./|'
    for (let i = 0; i < length; i++) {
      const ind = Math.floor(Math.random()*str.length);
      pass += str.charAt(ind);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5);
    console.log(passwordRef.current)
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'> Password Generator</h1>
      
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={12}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div>
        <input
        type='checkbox'
        defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
        />
        <label>Include Numbers</label>
      </div>
      <div>
        <input
        type='checkbox'
        defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setCharAllowed((prev) => !prev);
          }}
        />
        <label>Include characters</label>
      </div>
      
    </div>
  )
}

export default App
