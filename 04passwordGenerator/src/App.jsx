import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [password,setPassword] = useState("")
  const [length,setLength] = useState("8")
  const [charallowed,setcharAllowed] = useState(false)
  const [numallowed,setnumAllowed] = useState(false)
  const [passcopied,setPassCopied] = useState(false)

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() =>{
    let password ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(charallowed) str+= "!@#$%^&*()_"
    if(numallowed) str+= "0123456789"

    for(let i=1 ; i<length ; i++){
      password += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(password)
  },[length,charallowed,numallowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,20);
      window.navigator.clipboard.writeText(password)
      setPassCopied(true)
      setTimeout(()=>setPassCopied(false),2000);
        
      
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numallowed,charallowed,passwordGenerator])
  return (
    <>
      <div className='bg-black h-screen w-screen p-10'>
            <div className='w-full bg-slate-700 rounded-xl shadow-lg'>
              <h1 className='text-center font-bold text-2xl'>Password-generator</h1>
              <div className='flex-row justify-center text-yellow-600'>
                <div className='flex my-8 justify-center rounded-lg'>
                  <div>
                    <input type="text"
                    className='rounded w-[600px] h-[30px] outline-none'
                    value={password}
                    readOnly
                    ref={passwordRef}
                     />
                  </div>
                  <button className={`h-[30px] w-[100px] bg-blue-700 text-white rounded py-0.5 shrink-0 outline-none -translate-x-0.5 hover:bg-opacity-90 ${passcopied ? 'animate-clicked' : ''}`} onClick={copyPasswordToClipboard} >
                    Copy
                  </button>
                </div>
                {passcopied && <div className='text-center font-medium text-lg'>Password Copied To Clipboard Succesfully</div> }
                <div className='flex py-3 justify-center gap-4 text-lg'>
                  <input type="range"
                  className='cursor-pointer' 
                  min={8}
                  max={20}
                  value={length}
                  onChange={(e)=>{setLength(e.target.value)}}
                  />
                  <label htmlFor="range">Length : {length}</label>
                  <input type="checkbox"
                  defaultChecked={charallowed}
                  id='charInput'
                  onChange={(e)=>{
                    setcharAllowed((prev)=>!prev)
                  }}
                  />
                  <label htmlFor="charInput">Characters</label>
                  <input type="checkbox"
                  defaultChecked={numallowed}
                  id='numberInput'
                  onChange={(e)=>{
                    setnumAllowed((prev)=> !prev)
                  }} 
                  />
                  <label htmlFor="numberInput">Numbers</label>

                </div>
                
              </div>
            </div>
      </div>
    </>
  )
}

export default App
