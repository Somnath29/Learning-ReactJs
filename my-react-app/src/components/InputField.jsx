
function InputField({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    error
}) {
    return (
        <div style={{ marginBottom: "15px" }}>

            <label htmlFor={name}>
                {label}
            </label>

            <br />

            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${name}-error` : undefined}
            />

            {error && (
                <p id={`${name}-error`} style={{ color: "red" }}>
                    {error}
                </p>
            )}

        </div>
    );
}

export default InputField;
