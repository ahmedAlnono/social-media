import useRegisterModel from "@/hooks/useRegisterModel";
import useLoginModel from "@/hooks/useLoginModel";
import { useCallback, useState } from "react";
import Input from "../Input";
import Model from "../Model";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

const RegisterModel = () => {
    const RegisterModel = useRegisterModel();
    const LoginModel = useLoginModel();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [name , setName] = useState('');
    const [userName , setUserName] = useState('');
    const [isLoading , setIsLoading] = useState(false);

    const onToggle = useCallback(()=>{
       if(isLoading) {
        return;
       }
       RegisterModel.onClose();
       LoginModel.onOpen();
    },[isLoading , RegisterModel , LoginModel])

    const onSubmit = useCallback( async ()=>{
        try{
            setIsLoading(true)
            
            await axios.post('/api/register', {
                email,
                password,
                username: userName,
                name,
            });

            toast.success("account created");
            signIn("credentials",{
                email,
                password
            })
            
            RegisterModel.onClose();
        }catch (e){
            console.log(e);
            toast.error("unKnown Error Don't worry we will fix it");
        }finally{
            setIsLoading(false);
        }
    },[RegisterModel, email, password, userName, name]);
    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input 
            placeholder="Name..."
            onChange={(event)=>{
                setName(event.target.value)
            }}
            value={name}
            disabled={isLoading}
            />

            <Input 
            placeholder="username..."
            onChange={(event)=>{
                setUserName(event.target.value)
            }}
            value={userName}
            disabled={isLoading}
            />
            
            <Input 
            placeholder="Email..."
            onChange={(event)=>{
                setEmail(event.target.value)
            }}
            value={email}
            disabled={isLoading}
            />
            <Input 
            placeholder="password..."
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
            <p>Already have an account?
                <span 
                className='text-white cursor-pointer hover:underline'
                onClick={onToggle}> Signin</span>
            </p>
        </div>
    )
  return (
    <Model 
    disabled={isLoading}
    isOpen={RegisterModel.isOpen} 
    title="Create new account"
    actionLabel="Register"
    onClose={RegisterModel.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
    footer={FooterContent}/>
  )
}

export default RegisterModel
