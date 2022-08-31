
const TextInput = (props) => {
    return (
        <div className="bg-transparent">
            <div className='w-[400px] h-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <input id={props.id} className='m-1 px-2 text-xl w-[392px] h-[32px] rounded-md outline-none border-none wbg-white bg-white ' placeholder={props.placeholder} value={props.value}></input>
            </div>
        </div>
    );
}

export default TextInput;