import {string} from "yup";


/***
 * @description Обязательное поле
 */
export const isRequired = string().required("Обязательное поле")

/**
 * @description Валидация e-mail
 */

/**
 * @description Валидация password
 */
export const isPassword = string()
    .min(4, 'Не меньше 4 символов')
    .max(12, 'Не больше 12 символов')