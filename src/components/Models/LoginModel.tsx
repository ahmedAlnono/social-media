import useLoginModel from "@/hooks/useLoginModel"
import { useCallback, useState } from "react";
import Input from "../Input";
import Model from "../Model";
import useRegisterModel from "@/hooks/useRegisterModel";

const LoginModel = () => {
    const LoginModel = useLoginModel();
    const RegisterModel = useRegisterModel();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [isLoading , setIsLoading] = useState(false);

    const onToggle = useCallback(()=>{
        if(isLoading) {
         return;
        }
        LoginModel.onClose();
        RegisterModel.onOpen();
     },[isLoading , RegisterModel , LoginModel])
    const onSubmit = useCallback( async ()=>{
        try{
            setIsLoading(true)
            // i will add log in function later
            LoginModel.onClose();
        }catch (e){
            console.log(e);
        }finally{
            setIsLoading(false);
        }
    },[LoginModel]);
    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input 
            placeholder="Email.."
            onChange={(event)=>{
                setEmail(event.target.value)
            }}
            value={email}
            disabled={isLoading}
            />
            <Input 
            placeholder="password.."
            onChange={(event)=>{
                setPassword(event.target.value)
            }}
            value={password}
            disabled={isLoading}
            />
        </div>
        )
        const FooterContent =  (
            <div className='text-neutral-400 text-center mt-4'>
                <p>You don't have account
                    <span 
                    className='text-white cursor-pointer hover:underline'
                    onClick={onToggle}> Create</span>
                </p>
            </div>
        )
  return (
    <Model 
    disabled={isLoading}
    isOpen={LoginModel.isOpen} 
    title="Login"
    actionLabel="Sign in"
    onClose={LoginModel.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
    footer={FooterContent}/>
  )
}

export default LoginModel