import { string } from "yup";
import {object} from "yup";

export const validationSchema = object().shape({
    name: string().required('lyalyalya')
})