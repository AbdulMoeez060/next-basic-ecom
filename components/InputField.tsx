import clsx from 'clsx'
import React from 'react'


const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, labelClassName, labelHtmlFor, ...inputProps }, ref) => {
        return (
            <div className="mb-4">
                {label && (
                    <label className={clsx("block mb-2 text-md", labelClassName)} htmlFor={labelHtmlFor || inputProps.id}>
                        {label}
                    </label>
                )}
                <input
                    {...inputProps}
                    ref={ref}
                    className={clsx("w-full p-2 bg-white appearance-none rounded-md border text-md", inputProps.className)}
                />
            </div>
        );
    }
);
InputField.displayName = 'InputField';


export default InputField