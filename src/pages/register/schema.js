import * as yup from 'yup'

const nameRegex = /^[a-zA-Z0-9_]*$/
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const noroffRegex = /^[a-zA-Z0-9._%+-]+@(?:stud\.)?noroff\.no$/

export const schema = yup 
 .object({

    email: yup 
     .string()
     .matches(emailRegex, "* Must be a valid email")
     .matches(noroffRegex, "* stud.noroff.no or noroff.no email is required")
     .required("* Please fill in email"),
    password: yup
     .string()
     .min(8, "* Minimum 8 characters")
     .required("* Please enter a message"),

 })
 .required()