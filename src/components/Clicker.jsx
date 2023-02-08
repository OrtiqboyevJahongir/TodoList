import React,{useImperativeHandle, forwardRef,useRef} from 'react';


const  Clicker = forwardRef ((props , ref)=>{

    const {hasError,placeholder,update,value} = props
    const inputRef = useRef()

    useImperativeHandle(ref,()=>{
        return{
            focus(){
                inputRef.current.focus()
            }
        }
    })

    
    return (
        <>
            
            <input 
            type="text" 
            className='form-control w-50 mx-auto my-2'
            ref={inputRef}
            value = {value}
            onChange = {(e)=>update(e.target.value)}
            placeholder={hasError ? "ERROR" : placeholder}
            style = {{borderColor : hasError? "red" : "black" , outline:"none"}}
            />
           
        </>
    );
});

export default Clicker;