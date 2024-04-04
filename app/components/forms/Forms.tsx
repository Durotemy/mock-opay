import React from "react";
import { Formik } from "formik";


interface AppFormProps {
    initialValues: any,
    onSubmit: any,
    validationSchema: any,
    children: any,
    className?: any,
    values?: any,
}


const AppForm = ({ initialValues, onSubmit, validationSchema, children, className, values }: AppFormProps) => {
    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            className={className}
            values={values}
        >
            {() => <>{children}</>}
        </Formik>
    )
}

export default AppForm;
