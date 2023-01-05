import { object, string, number } from "yup";


export const addValidationSchema = object({
    firstName: string().required("Firstname is mandatory."),
    lastName: string().required("Lastname is mandatory."),
    salary: number().required("Salary must be in range 1 and 1000")
});