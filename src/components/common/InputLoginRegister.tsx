
interface InputProps {
    inputId: string;
    inputTitle: string;
    inputType: string;
}
export const Input = ({inputId, inputTitle, inputType}: InputProps) => {
    return (
        <div className="relative">
            <input type={inputType} name={inputId} id={inputId} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-400 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
            <label htmlFor={inputId} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 bg-black peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{inputTitle}</label>
        </div>
    );
};
