import React, { useEffect, useState, useRef } from 'react'
import Button from '../../common/Button/Button'
import css from './Popup.module.scss'
import congratsImage from '../../../assets/buy-cosmoland/congrats-image.png'
import Warning from '../../common/Warning/Warning'
import { composeValidators } from './../../../validators/composeValidators';
import { required } from './../../../validators/validators';
import { Field, Form } from 'react-final-form';
import { axios } from '../../../http/http'
import Preloader from './../../Preloader/Preloader';

const Popup = ({ errorText, onHide, amount, isSubscribe, bonus: Bonus }) => {
    const [isLoading, setLoading] = useState(false)
    const popup = useRef(null)
    const bonusStyles = Bonus ? css.bonus: null
    const errorStyles = errorText ? css.error: null

    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = 'auto';
        }
    }, [])


    const onDevSubmit = (data) => {
        async function send() {
            setLoading(true)
            await axios.post('/email/send-feedback', {...data})
            setLoading(false)
            onHide()
        }

        send()
    }

    return (
        <>
            <div className={css.placeholder} onClick={onHide}>
            </div>
            <div className={css.popup + ' ' + bonusStyles + ' ' + errorStyles} ref={popup}>
                {errorText && 
                    <>
                        <Warning errorText={errorText} />
                    </>
                }

                {!errorText && !isSubscribe && !Bonus &&
                    <div className={css.congratsContainer}>
                        <div>
                            <img src={congratsImage} alt="" />
                        </div>
                        <div className={css.congratsText}>
                            <h3 className={css.congratsTitle}>congratulations!</h3>
                            <span>Purchase completed</span>
                            <span>Cosmolands on your wallet - {amount}</span>
                            <Button isColorBlack={true} onClick={onHide}>ok</Button>
                        </div>
                    </div>
                }

                {Bonus && 
                <>
                    <Bonus />
                    <div className={css.close} onClick={onHide}>x</div>
                </>}

                {isSubscribe &&
                    <Form onSubmit={onDevSubmit} render={({ handleSubmit, form, submitting }) => (
                        <form onSubmit={handleSubmit} className={css.form}>
                            <Field name="name" validate={composeValidators(required)}>
                                {({ input, meta }) => (
                                    <div className={css.inputContainer}>
                                        <label className={css.label}>Name</label>
                                        <div className={css.fieldContainer}>
                                            <input type='text' className={css.input} placeholder='name' {...input} />
                                            {meta.error && meta.touched && <span className={'error ' + css.fieldError}>{meta.error}</span>}
                                        </div> 
                                    </div>
                                )}
                            </Field>
        
                            <Field name="specialization" validate={composeValidators(required)}>
                                {({ input, meta }) => (
                                    <div className={css.inputContainer}>
                                        <label className={css.label}>Specialization</label>
                                        <div className={css.fieldContainer}>
                                            <input type='text' className={css.input} placeholder='specialization' {...input} />
                                            {meta.error && meta.touched && <span className={'error ' + css.fieldError}>{meta.error}</span>}
                                        </div>
                                    </div>
                                )}
                            </Field>
        
                            <Field name="howYouCanHelp" validate={composeValidators(required)}>
                                {({ input, meta }) => (
                                    <div className={css.inputContainer}>
                                        <label className={css.label}>How can you help us build a new world</label>
                                        <div className={css.fieldContainer}>
                                            <textarea type='text' className={css.input} placeholder='How can you help us build a new world' {...input} />
                                            {meta.error && meta.touched && <span className={'error ' + css.fieldError}>{meta.error}</span>}
                                        </div>
                                    </div>
                                )}
                            </Field>

                            <Field name="email" validate={composeValidators(required)}>
                                {({ input, meta }) => (
                                    <div className={css.inputContainer}>
                                        <label className={css.label}>Your email</label>
                                        <div className={css.fieldContainer}>
                                            <input type='text' className={css.input} placeholder='Your email' {...input} />
                                            {meta.error && meta.touched && <span className={'error ' + css.fieldError}>{meta.error}</span>}
                                        </div>
                                    </div>
                                )}
                            </Field>

                            <Field name="telegram">
                                {({ input, meta }) => (
                                    <div className={css.inputContainer}>
                                        <label className={css.label}>Your telegram</label>
                                        <div className={css.fieldContainer}>
                                            <input type='text' className={css.input} placeholder='Your telegram' {...input} />
                                            {meta.error && meta.touched && <span className={'error ' + css.fieldError}>{meta.error}</span>}
                                        </div>
                                    </div>
                                )}
                            </Field>
                            
                            {isLoading && <Preloader />}

                            <div className={css.becomeDevBtnContainer}>
                                <Button type="submit" disabled={submitting} isFilled={true}>Send feedback</Button>
                            </div>
                        </form>
                    )}>
        
                    </Form>
                }

            </div>
        </>

    )
}

export default Popup