interface ConfirmationProps {
    name: string;
}

export default function Confirmation(props: ConfirmationProps) {
    return (
        <>
            <div className="grid justify-center gap-10 ">
                <h1 className="pb-10 text-3xl text-blue-800 font-">
                    Changes Saved Successfully...
                </h1>

                <div className="md:w-1/3">
                    <div className="flex flex-col items-center">
                        <img src="https://images.pexels.com/photos/31005653/pexels-photo-31005653.jpeg" alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100" />
                    </div>
                </div>
                <div>
                    Name: {props.name}
                </div>
            </div>
        </>
    )
}