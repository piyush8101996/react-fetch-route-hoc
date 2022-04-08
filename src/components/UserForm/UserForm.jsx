import { useRef, useState } from 'react';
import { background } from '../../hoc/background';
import { createUser } from './../../services/users';
import styles from './UserForm.module.css';

const UserForm = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');

    const [fnameError, setFnameError] = useState(false);
    const [lnameError, setLnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [dobError, setDobError] = useState(false);

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const inputFnameRef = useRef(null);
    const inputLnameRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputDobRef = useRef(null);

    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const resetFields = () => {
        setFname('');
        setLname('');
        setEmail('');
        setDob('');
        setIsLoading(false);
    };

    const resetErrorState = () => {
        setSuccessMsg('');
        setErrorMsg('');
        setFnameError(false);
        setLnameError(false);
        setEmailError(false);
        setDobError(false);
    };

    const formValidation = () => {

        if(!fname){
            setErrorMsg('Error: First Name is missing !!!'); 
            setFnameError(true);
            inputFnameRef.current.focus();
            return false;
        }else if(!lname){
            setErrorMsg('Error: Last Name is missing !!!'); 
            setLnameError(true);
            inputLnameRef.current.focus();
            return false;
        }else if(!email){
            setErrorMsg('Error: Email is missing !!!'); 
            setEmailError(true);
            inputEmailRef.current.focus();
            return false;
        }else if(!re.test(email)){
            setErrorMsg('Error: Email is not valid !!!'); 
            setEmailError(true);
            inputEmailRef.current.focus();
            return false;
        }else if(!dob){
            setErrorMsg('Error: DoB is missing !!!'); 
            setDobError(true);
            inputDobRef.current.focus();
            return false;
        }

        return true;

    };

    const formSubmitHandler = () => {

        resetErrorState();

        // if(!(fname && lname && email && dob)){
        //     setErrorMsg('You need to fill all required fields!!!');
        //     return;
        // }

        if(!formValidation()) return;

        const user = {
            fname,
            lname,
            email,
            dob
        };

        setIsLoading(true);

        createUser(user)
        .then((data)=>{
            resetFields();
            setSuccessMsg(`User has been created successfully with id: ${data.id}`);
        })
        .catch(()=>{
            setIsLoading(false);
            setErrorMsg('There is some error, Please try later!!!');
        });
    };

    const formChangeHandler = (value, setStateCb) => {
        setStateCb(value);
    };

    return (
        <div>
            <div>
                <label>First Name: </label>
                <input 
                    type="input" 
                    ref={inputFnameRef}
                    value={fname}
                    className={fnameError? styles.inputError: ''}
                    onChange={(e)=>{formChangeHandler(e.target.value, setFname)}}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input 
                    type="input"
                    ref={inputLnameRef}
                    value={lname}
                    className={lnameError? styles.inputError: ''}
                    onChange={(e)=>{formChangeHandler(e.target.value, setLname)}}/>
            </div>
            <div>
                <label>Email Id: </label>
                <input 
                    type="email" 
                    ref={inputEmailRef}
                    value={email}
                    className={emailError? styles.inputError: ''}
                    onChange={(e)=>{formChangeHandler(e.target.value, setEmail)}}/>
            </div>
            <div>
                <label>DoB: </label>
                <input 
                    type="date"
                    ref={inputDobRef}
                    value={dob}
                    className={dobError? styles.inputError: ''}
                    onChange={(e)=>{formChangeHandler(e.target.value, setDob)}}/>
            </div>
            <div>
                <button 
                    onClick={formSubmitHandler}
                    disabled={isLoading}>
                    Submit
                </button>
            </div>
            <div className={styles.successMsg}>{successMsg}</div>
            <div className={styles.errorMsg}>{errorMsg}</div>
            {isLoading && (<div>Loading ...</div>)}
        </div>
    );
};

export default background(UserForm,'#f1f1f1');