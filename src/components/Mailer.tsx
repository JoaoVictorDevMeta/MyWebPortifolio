import emailjs from 'emailjs-com';
import { useForm, SubmitHandler } from "react-hook-form";
import { database } from '../firebase';
import { ref, get, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { publicIpv4 } from 'public-ip';
import Swal from 'sweetalert2'

import Button from "../shared/Button";

import './Mailer.scss'

type Inputs = {
    from_name: string;
    from_email: string;
    message: string;
    ip_address: string;
}

function Mailer({variant}: {variant: string}) {
    const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        setValue
    } = useForm<Inputs>({
        mode: "onBlur",
    })

    useEffect(() => {
        publicIpv4().then(ip => {
            setValue('ip_address', ip);
        });
    }, [setValue]);

    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        const ip_address = data.ip_address.replace(/\./g, '_');
        const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
        const reference = ref(database, `emails/${ip_address}`)
        setLoading(true);
        
        get(reference).then((snapshot) => {
            const emailTimestamps = snapshot.val() || [];
            const recentEmailTimestamps = emailTimestamps.filter((timestamp: number) => timestamp > oneWeekAgo);

            if (recentEmailTimestamps.length < 2) {
                if (e) {
                    emailjs.sendForm(serviceId, templateId, e.target as HTMLFormElement, publicKey)
                    .then(() => {
                        recentEmailTimestamps.push(Date.now());
                        set(reference, recentEmailTimestamps);

                        Swal.fire({
                            title: 'Obrigado pelo Contato',
                            text: 'tentarei responder sua mensagem o mais breve possivel',
                            icon: 'success',
                            confirmButtonText: 'Ok, entendi'
                        })
                        setLoading(false);
                    }, () => {
                        Swal.fire({
                            title: 'Algo deu errado',
                            icon: 'error',
                            confirmButtonText: 'Vou entrar em contato por outro método!'
                        })
                        setLoading(false);
                    });
                }
            } else {
                Swal.fire({
                    title: 'Você ja enviou muitos emails!',
                    text: 'Esse limite é uma medida necessaria para o controle de envio, evitando spams',
                    icon: 'error',
                    confirmButtonText: 'Ok, entendi'
                })
                setLoading(false);
            }
        });
    }

  return (
    <div className='mailer'>
        <p>Mande um email para mim!</p>
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='fields'>
                <div className='small'>
                    <div className='input'>
                        <label htmlFor="nome">Seu Nome</label>
                        <input {...register('from_name',
                            { required: true },
                        )} id="nome" />
                        {errors.from_name?.type === "required" && <span>Coloque seu Nome</span>}
                    </div>
                    <div className='input'>
                        <label htmlFor="email">Seu Email</label>
                        <input {...register('from_email',
                            { required: true },
                        )} id='email'/>
                        {errors.from_email?.type === "required" && <span>Email Obrigatório</span>}
                    </div>
                </div>
                <div className='input message'>
                    <label htmlFor="message">Mensagem</label>
                    <textarea {...register('message',
                        { required: true },
                    )} id='message' />
                    {errors.message?.type === "required" && <span>Escreva sua mensagem</span>}
                </div>
            </div>
            <Button 
                disabled={!isValid} 
                variant={variant as 'primary' | 'secondary' | 'submit' | undefined} 
                width="200px" 
                height="50px"
            >{loading ? "Enviando..." : "Enviar"}</Button>
        </form>
    </div>
  )
}

export default Mailer