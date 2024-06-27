import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const FRONTEND_MAIN_URL = document.location.origin;

const doAPIRequest = async (route, method = 'get', payload = null, cType = 'application/json') => {
    try {
        const url = BACKEND_URL + route;
        const headers = cType ? {
            'Content-Type': cType
        } : null;

        const response = await axios.request({
            method,
            url,
            headers,
            data: payload
        });

        if (response.status === 404) {
            throw new Error('User not found');
        }

        return response.data;
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
};

export const getHTML = async (lang) => {
    return doAPIRequest(`/adverts/how-to/${lang}`, 'get', null, 'text/html');
}

export const regNewUser = async (payload) => {
    // no contenttype header
    return doAPIRequest('/auth/register', 'post', payload, null);
};

export const regNewCompany = async (payload) => {
    return doAPIRequest('/auth/register-company', 'post', payload);
};

export const sendEmail = async (titleString, logInString, password, eMail) => {
    return doAPIRequest('/users/to-email', 'post', {
        to: eMail,
        subject: `AvielJobs: ${titleString}`,
        html: `<p>${password}</p><p><a href='${FRONTEND_MAIN_URL}/login'>${logInString}</a></p>`,
        attachments: []
    });
};

export const sendVerificationEmail = async (eMail) => {
    return doAPIRequest('/auth/email', 'post', { eMail });
}