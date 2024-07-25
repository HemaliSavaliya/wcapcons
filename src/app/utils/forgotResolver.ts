import { Resolver, ResolverResult, FieldErrors } from 'react-hook-form';
import * as yup from 'yup';

export interface FormData {
    email: string;
}

const forgotSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email address is required'),
});

const forgotResolver: Resolver<FormData> = async (data: FormData): Promise<ResolverResult<FormData>> => {
    try {
        await forgotSchema.validate(data);
        return {
            values: data,
            errors: {},
        };
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            const validationErrors: FieldErrors<FormData> = error.inner.reduce((acc: FieldErrors<FormData>, err: yup.ValidationError) => {
                const path = err.path as keyof FormData;
                return {
                    ...acc,
                    [path]: {
                        type: 'manual',
                        message: err.message,
                    },
                };
            }, {});

            return {
                values: {},
                errors: validationErrors,
            };
        } else {
            return {
                values: {},
                errors: {
                    type: 'manual',
                    message: 'An unexpected error occurred during validation.',
                },
            } as ResolverResult<FormData>; // Specify the return type explicitly
        }
    }
};

export default forgotResolver;


// import { Resolver, ResolverResult } from "react-hook-form";
// interface FormData {
//     email: string;
// }
// const validateEmail = (email: string): boolean => {
//     return email.includes("@");
// };
// const forgotResolver: Resolver<FormData> = async (data: FormData) => {
//     const isEmailValid = validateEmail(data.email);
//     if (!isEmailValid) {
//         return {
//             values: {}, // Empty object for values since there's no valid data
//             errors: {
//                 email: {
//                     type: "manual",
//                     message: "Invalid email address",
//                 },
//             },
//         };
//     }
//     return {
//         values: data,
//         errors: {}, // Empty object for errors since there's no validation error
//     };
// };
// export default forgotResolver;