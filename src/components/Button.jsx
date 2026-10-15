const Button = ({ index, setIndex }) => {


    return (
        <div className='flex justify-center items-center gap-4 p-4'>
            <button
                onClick={() => {
                    if (index > 1) {
                        setIndex(index - 1)

                    }

                }}
                disabled={index === 1}
                className='bg-amber-400 disabled:opacity-50 active:scale-95 cursor-pointer rounded text-black font-semibold py-2 px-4'>
                Prev
            </button>
            <h4>Page {index}</h4>
            <button
                onClick={() => {
                    setIndex(index + 1)

                }}
                className='bg-amber-400 active:scale-95 cursor-pointer rounded text-black font-semibold py-2 px-4'>
                Next
            </button>
        </div>
    )
}

export default Button