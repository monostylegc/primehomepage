import { cls } from "@libs/client/utils";

interface ButtonProps {
    large?: boolean;
    text: string;
    loading?: boolean;
    [key: string]: any;
}

export default function Button ({
    large = false,
    onClick,
    text,
    loading,
    ...rest
}: ButtonProps) {
    return (
        <button
            {...rest}
            className={cls(
                "w-full bg-secondary hover:bg-primary text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none",
                large ? "py-3 text-base" : "py-2 text-sm "
            )}
        >
            {loading ? "Loading..." : text}
        </button>
    );
}