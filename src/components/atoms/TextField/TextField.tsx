import { Text } from "../Text";
type Props = {
    textarea?: boolean;
    type?: "text" | "email" | "number" | "password";
    placeholder: string;
    textClassName?: string;
    containerClassName?: string;
    errorMessage?: string;
    onChange?: (e?: any) => void;
    value: string;
    secured?: boolean;
    label?: string;
};

export const TextField = ({
    textarea,
    type,
    containerClassName,
    textClassName,
    errorMessage,
    secured,
    label,
    ...props
}: Props) => {
    return (
        <div className={containerClassName}>
            <Text className="text-white text-lg">{label || ""}</Text>
            {/* TEXTAREA */}
            {textarea ? (
                <textarea
                    {...props}
                    className="w-full p-4 rounded-lg bg-primary-300 h-[100px] outline-none "
                />
            ) : (
                // TEXT INPUT
                <input
                    className={`w-full p-4 rounded-lg bg-primary-300 outline-none ${textClassName}`}
                    type={secured ? "password" : type}
                    {...props}
                />
            )}
            {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
        </div>
    );
};
