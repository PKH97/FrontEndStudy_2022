import React, { useRef } from "react";
import emailjs, { sendForm } from '@emailjs/browser';

function Contactus() {
    const form = useRef(); // 폼태그를 선택하기

    const sendEmail = (e) => {
        e.preventDefault();
        
        // emailjs연결함수
        emailjs.sendForm("service_bqje2xj", "template_wh3luiq", form.current, "qp8OJMYDpmdFuzZYJ")
            .then((result) => {
                console.log(result.text);
                alert('매일보내기 성공');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset(); //input태그에 입력된 내용 삭제 -> 초기화.
    
    }
    
    return(
        <div style={{margin:'50px', width: '220px', border: '2px solid #000', }}>
            <form ref={form} onSubmit={sendEmail}>
                <p><label>Name</label><input type="text" name="to_name" /></p>
                <p><label>Email</label><input type="text" name="from_name" /></p>
                <p><label>Message1: </label></p>
                <p><textarea name="message" /></p>
                <p><label>Message2: </label></p>
                <p><textarea name="message" /></p>
                <hr/><hr/>
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}

export default Contactus;


// npm install @emailjs/browser --save