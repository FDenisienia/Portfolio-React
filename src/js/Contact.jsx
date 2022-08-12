import '../css/contact.css'
import TituloComponent from './components/TituloComponent'
import emailjs from 'emailjs-com'


function Contact(){

    function verifyAndSend(e){

        e.preventDefault()
        const form = document.getElementById('form')

        const name = document.getElementById('name').value

        const namePatron = /[a-zA-Z]/
        const incorrect = document.getElementById('incorrect')

        const email = document.getElementById('email').value
        const emailPatron = /@/
        const incorrect1 = document.getElementById('incorrect1')


        const question = document.getElementById('subject').value
        const questionPatron = /[A-Za-z0-9]/
        const incorrect2 = document.getElementById('incorrect2')    

        const emailSent = document.getElementById('emailSent')
     
        if(namePatron.test(name)){
            incorrect.classList.remove('incorrect')
        } else {
            incorrect.classList.add('incorrect')
            return false
         }

        if(emailPatron.test(email)){
            incorrect1.classList.remove('incorrect')
        }  else {
            incorrect1.classList.add('incorrect')
            return false
        }

        if(questionPatron.test(question)){
            incorrect2.classList.remove('incorrect')
            emailSent.classList.add('sent')
        } else {
            incorrect2.classList.add('incorrect')
            return false
        }


        emailjs.sendForm('service_qkso2gq','template_kv59mk9',"#form",'McfOfnAOGfDUeNIBt').then(res=>{
            console.log(res);
        })


        function removeSent() {
            emailSent.classList.remove('sent')
        }

        setInterval(removeSent, 3000)


    }



    return(
        
        <div className="container-contact" id='contact'>
            <TituloComponent titulo="Contact Me"></TituloComponent>
            <section className="contact row">
                <form action="" id="form" className='d-flex flex-column align-items-center justify-content-center' >

                    <div className="col-11 d-flex flex-column p-3 ">
                        <label htmlFor="" className="text-light fs-4">Name</label>
                        <input type="text" placeholder="Enter your name" className="text-light text-start p-2 mt-3 form-control" name="name" id="name"/>
                        <span className="correct" id='incorrect'>Enter a valid name</span>
                    </div>

                <div className="col-11 d-flex flex-column p-3 ">
                    <label htmlFor="" className="text-light fs-4">Email</label>
                    <input type="email" placeholder="Enter your email" className="text-light text-start p-2 mt-3 form-control" name="email" id="email"/>
                    <span className='correct' id='incorrect1'>Enter a valid email</span>
                </div>

                <div className="col-11 d-flex flex-column p-3">
                    <label htmlFor="" className="text-light fs-4">Message</label>
                    <textarea name="subject" className='p-2 mt-3' placeholder='Enter your message' id="subject"></textarea>
                    <span className='correct' id='incorrect2'>Enter a question</span>
                </div>
                <span id='emailSent' className='fs-4 text-uppercase notsend me-2'>¡Email Sent!</span>
                <button type="submit" value="Send" className='btn-contact btn btn-danger mt-4' onClick={verifyAndSend}>Send</button>
                </form>
            </section>
        </div>
    )
}


export default Contact