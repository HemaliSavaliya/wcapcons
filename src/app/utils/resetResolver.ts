import * as yup from "yup";
import { ValidationError } from 'yup';

export interface FormValues {
    password: string;
    confirmPassword: string;
}

const validationSchema = yup.object().shape({
    password: yup
        .string()
        .required("Please enter your new password")
        .min(8, "Password must be at least 8 characters long"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Please confirm your new password"),
});

export const customResolver = async (data: FormValues) => {
    try {
        // Use Yup for schema validation
        await validationSchema.validate(data, { abortEarly: false });

        // Perform additional custom validation
        const errors: Partial<FormValues> = {};

        // Add your custom validation logic here
        // For example:
        if (data.password.includes("password")) {
            errors.password = "Password cannot contain the word 'password'";
        }

        // Return errors if any
        return {
            values: data,
            errors: Object.keys(errors).length ? errors : {},
        };
    } catch (validationErrors) {
        // Handle Yup validation errors
        if (validationErrors instanceof ValidationError) {
            const yupErrors: Partial<Record<keyof FormValues, string>> = {}; // Index signature added here
            validationErrors.inner.forEach((error: ValidationError) => {
                if (error.path) { // Check if path is defined
                    yupErrors[error.path as keyof FormValues] = error.message; // Use type assertion here
                }
            });
            return {
                values: {},
                errors: yupErrors,
            };
        } else {
            // Handle other types of errors
            console.error("An error occurred during validation:", validationErrors);
            return {
                values: {},
                errors: { _error: "An error occurred during validation" },
            };
        }
    }
};