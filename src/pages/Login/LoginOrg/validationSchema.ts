import {object} from "yup";
import {isPassword, isRequired} from "../../../utils/validation";

/***
 * @description Инфа по валидации
 */

export const validationSchema = object().shape({
    email: isRequired.email('Неправильный e-mail'),
    password: isRequired.concat(isPassword)
})