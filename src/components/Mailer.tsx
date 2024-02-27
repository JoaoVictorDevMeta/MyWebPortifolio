import emailjs from 'emailjs-com';
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "../shared/Button";

type Inputs = {
    from_name: string;
    from_email: string;
    message: string;
}

function Mailer() {
    const serviceId='service_0o0cnrw';
    const templateId='template_wop7vhi';
    const publicKey="XyJ2qDDQiX0FrHzGF";

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<Inputs>({
        mode: "onBlur",
    })

    const onSubmit: SubmitHandler<Inputs> = (_, e) => {
        if (e) {
            emailjs.sendForm(serviceId, templateId, e.target as HTMLFormElement, publicKey)
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error)
            })
        }
    }

  return (
    <div>
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
                variant="submit" 
                width="200px" 
                height="50px"
            >Enviar</Button>
        </form>
    </div>
  )
}

export default Mailer