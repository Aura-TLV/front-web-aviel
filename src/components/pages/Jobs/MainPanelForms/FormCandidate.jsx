import { useTranslation } from "react-i18next";
import './FormCandidate.css';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const EXAMPLE_CV_LINK = `${BACKEND_URL}/users/cv-example`;

const FormCandidate = () => {

    const passwordLinkHandler = (e, msg) => {
        e.preventDefault();
        alert(msg);
    }


    const submitHandler = (e, msg) => {
        e.preventDefault();
        alert(msg);
    }

    const { t } = useTranslation();

    return (
        <div>
            <form onSubmit={(e) => submitHandler(e, t('mainPanel.candidate.formSubmitMsg'))}>

                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="login">{t('mainPanel.candidate.login')}:</label>
                        <input id="login" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="eMail">{t('mainPanel.candidate.eMail')}:</label>
                        <input id="eMail" type="email" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="password">{t('mainPanel.candidate.password')}:</label>
                        <p>
                            <a id="password" href="#" 
                            onClick={(e) => passwordLinkHandler(e, t('mainPanel.candidate.passwordResetSent'))} className="form-link">
                                {t('mainPanel.candidate.passwordLink')}
                            </a>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="userName">{t('mainPanel.candidate.name')}:</label>
                        <input id="userName" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="birthDate">{t('mainPanel.candidate.birthDate')}:</label>
                        <input type="date" id="birthDate" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="city">{t('mainPanel.candidate.city')}:</label>
                        <input id="city" placeholder="" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="phone">{t('mainPanel.candidate.phone')}:</label>
                        <input id="phone" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="job">{t('mainPanel.candidate.vacancy')}</label>
                        <input id="job" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="status">{t('mainPanel.candidate.status.label')}</label>
                        <select id="status">
                            <option value="teudat-zeut" selected>{t('mainPanel.candidate.status.t1')}</option>
                            <option value="work-visa">{t('mainPanel.candidate.status.t2')}</option>
                            <option value="tour-visa">{t('mainPanel.candidate.status.t3')}</option>
                            <option value="blue-paper">{t('mainPanel.candidate.status.t4')}</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        {t('mainPanel.candidate.additionalInfo')}:<br />
                        <textarea id="additionalInfo" style={{ resize: 'none', width: '100%' }} />
                    </div>
                </div>

                <div className="row">
                    {t('mainPanel.candidate.extraInfoLabel')}:<br />
                    <div className="col-md-4">
                        {t('mainPanel.candidate.workingHours')}:
                        <input name="workingHours" checked type="checkbox" value={8} />8
                        <input name="workingHours" type="checkbox" value={10} />10
                        <input name="workingHours" type="checkbox" value={12} />12
                        <br />
                        {t('mainPanel.candidate.wagePerHour')}:
                        <input name="wagePerHour" checked type="checkbox" value={33} />33+
                        <input name="wagePerHour" type="checkbox" value={40} />40+
                        <input name="wagePerHour" type="checkbox" value={50} />50+
                    </div>
                    <div className="col-md-4">
                        {t('mainPanel.candidate.driver')}:
                        <input name="driver" type="radio" />{t('mainPanel.candidate.controls.checkboxY')}
                        <input name="driver" checked type="radio" />{t('mainPanel.candidate.controls.checkboxN')}
                        <br />
                        {t('mainPanel.candidate.lunch')}:
                        <input name="lunch" type="radio" />{t('mainPanel.candidate.controls.checkboxY')}
                        <input name="lunch" checked type="radio" />{t('mainPanel.candidate.controls.checkboxN')}
                        <br />
                    </div>
                    <div className="col-md-4">
                        {t('mainPanel.candidate.living')}:
                        <input name="living" type="radio" />{t('mainPanel.candidate.controls.checkboxY')}
                        <input name="living" checked type="radio" />{t('mainPanel.candidate.controls.checkboxN')}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="cv">{t('mainPanel.candidate.cv')}:</label>
                        <input type="file" accept='application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf' id="cv" />
                    </div>
                    <div className="col-md-4">
                        <a className="form-link" href={EXAMPLE_CV_LINK} target="_blank">{t('mainPanel.candidate.cvLink')}</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <button type="submit">
                            {t('mainPanel.candidate.controls.btnSave')}
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default FormCandidate;